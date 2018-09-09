-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-09-04 16:00:00
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `wzq`
--

-- --------------------------------------------------------

--
-- 表的结构 `news_category`
--

DROP TABLE IF EXISTS `news_category`;
CREATE TABLE IF NOT EXISTS `news_category` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `is_default` varchar(255) NOT NULL, -- 1 代表显示 0 代表不显示
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `news_category` (`id`, `name`, `is_default`) VALUES
(1, '推荐', '1'),
(2, '国际', '1'),
(3, '养生', '1'),
(4, '旅游', '1'),
(5, '社会', '1'),
(6, '军事', '1'),
(7, '美食', '0'),
(8, '财经', '0'),
(9, '体育', '0'),
(10, '科技', '0'),
(11, '探索', '0'),
(12, '汽车', '0'),
(13, '游戏', '0'),
(14, '故事', '0'),
(15, '时尚', '0'),
(16, '历史', '0'),
(17, '育儿', '0'),
(18, '美文', '0'),
(19, '娱乐', '0'),
(20, '热点', '0');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
