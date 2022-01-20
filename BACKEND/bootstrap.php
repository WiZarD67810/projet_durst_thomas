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
        'host' => 'ec2-3-222-49-168.compute-1.amazonaws.com',
        'driver' => 'pdo_pgsql',
        'user' => 'kewitdtegnskcu',
        'password' => '50df391327f7ef74980ca536112789a409b5535e20a6b46e673666c14d88cfaa',
        'dbname' => 'd4j204i7p4ejnf',
        'port' => '5432'
    );
}

$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$entityManager = EntityManager::create($conn, $config);