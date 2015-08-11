// create the Data Store for each basic info

Ext.define('com.dudeClothing.AccountStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	autoSync : true,
	model : 'Account',
	proxy : {
		type : 'rest',
		url : '/admin/account/accounts',
		reader : {
			type : 'json',
			rootProperty : 'data'
		},
		writer : {
			type : 'json'
		}
	}
});

Ext.define('com.dudeClothing.CurrencyStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	autoSync : true,
	model : 'Currency',
	proxy : {
		type : 'rest',
		url : '/admin/currency/currencys',
		reader : {
			type : 'json',
			rootProperty : 'data'
		},
		writer : {
			type : 'json'
		}
	}
});

Ext.define('com.dudeClothing.ItemStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	autoSync : true,
	model : 'Item',
	proxy : {
		type : 'rest',
		url : '/admin/item/items',
		reader : {
			type : 'json',
			rootProperty : 'data'
		},
		writer : {
			type : 'json'
		}
	}
});

Ext.define('com.dudeClothing.BrandStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	autoSync : true,
	model : 'Brand',
	proxy : {
		type : 'rest',
		url : '/admin/brand/brands',
		reader : {
			type : 'json',
			rootProperty : 'data'
		},
		writer : {
			type : 'json'
		}
	}
});

Ext.define('com.dudeClothing.StatusStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	autoSync : true,
	model : 'Status',
	proxy : {
		type : 'rest',
		url : '/admin/status/statuses',
		reader : {
			type : 'json',
			rootProperty : 'data'
		},
		writer : {
			type : 'json'
		}
	}
});

Ext.define('com.dudeClothing.PurchaseOrderStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	autoSync : true,
	model : 'PurchaseOrder',
	proxy : {
		type : 'rest',
		url : '/admin/transaction/purchaseOrders',
		reader : {
			type : 'json',
			rootProperty : 'data'
		},
		writer : {
			type : 'json'
		}
	}
});

Ext.define('com.dudeClothing.PurchaseShipmentStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	autoSync : true,
	model : 'PurchaseShipment',
	proxy : {
		type : 'rest',
		url : '/admin/transaction/purchaseShipments',
		reader : {
			type : 'json',
			rootProperty : 'data'
		},
		writer : {
			type : 'json'
		}
	}
});

Ext.define('com.dudeClothing.PurchaseItemStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	autoSync : true,
	model : 'PurchaseItem',
	proxy : {
		type : 'rest',
		url : '/admin/transaction/purchaseItems',
		reader : {
			type : 'json',
			rootProperty : 'data'
		},
		writer : {
			type : 'json'
		}
	}
});

Ext.define('com.dudeClothing.SaleOrderStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	autoSync : true,
	model : 'SaleOrder',
	proxy : {
		type : 'rest',
		url : '/admin/transaction/saleOrders',
		reader : {
			type : 'json',
			rootProperty : 'data'
		},
		writer : {
			type : 'json'
		}
	}
});

Ext.define('com.dudeClothing.SaleItemStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	autoSync : true,
	model : 'SaleItem',
	proxy : {
		type : 'rest',
		url : '/admin/transaction/saleItems',
		reader : {
			type : 'json',
			rootProperty : 'data'
		},
		writer : {
			type : 'json'
		}
	}
});

Ext.define('com.dudeClothing.ClientStore', {
	extend : 'Ext.data.Store',
	autoLoad : true,
	autoSync : true,
	model : 'Client',
	proxy : {
		type : 'rest',
		url : '/admin/client/clients',
		reader : {
			type : 'json',
			rootProperty : 'data'
		},
		writer : {
			type : 'json'
		}
	}
});

var accountStore = Ext.create('com.dudeClothing.AccountStore');
var currencyStore = Ext.create('com.dudeClothing.CurrencyStore');
var itemStore = Ext.create('com.dudeClothing.ItemStore');
var brandStore = Ext.create('com.dudeClothing.BrandStore');
var statusStore = Ext.create('com.dudeClothing.StatusStore');
var purchaseOrderStore = Ext.create('com.dudeClothing.PurchaseOrderStore');
var purchaseShipmentStore = Ext.create('com.dudeClothing.PurchaseShipmentStore');
var purchaseItemStore = Ext.create('com.dudeClothing.PurchaseItemStore');
var saleOrderStore = Ext.create('com.dudeClothing.SaleOrderStore');
var saleItemStore = Ext.create('com.dudeClothing.SaleItemStore');
var clientStore = Ext.create('com.dudeClothing.ClientStore');
// end store
