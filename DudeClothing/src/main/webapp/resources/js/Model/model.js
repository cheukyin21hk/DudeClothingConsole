/**
 * 
 */

// define the model for each model
Ext.define('Account', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'accountId',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	} ]
});

Ext.define('Brand', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'brandId',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	} ]
});

Ext.define('Item', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'brandId',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	} ]
});

Ext.define('Client', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'clientId',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	}, {
		name : 'phoneNo',
		type : 'int'
	} ]
});

Ext.define('Currency', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'currencyId',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	}, {
		name : 'rate',
		type : 'float'
	} ]
});

Ext.define('Status', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'statusId',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	} ]
});

Ext.define('SaleOrder', {
	extend : 'Ext.data.Model',
	requires : [ 'Client', 'Status', 'Account' ],
	fields : [ {
		name : 'id',
		type : 'int'
	}, 'client', 'status', 'account', {
		name : 'deposit',
		type : 'float'
	}, {
		name : 'orderDate',
		type : 'date'
	}, {
		name : 'depositeDate',
		type : 'date'
	} ]
});

Ext.define('PurchaseOrder', {
	extend : 'Ext.data.Model',
	requires : [ 'Currency' ],
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'purchaseDate',
		type : 'date'
	}, {
		name : 'foreignShipCost',
		type : 'float'
	}, 'currency' ]
});

Ext.define('SaleItem', {
	extend : 'Ext.data.Model',
	requires : [ 'Item', 'SaleOrder', 'PurchaseOrder' ],
	fields : [ {
		name : 'id',
		type : 'int'
	}, 'item', 'saleOrder', 'purchaseOrder', {
		name : 'delivered',
		type : 'bool'
	}, {
		name : 'price',
		type : 'float'
	}, {
		name : 'size',
		type : 'string'
	}, {
		name : 'quantity',
		type : 'int'
	} ]
});

Ext.define('PurchaseShipment', {
	extend : 'Ext.data.Model',
	requires : [ 'PurchaseOrder', 'Status' ],
	fields : [ {
		name : 'id',
		type : 'int'
	}, {
		name : 'shipmentCode',
		type : 'string'
	}, {
		name : 'localShippingCost',
		type : 'float'
	}, 'purchase', 'status' ]

});

Ext.define('PurchaseItem', {
	extend : 'Ext.data.Model',
	requires : [ 'Item', 'PurchaseOrder', 'PurchaseShipment' ],
	fields : [ {
		name : 'size',
		type : 'string'
	}, {
		name : 'quantity',
		type : 'int'
	}, {
		name : 'price',
		type : 'float'
	}, 'purchaseShippment', 'item', 'purchaseOrder', {
		name : 'delivered',
		type : 'string'
	} ]

});

// end model
