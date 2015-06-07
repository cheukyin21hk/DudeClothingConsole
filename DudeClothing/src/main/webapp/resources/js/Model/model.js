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
	}

	]
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
	}

	]
});

Ext.define('Order', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'orderId',
		type : 'int'
	}, {
		name : 'price',
		type : 'int'
	}, {
		name : 'orderDate',
		type : 'int'
	}, {
		name : 'depositeDate',
		type : 'int'
	}, {
		name : 'accountId',
		type : 'int'
	}, {
		name : 'stockId',
		type : 'int'
	}, {
		name : 'deposit',
		type : 'int'
	},
	{
		name : 'statusId',
		type : 'int'
	},
	{
		name : 'clientId',
		type : 'int'
	},
	{
		name : 'purchaseId',
		type : 'int'
	}

	]
});

Ext.define('purchase', {
	extend : 'Ext.data.Model',
	fields : [ 
	{
		name : 'purchaseId',
		type : 'int'
	},
	{
		name : 'date',
		type : 'int'
	}, {
		name : 'quantity',
		type : 'int'
	}, {
		name : 'currencyId',
		type : 'int'
	}, {
		name : 'currencyPrice',
		type : 'int'
	}, {
		name : 'foreignShipCost',
		type : 'int'
	}, {
		name : 'localShipCost',
		type : 'int'
	}, {
		name : 'logisticCode',
		type : 'int'
	},
	{
		name : 'trackingNo',
		type : 'int'
	},
	{
		name : 'invoice',
		type : 'int'
	}
	]
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
	}

	]
});

Ext.define('Brand', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'brandId',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	}

	]
});

Ext.define('Stock',{
	extend:'Ext.data.Model',
	fields:[{
name : 'stockId',
		type : 'int'
	},{
		name:'brandId',
		type:'int'
	},{
		name:'size',
		type:'string'
	},
	{
		name:'name',
		type:'string'
	},
	{
		name:'sold',
		type:'int'
	},
	{
		name:'purchaseId',
		type:'int'
	}]
});

Ext.define('Status', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'statusId',
		type : 'int'
	}, {
		name : 'name',
		type : 'string'
	}

	]
});
// end model
