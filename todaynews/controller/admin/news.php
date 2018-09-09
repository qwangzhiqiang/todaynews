<?php
include '../core/db.php';
class news extends db
{

    public function  delete(){
        $stmt = $this->pdo->exec("delete from news where id = ".$_GET['id']);
        echo $stmt;
    }
    public function  insert(){
        $stmt = $this->pdo->prepare("insert into news(cid,title,dsc,content) values(?,?,?,?)");
        $stmt->bindValue(1, '');
        $stmt->bindValue(2, '');
        $stmt->bindValue(3, '');
        $stmt->bindValue(4, '');
        echo $stmt->execute();
    }
    public function  update(){
        $stmt = $this->pdo->prepare('update news set  '.$_GET['k'].'  = ? where id = ?');
        $stmt->bindValue(1, $_GET['v']);
        $stmt->bindValue(2, $_GET['id']);
        echo $stmt->execute();

    }
    const PER_PAGE = 6;
    public function  index(){
        {
            if (isset($_GET['cid'])) {
                $cid = $_GET['cid'];
            } else {
                $cid = 1;
            }
            //接收页数
            if (isset($_GET['page'])) {
                $page = $_GET['page'];
            } else {
                $page = 1;
            }
            //分类
            $category = $this->pdo
                ->query('select * from news_category where is_default = "1" ')
                ->fetchAll();

            //某个分类下的总条数
            $num = $this->pdo
                ->query('select count(*) as total from news')
                ->fetch()['total'];

            //总页数
            $page_total = ceil($num / $this::PER_PAGE);


            $stmt = $this->pdo->query('select * from news limit '.$this::PER_PAGE.' offset '.($page-1)*$this::PER_PAGE);
            $rows = $stmt->fetchAll();
            include '../views/admin/index_header.html';
            include "../views/admin/apps-tasks.html";
            include '../views/admin/index_footer.html';
        }


}












}