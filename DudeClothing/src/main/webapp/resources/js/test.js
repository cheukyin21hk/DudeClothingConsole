Ext.require([ 'Ext.grid.*', 'Ext.data.*', 'Ext.panel.*',
		'Ext.layout.container.Border' ]);

Ext.onReady(function() {



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