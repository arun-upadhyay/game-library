<?php

namespace Src;

/**
 * Game Controller
 */
class  GameController
{
    private $requestMethod;
    private $game;
    private $gameId;

    public function __construct($db, $requestMethod, $gameId)
    {
        $this->requestMethod = $requestMethod;
        $this->gameId = $gameId;
        $this->game = new GameModel($db);
    }

    public function processRequest()
    {
        switch ($this->requestMethod) {
            case 'GET':
                if (!empty($this->gameId)) {
                    $response = $this->game->view($this->gameId);
                } else {
                    $response = $this->game->viewAll();
                }
                break;
            case 'POST':
                $response = $this->game->add();
                break;
            case 'PUT':
                $response = $this->game->update($this->gameId);
                break;
            case 'DELETE':
                $response = $this->game->delete($this->gameId);
                break;
            default:
                $response = $this->notFoundResponse();
                break;
        }
        header($response['status_code_header']);
        if ($response['body']) {
            echo $response['body'];
        }
    }

    /**
     * @return array
     */
    private function notFoundResponse()
    {
        $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
        $response['body'] = null;
        return $response;
    }
}