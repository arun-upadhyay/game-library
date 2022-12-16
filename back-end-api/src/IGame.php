<?php

namespace Src;

/**
 * IGame interface
 */
interface IGame
{
    /**
     * @return mixed
     */
    public function add();

    /**
     * @param $id
     * @return mixed
     */
    public function delete($id);

    /**
     * @param $id
     * @return mixed
     */
    public function update($id);

    /**
     * @return mixed
     */
    public function insert();

    /**
     * @param $id
     * @return mixed
     */
    public function view($id);

    /**
     * @return mixed
     */
    public function viewAll();
}