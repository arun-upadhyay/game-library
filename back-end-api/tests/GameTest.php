<?php
require_once('vendor/autoload.php');

/**
 * Unit test added for Game class
 */
class GameTest extends \PHPUnit\Framework\TestCase
{
    protected $client;

    protected function setUp()
    {
        $this->client = new GuzzleHttp\Client([
            'base_uri' => 'http://localhost:8000/'
        ]);
    }

    public function testGetDataFromGameTable()
    {
        $response = $this->client->get('/api/game');
        $this->assertEquals(200, $response->getStatusCode());
        $result = json_decode($response->getBody(), true);
        if (is_array($result)) {
            foreach ($result as $data) {
                $this->assertArrayHasKey('title', $data);
                $this->assertArrayHasKey('rating', $data);
                $this->assertArrayHasKey('review', $data);
                $this->assertArrayHasKey('last_played', $data);
            }
        }
    }

    public function testPostDataToGameTable()
    {
        $response = $this->client->post('/api/game', [
            'json' => [
                'title' => "game1",
                'rating' => '5',
                'review' => 'I love this game',
                'last_played' => '2022-12-21 00:00:00'
            ]
        ]);
        $this->assertEquals(200, $response->getStatusCode());
    }

    public function testAddGetAndDeleteDataFromGameTable()
    {
        // Add record to an API
        $response = $this->client->post('/api/game', [
            'json' => [
                'title' => "game1",
                'rating' => 'new game',
                'review' => '5 star',
                'last_played' => '2022-12-21 00:00:00'
            ]
        ]);
        $this->assertEquals(200, $response->getStatusCode());
        $response = $this->client->get('/api/game');
        $this->assertEquals(200, $response->getStatusCode());
        $result = json_decode($response->getBody(), true);
        print_r($result);
        if (is_array($result)) {
            foreach ($result as $data) {
                $id = $data['id'];
                $response = $this->client->delete('/api/game/' . $id);
                $this->assertEquals(200, $response->getStatusCode());
            }
        }
        $response = $this->client->delete('/api/game/' . 'ramdomid');
        $this->assertEquals(404, $response->getStatusCode());
    }
}