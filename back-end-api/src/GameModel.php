<?php

namespace Src;

use Src\Validators\BodyValidator;

class GameModel implements IGame
{
    private $db;

    public function __construct($db)
    {
        $this->db = $db;
    }

    public function add()
    {
        $input = (array) json_decode(file_get_contents('php://input'), true);
        if (!BodyValidator::Validate($input)) {
            return $this->invalidUserInputResponse();
        }
        $query = "INSERT INTO game(title, rating, review, last_played) VALUES (:title, :rating, :review, :last_played);";

        try {
            $statement = $this->db->prepare($query);
            $statement->execute(array(
                'title' => $input['title'],
                'rating' => $input['rating'],
                'review' => $input['review'],
                'last_played' => $input['last_played'],
            ));
            $resultSet = ['Game Created'];
        } catch (\PDOException $e) {
            $resultSet = [$e->getMessage()];
        } finally {
            return $this->createSucessReponse($resultSet);
        }
    }

    public function delete($id)
    {
        $result = $this->findById($id);
        if (!$result) {
            $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
            $response['body'] = "game not found";
            return $response;
        }
        $query = "DELETE FROM game WHERE id = :id;";
        try {
            $statement = $this->db->prepare($query);
            $statement->execute(array('id' => $id));
            $statement->rowCount();
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode(array('message' => 'Game Deleted!'));
        return $response;
    }

    public function update($id)
    {
        $result = $this->findById($id);

        if (!$result) {
            $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
            $response['body'] = "game not found";
            return $response;
        }
        $input = (array) json_decode(file_get_contents('php://input'), true);
        if (!BodyValidator::Validate($input)) {
            return $this->invalidUserInputResponse();
        }
        $statement = "UPDATE game SET title = :title, rating  = :rating, review = :review,  last_played = :last_played WHERE id = :id;";
        try {
            $statement = $this->db->prepare($statement);
            $statement->execute(array(
                'id' => (int) $id,
                'title' => $input['title'],
                'rating' => $input['rating'],
                'review' => $input['review'],
                'last_played' => $input['last_played']
            ));
            $statement->rowCount();
        } catch (\PDOException $e) {
            exit($e->getMessage());
        }
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode(array('message' => 'Post Updated!'));
        return $response;
    }

    public function insert()
    {
        // TODO: Implement insert() method.
    }

    public function view($id)
    {
        try {
            $resultSet = $this->findById($id);
        } catch (\PDOException $e) {
            $resultSet = [$e->getMessage()];
        } finally {
            return $this->createSucessReponse($resultSet);
        }
    }

    private function findById($id)
    {
        $query = "SELECT id, title, rating, review, last_played FROM game WHERE id = :id;";
        $statement = $this->db->prepare($query);
        $statement->execute(array('id' => $id));
        return $statement->fetch(\PDO::FETCH_ASSOC);
    }

    public function viewAll()
    {
        $query = "SELECT id, title, rating, review, last_played FROM game";
        try {
            $statement = $this->db->query($query);
            $result = $statement->fetchAll(\PDO::FETCH_ASSOC);
        } catch (\PDOException $e) {
            $result = [$e->getMessage()];
        } finally {
            return $this->createSucessReponse($result);
        }
    }

    private function createSucessReponse($result)
    {
        $response['status_code_header'] = 'HTTP/1.1 200 OK';
        $response['body'] = json_encode($result);
        return $response;
    }

    private function invalidUserInputResponse()
    {
        $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Input from user';
        $response['body'] = json_encode([
            'error' => 'Invalid input'
        ]);
        return $response;
    }
}