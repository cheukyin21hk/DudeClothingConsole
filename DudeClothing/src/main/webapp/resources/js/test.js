Ext.require([ 'Ext.grid.*', 'Ext.data.*', 'Ext.panel.*',
		'Ext.layout.container.Border' ]);

Ext.onReady(function() {

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
	// end

	accountStore.load();
	brandStore.load();
	statusStore.load();
	currencyStore.load();
	

	var mainContainer = Ext.create('Ext.tab.Panel', {
		width : 1030,
		height : 630,
		bodyPadding : 15,
		renderTo : 'grid',
		items : [ {
			title : 'Account',
			items : accountPanel
		}, {
			title : 'Currency',
			items : currecnyPanel
		}, {
			title : 'Brand',
			items : brandPanel
		}, {
			title : 'Status',
			items : statusPanel
		}, {
			title : "Client"
		}, {
			title : "Order",
		}, {
			title : "Purchase"
		}, {
			title : "Stock"
		} ]
	});
});