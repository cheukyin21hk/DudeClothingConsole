-- Create syntax for TABLE 'account'
CREATE TABLE `account` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'brand'
CREATE TABLE `brand` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'client'
CREATE TABLE `client` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `phone_No` int(8) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'currency'
CREATE TABLE `currency` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(4) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'item'
CREATE TABLE `item` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `brand_id` bigint(11) DEFAULT NULL,
  `name` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Create syntax for TABLE 'sale_items'
CREATE TABLE `sale_items` (
  `size` int(11) NOT NULL DEFAULT '0',
  `quantity` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `item_id` bigint(11) NOT NULL DEFAULT '0',
  `order_id` bigint(11) DEFAULT NULL,
  `delivered` char(11) DEFAULT NULL,
  `id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`size`,`item_id`,`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Create syntax for TABLE 'sale_orders'
CREATE TABLE `sale_orders` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `order_date` date DEFAULT NULL,
  `deposite_date` date DEFAULT NULL,
  `account_id` bigint(11) unsigned DEFAULT NULL,
  `deposit` float DEFAULT NULL,
  `status_id` bigint(3) unsigned DEFAULT NULL,
  `client_id` bigint(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'purchase_orders'
CREATE TABLE `purchase_orders` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `purchase_date` date DEFAULT NULL,
  `currency_Id` bigint(11) unsigned DEFAULT NULL,
  `foreign_ship_cost` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'purchase_items'
CREATE TABLE `purchase_items` (
  `item_id` int(11) NOT NULL DEFAULT '0',
  `size` int(11) NOT NULL DEFAULT '0',
  `quantity` float DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `shippment_id` bigint(11) NOT NULL DEFAULT '0',
  `purchase_id` bigint(11) NOT NULL DEFAULT '0',
  `delivered` char(1) DEFAULT NULL,
  PRIMARY KEY (`item_id`,`size`,`shippment_id`,`purchase_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Create syntax for TABLE 'purchase_shipments'
CREATE TABLE `purchase_shipments` (
  `local_shipping_cost` float DEFAULT NULL,
  `status_Id` int(11) DEFAULT NULL,
  `purchase_id` int(11) NOT NULL DEFAULT '0',
  `id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`,`purchase_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Create syntax for TABLE 'status'
CREATE TABLE `status` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;