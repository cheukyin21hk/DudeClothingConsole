# ************************************************************
# Sequel Pro SQL dump
# Version 4096
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: 127.0.0.1 (MySQL 5.6.23-enterprise-commercial-advanced)
# Database: dudeClothing
# Generation Time: 2015-05-16 10:43:51 +0000
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
  `accountId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`accountId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table brand
# ------------------------------------------------------------

DROP TABLE IF EXISTS `brand`;

CREATE TABLE `brand` (
  `brandId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`brandId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table client
# ------------------------------------------------------------

DROP TABLE IF EXISTS `client`;

CREATE TABLE `client` (
  `clientId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `phoneNo` int(8) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`clientId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table currency
# ------------------------------------------------------------

DROP TABLE IF EXISTS `currency`;

CREATE TABLE `currency` (
  `currencyId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(4) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  PRIMARY KEY (`currencyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table item
# ------------------------------------------------------------

DROP TABLE IF EXISTS `item`;

CREATE TABLE `item` (
  `itemId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `brandId` int(11) unsigned NOT NULL,
  `size` varchar(10) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`itemId`),
  KEY `itemBrand` (`brandId`),
  CONSTRAINT `itemBrand` FOREIGN KEY (`brandId`) REFERENCES `brand` (`brandId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table order
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order`;

CREATE TABLE `order` (
  `orderId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `orderDate` date DEFAULT NULL,
  `price` float DEFAULT NULL,
  `cost` float DEFAULT NULL,
  `depositeDate` date DEFAULT NULL,
  `accountId` int(11) unsigned DEFAULT NULL,
  `itemId` int(11) unsigned DEFAULT NULL,
  `deposit` float DEFAULT NULL,
  `statusId` int(3) unsigned DEFAULT NULL,
  `clientId` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`orderId`),
  KEY `orderAccount` (`accountId`),
  KEY `orderItem` (`itemId`),
  KEY `orderStatus` (`statusId`),
  CONSTRAINT `orderAccount` FOREIGN KEY (`accountId`) REFERENCES `account` (`accountId`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `orderClient` FOREIGN KEY (`orderId`) REFERENCES `client` (`clientId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orderItem` FOREIGN KEY (`itemId`) REFERENCES `item` (`itemId`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `orderStatus` FOREIGN KEY (`statusId`) REFERENCES `status` (`statusId`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table purchase
# ------------------------------------------------------------

DROP TABLE IF EXISTS `purchase`;

CREATE TABLE `purchase` (
  `purchaseId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `itemId` int(11) unsigned DEFAULT NULL,
  `date` date DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `currencyId` int(11) unsigned DEFAULT NULL,
  `currencyPrice` float DEFAULT NULL,
  `foreignShipCost` float DEFAULT NULL,
  `localShipCost` float DEFAULT NULL,
  `logisticCode` int(11) DEFAULT NULL,
  `trackingNo` int(11) unsigned DEFAULT NULL,
  `invoice` varchar(100) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`purchaseId`),
  KEY `purchaseCurrency` (`currencyId`),
  CONSTRAINT `purchaseCurrency` FOREIGN KEY (`currencyId`) REFERENCES `currency` (`currencyId`) ON DELETE SET NULL ON UPDATE SET NULL,
  CONSTRAINT `purchaseItem` FOREIGN KEY (`purchaseId`) REFERENCES `item` (`itemId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table status
# ------------------------------------------------------------

DROP TABLE IF EXISTS `status`;

CREATE TABLE `status` (
  `statusId` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`statusId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
