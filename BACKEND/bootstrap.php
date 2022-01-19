<?php
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

require_once "vendor/autoload.php";

$isDevMode = false;

$conn;

if($isDevMode) {
    $conn = array(
        'host' => 'localhost',
        'driver' => 'pdo_mysql',
        'user' => 'root',
        'password' => 'root',
        'dbname' => 'dc60hn4t512ede',
        'port' => '3306'
    );
} else {
    $conn = array(
        'host' => 'ec2-18-234-17-166.compute-1.amazonaws.com',
        'driver' => 'pdo_pgsql',
        'user' => 'frfqgjardievbk',
        'password' => '406273e3d690ff558fa9a78f8bd50964d6bae5b1bbe5311ac338bf9d763610b9',
        'dbname' => 'df95mdmc314570',
        'port' => '5432'
    );
}

$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$entityManager = EntityManager::create($conn, $config);