/**
 * 
 */
var accountPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	layout : 'border',
	items : [ accountGrid, accountForm ]
});

var currecnyPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	layout : 'border',
	items : [ currencyGrid, currencyForm ]
});

var statusPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	layout : 'border',
	items : [ statusGrid, statusForm ]
});

var brandPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	layout : 'border',
	items : [ brandGrid, brandForm ]
});

var clientPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	layout : 'border',
	items : []
});

var orderPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	layout : 'border',
	items : []
});

var purchasePanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	layout : 'border',
	items : []
});

var stockPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	height : 600,
	layout : 'border',
	items : []
});
// end
