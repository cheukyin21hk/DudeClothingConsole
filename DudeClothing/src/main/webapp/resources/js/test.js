Ext.require([ 'Ext.grid.*', 'Ext.data.*', 'Ext.panel.*',
		'Ext.layout.container.Border' ]);

Ext.onReady(function() {

	accountStore.load();
	brandStore.load();
	statusStore.load();
	currencyStore.load();
	clientStore.load();
	stockStore.load();
	purchaseStore.load();
	orderStore.load();

	var mainContainer = Ext.create('Ext.tab.Panel', {
		width : 1030,
		height : 630,
		bodyPadding : 15,
		renderTo : 'grid',
		items : [ {
			title : "Stock",
			items : stockPanel
		}, {
			title : "Order",
			items : orderPanel
		}, {
			title : "Purchase",
			items : purchasePanel
		}, {
			title : "Client",
			items : clientPanel
		}, {
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
		} ]
	});
});