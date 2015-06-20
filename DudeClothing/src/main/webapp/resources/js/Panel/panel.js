/**
 * 
 */
var accountPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	items : [ {
		title : 'Account Record',
		items : accountGrid
	}, {
		title : 'Account Info',
		items : accountForm
	} ]
});

var currecnyPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	items : [ {
		title : 'Currency Record',
		items : currencyGrid
	}, {
		title : 'Currency Info',
		items : currencyForm
	} ]
});

var statusPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	items : [ {
		title : 'Status Record',
		items : statusGrid
	}, {
		title : 'Status Info',
		items : statusForm
	} ]
});

var brandPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	items : [ {
		title : 'Brand Record',
		items : brandGrid
	}, {
		title : 'Brand Info',
		items : brandForm
	} ]
});

var clientPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	items : [ {
		title : 'Client Record',
		items : clientGrid
	}, {
		title : 'Client Info',
		items : clientForm
	} ]
});

var orderPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	items : [ {
		title : 'Order Record',
		items : orderGrid
	}, {
		title : 'Order Info',
		items : orderForm
	} ]
});

var purchasePanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	items : [ {
		title : 'Purchase Record',
		items : purchaseGrid
	}, {
		title : 'Purchase Info',
		items : purchaseForm
	} ]
});

var stockPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	bodypadding : 10,
	height : 600,
	layout : 'border',
	items : [ stockGrid ]
});
// end
