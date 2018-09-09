<?php
include '../core/db.php';
class category extends  db{
    public function  delete(){
        $stmt = $this->pdo->exec("delete from news_category where id = ".$_GET['id']);
        echo $stmt;
    }
    public function  insert(){
        $stmt = $this->pdo->prepare("insert into news_category(name,is_default) values(?,?)");
        $stmt->bindValue(1, '');
        $stmt->bindValue(2, '');
        echo $stmt->execute();
    }
    public function  update(){
        $stmt = $this->pdo->prepare('update news_category set  '.$_GET['k'].'  = ? where id = ?');
        $stmt->bindValue(1, $_GET['v']);
        $stmt->bindValue(2, $_GET['id']);
        echo $stmt->execute();

    }
    const PER_PAGE = 3;
    public function index(){
        if (isset($_GET['id'])) {
            $cid = $_GET['id'];
        } else {
            $cid = 1;
        }
        //接收页数
        if (isset($_GET['page'])) {
            $page = $_GET['page'];
        } else {
            $page = 1;
        }
        $category = $this->pdo
            ->query('select * from news_category ')
            ->fetchAll();
        $num = $this->pdo
            ->query('select count(*) as total from news_category')
            ->fetch()['total'];

        //总页数
        $page_total = ceil($num / $this::PER_PAGE);


        $stmt = $this->pdo->query('select * from news_category limit '.$this::PER_PAGE.' offset '.($page-1)*$this::PER_PAGE);
        $category = $stmt->fetchAll();
        include "../views/admin/apps-projects-list.html";
    }
}