<?php
$className = $_GET['c'];
include '../controller/index/' . $className . '.php';
$method = $_GET['m'];
$page = new $className();
$page->$method();
