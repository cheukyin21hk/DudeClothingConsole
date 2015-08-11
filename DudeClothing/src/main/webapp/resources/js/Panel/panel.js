/**
 * 
 */
var accountPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,

	items : [ {
		title : 'Account Record',
		items : accountGrid
	}, {
		title : 'Account entry',
		items : accountForm
	} ]
});

var currecnyPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,

	items : [ {
		title : 'Currency Record',
		items : currencyGrid
	}, {
		title : 'Currency entry',
		items : currencyForm
	} ]
});

var statusPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,

	items : [ {
		title : 'Status Record',
		items : statusGrid
	}, {
		title : 'Status entry',
		items : statusForm
	} ]
});

var brandPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,

	items : [ {
		title : 'Brand Record',
		items : brandGrid
	}, {
		title : 'Brand entry',
		items : brandForm
	} ]
});

var clientPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,

	items : [ {
		title : 'Client Record',
		items : clientGrid
	} ]
});

var saleItemContainer = Ext
		.create(
				'Ext.Panel',
				{
					frame : true,
					width : 1000,
					formCount : 1,
					defaults : {},
					layout : 'vbox',
					dockedItems : [ {
						xtype : 'toolbar',
						dock : 'top',
						items : [
								{
									xtype : 'button',
									text : 'add',
									onClick : function() {
										saleItemContainer
												.add([ {
													xtype : 'dudeSaleOrderForm',
													id : ('saleOrderForm' + ++saleItemContainer.formCount)
												} ]);
									}

								},
								{
									xtype : 'button',
									text : 'remove',
									onClick : function() {
										if (saleItemContainer.formCount > 1) {
											saleItemContainer
													.remove(
															"saleOrderForm"
																	+ saleItemContainer.formCount--,
															true);
										}
									}
								} ]
					} ],
					items : [ {
						id : 'saleOrderFormStatus',
						xtype : 'displayfield',
					}, {
						xtype : 'dudeSaleOrderForm',
						id : 'saleOrderForm1'
					} ]
				});

var saleFormSubPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	layout : 'accordion',
	items : [ {
		title : 'Sale Order',
		items : {
			xtype : 'dudeSaleOrderForm'
		}
	}, {
		title : 'Sale Item',
		items : saleItemContainer
	}, {
		title : '',

	} ]
});

var saleGridSubPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	layout : 'accordion',
	items : [ {
		title : 'Sale Order Record',
		items : saleOrderGrid

	}, {
		title : 'Sale Item Record',
		items : saleItemGrid
	}, {
		title : '',

	} ]
});

var saleOrderPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,
	items : [ {
		title : 'Sale Order Record',
		items : saleGridSubPanel
	}, {
		title : 'Sale Order Entry',
		items : saleFormSubPanel
	} ]
});

var purchaseFormSubPanel = Ext.create('Ext.Panel',{
	frame : true,
	width : 1000,
	defaults : {
		// applied to each contained panel
		bodyStyle : 'padding:15px'
	},
	layout : 'accordion',
	items : [ {
		title : 'Purchase Order',
		items : {
			xtype : 'dudeSaleOrderForm'
		}
	}, {
		title : 'Purchase Shipment',
		items : {
			xtype : 'dudePurchaseTransaction'
		}
	}, {
		title : '',

	} ]
});

var purchaseGridSubPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,

	defaults : {

	},
	layout : 'accordion',
	items : [ {
		title : 'Purchase Order',
		items : purchaseOrderGrid
	}, {
		title : 'Purchase Shipment',
		items : purchaseShipmentGrid
	}, {
		title : 'Purchase Item',
		items : purchaseItemGrid
	}, {
		title : '',

	} ]
});

var purchaseOrderPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,

	items : [ {
		title : 'Purchase Order Record',
		items : purchaseGridSubPanel
	}, {
		title : 'Purchase Order entry',
		items : purchaseFormSubPanel
	} ]
});

var itemPanel = Ext.create('Ext.tab.Panel', {
	frame : true,
	width : 1000,

	items : [ {
		title : 'Item Record',
		items : itemGrid
	}, {
		title : 'Item entry',
		items : itemForm
	} ]
});

var stockPanel = Ext.create('Ext.Panel', {
	frame : true,
	width : 1000,
	bodypadding : 10,

	layout : 'border',
	items : [ stockGrid ]
});

// end
