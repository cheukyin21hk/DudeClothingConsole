Ext.require([ 'Ext.grid.*', 'Ext.data.*', 'Ext.panel.*',
		'Ext.layout.container.Border' ]);

Ext.onReady(function() {

	accountStore.load();
	brandStore.load();
	statusStore.load();
	currencyStore.load();
	clientStore.load();
	itemStore.load();

	var mainPanel = Ext.create('Ext.tab.Panel', {
		width : 1030,
		renderTo : 'grid',
		bodyPadding : 15,
		items : [

		{
			title : "Stock",
			items : stockPanel
		}, {
			title : "Sale",
			items : saleOrderPanel
		}, {
			title : "Purchase",
			items : purchaseOrderPanel
		}, {
			title : "item",
			items : itemPanel
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