<?php

require_once("../load.php");

use \Src\GameController;
use \Src\DatabaseConnector;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

if ($uri[1] !== 'api') {
    header("HTTP/1.1 404 Not Found");
    exit();
}
// all of our endpoints start with /person
// everything else results in a 404 Not Found
if ($uri[2] !== 'game') {
    header("HTTP/1.1 404 Not Found");
    exit();
}

// the user id is, of course, optional and must be a number:
$gameId = null;
if (isset($uri[3])) {
    $gameId = (int) $uri[3];
}

$requestMethod = $_SERVER["REQUEST_METHOD"];
// pass the request method and post ID to the Post and process the HTTP request:
$dbConnection = new DatabaseConnector();
$controller = new GameController($dbConnection->connect(), $requestMethod, $gameId);
$controller->processRequest();