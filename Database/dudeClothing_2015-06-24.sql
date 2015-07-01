# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.23-enterprise-commercial-advanced)
# Database: dudeClothing
# Generation Time: 2015-06-24 14:14:33 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table account
# ------------------------------------------------------------

DROP TABLE IF EXISTS `account`;

CREATE TABLE `account` (
  `account_Id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`account_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table brand
# ------------------------------------------------------------

DROP TABLE IF EXISTS `brand`;

CREATE TABLE `brand` (
  `brand_Id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`brand_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table client
# ------------------------------------------------------------

DROP TABLE IF EXISTS `client`;

CREATE TABLE `client` (
  `client_Id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `phone_No` int(8) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`client_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table currency
# ------------------------------------------------------------

DROP TABLE IF EXISTS `currency`;

CREATE TABLE `currency` (
  `currency_Id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(4) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  PRIMARY KEY (`currency_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table order_record
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order_record`;

CREATE TABLE `order_record` (
  `order_record_Id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `order_record_Date` date DEFAULT NULL,
  `price` float DEFAULT NULL,
  `deposite_Date` date DEFAULT NULL,
  `account_Id` bigint(11) unsigned DEFAULT NULL,
  `stock_Id` bigint(11) unsigned DEFAULT NULL,
  `deposit` float DEFAULT NULL,
  `status_Id` bigint(3) unsigned DEFAULT NULL,
  `client_Id` bigint(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`order_record_Id`),
  CONSTRAINT `orderClient` FOREIGN KEY (`order_record_Id`) REFERENCES `client` (`client_Id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table purchase
# ------------------------------------------------------------

DROP TABLE IF EXISTS `purchase`;

CREATE TABLE `purchase` (
  `purchase_Id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `currency_Id` bigint(11) unsigned DEFAULT NULL,
  `currency_Price` float DEFAULT NULL,
  `foreign_Ship_Cost` float DEFAULT NULL,
  `local_Ship_Cost` float DEFAULT NULL,
  `logistic_Code` int(11) DEFAULT NULL,
  `tracking_No` int(11) unsigned DEFAULT NULL,
  `invoice` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`purchase_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table status
# ------------------------------------------------------------

DROP TABLE IF EXISTS `status`;

CREATE TABLE `status` (
  `status_Id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`status_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table stock
# ------------------------------------------------------------

DROP TABLE IF EXISTS `stock`;

CREATE TABLE `stock` (
  `stock_Id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `brand_Id` bigint(11) unsigned NOT NULL,
  `size` varchar(10) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `sold` char(1) DEFAULT NULL,
  `purchase_Id` bigint(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`stock_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
