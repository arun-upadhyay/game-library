<?php

namespace Src;

interface IGame
{
    public function add();

    public function delete($id);

    public function update($id);

    public function insert();

    public function view($id);

    public function viewAll();
}