<?php
$className = $_GET['c'];
include '../controller/admin/' . $className . '.php';
$method = $_GET['m'];
$page = new $className();
$page->$method();