<?php
include '../core/db.php';

class admin extends db
{
 public function index(){
    include "../views/admin/index.html";
}
}

