/**
 * 
 */

// create the grid
var accountGrid = Ext.create('Ext.grid.Panel', {
	title : 'Account record',
	width : 600,
	bufferedRenderer : false,
	store : accountStore,
	columns : [ {
		text : "Code",
		dataIndex : 'accountId',
		sortable : true
	}, {
		text : "Name",
		flex : 1,
		dataIndex : 'name',
	} ],
	forceFit : false,
	split : true,
	region : 'west'
});

var currencyGrid = Ext.create('Ext.grid.Panel', {
	title : 'Currency record',
	width : 600,
	bufferedRenderer : false,
	store : currencyStore,
	columns : [ {
		text : "Code",
		dataIndex : 'currencyId',
		sortable : true
	}, {
		text : "Name",
		flex : 1,
		dataIndex : 'name'
	}, {
		text : "Rate",
		flex : 1,
		dataIndex : 'rate',

	} ],
	forceFit : false,
	split : true,
	region : 'west'
});

var brandGrid = Ext.create('Ext.grid.Panel', {
	title : 'Brand record',
	width : 600,
	bufferedRenderer : false,
	store : brandStore,
	columns : [ {
		text : "Code",
		dataIndex : 'brandId',
		sortable : true
	}, {
		text : "Name",
		flex : 1,
		dataIndex : 'name',
	} ],
	forceFit : false,
	split : true,
	region : 'west'
});

var statusGrid = Ext.create('Ext.grid.Panel', {
	title : 'Status record',
	width : 600,
	bufferedRenderer : false,
	store : statusStore,
	columns : [ {
		text : "Code",
		dataIndex : 'statusId',
		sortable : true
	}, {
		text : "Name",
		flex : 1,
		dataIndex : 'name',
	} ],
	forceFit : false,
	split : true,
	region : 'west'
});

var orderGrid = Ext.create('Ext.grid.Panel', {
	title : 'Order record',
	width : 600,
	bufferedRenderer : false,
	store : orderStore,
	columns : [ {
		text : "Code",
		dataIndex : 'statusId',
		sortable : true
	}, {
		text : "Name",
		flex : 1,
		dataIndex : 'name',
	} ],
	forceFit : false,
	split : true,
	region : 'west'
});

var stockGrid = Ext.create('Ext.grid.Panel', {
	title : 'Stock record',
	width : 600,
	bufferedRenderer : false,
	store : stockStore,
	columns : [ {
		text : "Code",
		dataIndex : 'statusId',
		sortable : true
	}, {
		text : "Name",
		flex : 1,
		dataIndex : 'name',
	} ],
	forceFit : false,
	split : true,
	region : 'west'
});

var purchaseGrid = Ext.create('Ext.grid.Panel', {
	title : 'Purchase record',
	width : 600,
	bufferedRenderer : false,
	store : purchaseStore,
	columns : [ {
		text : "Code",
		dataIndex : 'statusId',
		sortable : true
	}, {
		text : "Name",
		flex : 1,
		dataIndex : 'name',
	} ],
	forceFit : false,
	split : true,
	region : 'west'
});

var clientGrid = Ext.create('Ext.grid.Panel', {
	title : 'Client record',
	width : 600,
	bufferedRenderer : false,
	store : clientStore,
	columns : [ {
		text : "Code",
		dataIndex : 'statusId',
		sortable : true
	}, {
		text : "Name",
		flex : 1,
		dataIndex : 'name',
	} ],
	forceFit : false,
	split : true,
	region : 'west'
});
// end grid
