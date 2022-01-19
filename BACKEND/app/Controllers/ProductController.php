<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Doctrine\ORM\EntityManager;

class ProductController
{
    private EntityManager $m_entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->m_entityManager = $entityManager;
    }

    public function getProducts(Request $request, Response $response, array $args): Response
    {
        $repository = $this->m_entityManager->getRepository("Products");
        $dbProducts = $repository->findAll();
        
        if($dbProducts == null) {
            // Pas de données
            return $response->withHeader('Content-Type', 'application/json')->withStatus(204);
        }

        $products = [];

        foreach($dbProducts as $produit) {
            $products[] = [
                "Reference" => $produit->getReference(),
                "Intitule" => $produit->getIntitule(),
                "Prix" => $produit->getPrix(),
                "CheminImage" => $produit->getCheminImage(),
                "Resume" => $produit->getResume(),
                "Note" => $produit->getNote(),
                "Type" => $produit->getType(),
                "Etat" => $produit->getEtat(),
                "ID_Produit" => $produit->getIdProduit(),
            ];
        }

        $response->getBody()->write(json_encode($products));

        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }

    public function getOneProduct(Request $request, Response $response, array $args): Response
    {
        $Reference = $args["Reference"] ?? "";

        if(!$Reference) {
            return $response->withHeader('Content-Type', 'application/json')->withStatus(400);
        }

        $repository = $this->m_entityManager->getRepository("Products");
        $dbProduct = $repository->findOneBy(array("reference" => $Reference));
        
        if($dbProduct == null) {
            // Pas de données
            return $response->withHeader('Content-Type', 'application/json')->withStatus(204);
        }

        $product = array(
            "Reference" => $dbProduct->getReference(),
            "Intitule" => $dbProduct->getIntitule(),
            "Prix" => $dbProduct->getPrix(),
            "CheminImage" => $dbProduct->getCheminImage(),
            "Resume" => $dbProduct->getResume(),
            "Note" => $dbProduct->getNote(),
            "Type" => $dbProduct->getType(),
            "Etat" => $dbProduct->getEtat(),
            "ID_Produit" => $dbProduct->getIdProduit()
        );

        $response->getBody()->write(json_encode($product));

        return $response->withHeader('Content-Type', 'application/json')->withStatus(200);
    }
}