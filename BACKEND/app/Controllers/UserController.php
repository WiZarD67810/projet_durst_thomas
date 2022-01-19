<?php

namespace App\Controllers;

use Client;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Doctrine\ORM\EntityManager;

class UserController
{
    private EntityManager $m_entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->m_entityManager = $entityManager;
    }

    public function postRegister(Request $request, Response $response, array $args): Response
    {
        $err = false;
        $body = $request->getParsedBody();
        
        $lastName = $body["lastName"] ?? "";
        $forname = $body["forName"] ?? "";
        $adresse = $body["adresse"] ?? "";
        $cityCode = $body["cityCode"] ?? "";
        $city = $body["city"] ?? "";
        $country = $body["country"] ?? "";
        $phone = $body["phone"] ?? "";
        $mail = $body["mail"] ?? "";
        $civility = $body["civility"] ?? "";
        $username = $body["username"] ?? "";
        $password = $body["password"] ?? "";

        if(!preg_match("/[a-zA-Z]{1,}/",$lastName))   {
            $err = true;
        }

        if(!preg_match("/[a-zA-Z]{1,}/",$forname))   {
            $err = true;
        }

        if(!preg_match("/[a-zA-Z]{1,}/",$adresse))   {
            $err = true;
        }

        if(!preg_match("/[0-9]{5}/",$cityCode))   {
            $err = true;
        }

        if(!preg_match("/[a-zA-Z]{1,}/",$city))   {
            $err = true;
        }

        if(!preg_match("/[a-zA-Z]{1,}/",$country))   {
            $err = true;
        }

        if(!preg_match("/[0-9]{10}/",$phone))   {
            $err = true;
        }

        if(!preg_match("/[a-zA-Z\.0-9]+@+[a-z]+.+[a-z]{2,3}/",$mail))   {
            $err = true;
        }

        if(!preg_match("/[a-zA-Z0-9]{1,}/",$username))   {
            $err = true;
        }

        if(!preg_match("/[a-zA-Z0-9]{6,}/",$password))   {
            $err = true;
        }

        if($err) {
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $repository = $this->m_entityManager->getRepository("Client");
        $dbUser = $repository->findOneBy(array("username" => $username));
        
        if($dbUser != null) {
            // Pas de données
            return $response->withHeader('Content-Type', 'application/json')->withStatus(409);
        }

        $newUser = new Client;

        $newUser->setLastname($lastName);
        $newUser->setForname($forname);
        $newUser->setAdresse($adresse);
        $newUser->setCitycode($cityCode);
        $newUser->setCity($city);
        $newUser->setCountry($country);
        $newUser->setPhone($phone);
        $newUser->setMail($mail);
        $newUser->setCivility($civility);
        $newUser->setUsername($username);
        $newUser->setPassword($password);

        $this->m_entityManager->persist($newUser);
        $this->m_entityManager->flush();

        return $response->withHeader('Content-Type', 'application/json')->withStatus(201);
    }

    public function postLogin(Request $request, Response $response, array $args): Response
    {
        $err = false;
        $body = $request->getParsedBody();
        
        $username = $body["username"] ?? "";
        $password = $body["password"] ?? "";
        
        if(!preg_match("/[a-zA-Z0-9]{1,}/",$username))   {
            $err = true;
        }

        if(!preg_match("/[a-zA-Z0-9]{6,}/",$password))   {
            $err = true;
        }

        if($err) {
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $repository = $this->m_entityManager->getRepository("Client");
        $dbUser = $repository->findOneBy(array("username" => $username, "password" => $password));
        
        if($dbUser == null) {
            // Pas de données
            return $response->withHeader('Content-Type', 'application/json')->withStatus(409);
        }

        if(!$dbUser and $dbUser->getUsername() != $username and $dbUser->getPassword() != $password) {
            return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
        }

        $user = array(
            "Nom" => $dbUser->getLastname(),
            "Prenom" => $dbUser->getForname(),
            "Adresse" => $dbUser->getAdresse(),
            "CP" => $dbUser->getCitycode(),
            "Ville" => $dbUser->getCity(),
            "Pays" => $dbUser->getCountry(),
            "Tel" => $dbUser->getPhone(),
            "Email" => $dbUser->getMail(),
            "Civilite" => $dbUser->getCivility(),
            "Login" => $dbUser->getUsername(),
            "Password" => $dbUser->getPassword(),
        );

        $response->getBody()->write(json_encode($user));

        $response = JWTController::createJWT($response, $username);

        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }
}