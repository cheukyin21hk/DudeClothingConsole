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

Ext.define('Order', {
	extend : 'Ext.data.Model',
	requires : ['Account','Stock','Status','Client'],
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
	}, 'stock', {
		name : 'deposit',
		type : 'int'
	}, 'client',
	'account',
	'status'

	]
});

Ext.define('Purchase', {
	extend : 'Ext.data.Model',
	requires : ['Currency'],
	fields : [ {
		name : 'purchaseId',
		type : 'int'
	}, {
		name : 'date',
		type : 'int'
	}, {
		name : 'quantity',
		type : 'int'
	}, 'currency', {
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
	}, {
		name : 'trackingNo',
		type : 'int'
	}, {
		name : 'invoice',
		type : 'int'
	} ]
});
Ext.define('Stock', {
	extend : 'Ext.data.Model',
	requires : ['Brand','Purchase'],
	fields : [ {
		name : 'stockId',
		type : 'int'
	}, {
		name : 'size',
		type : 'string'
	},'brand', {
		name : 'name',
		type : 'string'
	}, {
		name : 'sold',
		type : 'string'
	},'purchase' ]	
});
// end model
