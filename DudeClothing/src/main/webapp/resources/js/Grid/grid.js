/**
 * 
 */

// create the grid
var accountGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : accountStore,
	columns : [ {
		text : "Code",
		dataIndex : 'accountId',
		sortable : true,
		autoSizeColumn : true,
	}, {
		text : "Name",
		dataIndex : 'name',
		autoSizeColumn : true,
	} ],
	viewConfig : {
		listeners : {
			refresh : function(dataview) {
				Ext.each(dataview.panel.columns, function(column) {
					if (column.autoSizeColumn === true)
						column.autoSize();
				})
			}
		}
	},
	split : true,
});

var brandGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : brandStore,
	columns : [ {
		text : "Code",
		dataIndex : 'brandId',
		sortable : true,
		autoSizeColumn : true,
	}, {
		text : "Name",
		dataIndex : 'name',
		autoSizeColumn : true,
	} ],
	viewConfig : {
		listeners : {
			refresh : function(dataview) {
				Ext.each(dataview.panel.columns, function(column) {
					if (column.autoSizeColumn === true)
						column.autoSize();
				})
			}
		}
	},
	split : true,
});

var clientGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : clientStore,
	columns : [ {
		text : "Code",
		dataIndex : 'clientId',
		sortable : true,
		autoSizeColumn : true,
	}, {
		text : "Name",
		dataIndex : 'name',
		autoSizeColumn : true,
	}, {
		text : "Phone Number",
		dataIndex : "phoneNo",
		autoSizeColumn : true,
	} ],
	viewConfig : {
		listeners : {
			refresh : function(dataview) {
				Ext.each(dataview.panel.columns, function(column) {
					if (column.autoSizeColumn === true)
						column.autoSize();
				})
			}
		}
	},
	split : true,

});

var currencyGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : currencyStore,
	columns : [ {
		text : "Code",
		dataIndex : 'currencyId',
		sortable : true,
		autoSizeColumn : true,
	}, {
		text : "Name",
		dataIndex : 'name',
		autoSizeColumn : true,
	}, {
		text : "Rate",
		dataIndex : 'rate',
		autoSizeColumn : true,

	} ],
	viewConfig : {
		listeners : {
			refresh : function(dataview) {
				Ext.each(dataview.panel.columns, function(column) {
					if (column.autoSizeColumn === true)
						column.autoSize();
				})
			}
		}
	},
	split : true,

});

var statusGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : statusStore,
	columns : [ {
		text : "Code",
		dataIndex : 'statusId',
		sortable : true,
		autoSizeColumn : true,
	}, {
		text : "Name",
		dataIndex : 'name',
		autoSizeColumn : true,
	} ],
	viewConfig : {
		listeners : {
			refresh : function(dataview) {
				Ext.each(dataview.panel.columns, function(column) {
					if (column.autoSizeColumn === true)
						column.autoSize();
				})
			}
		}
	},
	split : true,

});

var stockGrid = Ext.create('Ext.grid.Panel', {
	width : 900,
	bufferedRenderer : false,
	autoScroll : true,
	columnLines : true,
	region : 'center',
	store : stockStore,
	columns : [ {
		text : "Code",
		dataIndex : 'stockId',
		sortable : true,
		autoSizeColumn : true,
	}, {
		text : "Brand",
		dataIndex : 'brandId',
		autoSizeColumn : true,
	}, {
		text : "Size",
		dataIndex : "size"
	}, {
		text : "Name",
		dataIndex : "name",
		autoSizeColumn : true,
	}, {
		text : "Sold",
		dataIndex : "sold",
		autoSizeColumn : true,
	}, {
		text : "Purchase",
		dataIndex : "purchaseId",
		autoSizeColumn : true,
	} ],
	viewConfig : {
		listeners : {
			refresh : function(dataview) {
				Ext.each(dataview.panel.columns, function(column) {
					if (column.autoSizeColumn === true)
						column.autoSize();
				})
			}
		}
	},
	split : true,

});

var orderGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : orderStore,
	columns : [ {
		text : "Code",
		dataIndex : 'orderId',
		sortable : true,
		autoSizeColumn : true,
	}, {
		text : "Price",
		dataIndex : 'price',
		autoSizeColumn : true,
	}, {
		text : "Order Date",
		dataIndex : "orderDate",
		autoSizeColumn : true,
	}, {
		text : "Deposite Date",
		dataIndex : "depositeDate",
		autoSizeColumn : true,
	}, {
		text : "Account",
		dataIndex : "accountId",
		autoSizeColumn : true,
	}, {
		text : "Stock",
		dataIndex : "stockId",
		autoSizeColumn : true,
	}, {
		text : "Deposit",
		dataIndex : "deposit",
		autoSizeColumn : true,
	}, {
		text : "Status",
		dataIndex : "statusId",
		autoSizeColumn : true,
	}, {
		text : "Client",
		dataIndex : "clientId",
		autoSizeColumn : true,
	} ],
	viewConfig : {
		listeners : {
			refresh : function(dataview) {
				Ext.each(dataview.panel.columns, function(column) {
					if (column.autoSizeColumn === true)
						column.autoSize();
				})
			}
		}
	},
	split : true,

});

var purchaseGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : purchaseStore,
	columns : [ {
		text : "Code",
		dataIndex : 'purchaseId',
		sortable : true
	}, {
		text : "Date",
		dataIndex : 'date',
		autoSizeColumn : true,
	}, {
		text : "Quantity",
		dataIndex : "quantity",
		autoSizeColumn : true,
	}, {
		text : "Currency",
		dataIndex : "currencyId",
		autoSizeColumn : true,
	}, {
		text : "Currency Price",
		dataIndex : "currencyPrice",
		autoSizeColumn : true,
	}, {
		text : "Foreign Shipping Cost",
		dataIndex : "foreignShipCost",
		autoSizeColumn : true,
	}, {
		text : "Local Shipping Cost",
		dataIndex : "localShipCost",
		autoSizeColumn : true,
	}, {
		text : "Logit. Code",
		dataIndex : "logisticCode",
		autoSizeColumn : true,
	}, {
		text : "Tracking No.",
		dataIndex : "trackingNo",
		autoSizeColumn : true,
	}, {
		text : "Invoice Code",
		dataIndex : "invoice",
		autoSizeColumn : true,
	} ],
	viewConfig : {
		listeners : {
			refresh : function(dataview) {
				Ext.each(dataview.panel.columns, function(column) {
					if (column.autoSizeColumn === true)
						column.autoSize();
				})
			}
		}
	},

	split : true,

});

// end grid
