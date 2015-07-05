/**
 * 	plugins: [
		Ext.create('Ext.grid.plugin.RowEditing', {
			clicksToEdit: 2,
			listeners: {
				edit: function(e){
					Ext.Ajax.request({
						url: 'index.php/issue/update/' + e.record.get('reportID'),
						params: e.record.getChanges(),
						success: function(){}
					})
				}
			}
		})
	],
 */

function returnBrandId(val) {
	return val.brandId + "";
};

function returnPurchaseId(val) {
	return val.purchaseId + "";
};

function returnCurrencyName(val) {
	return val.name + "";
};

function returnAccountName(val) {
	return val.name + "";
};
function returnClientName(val) {
	return val.name + "";
};
function returnStockName(val) {
	return val.name + "";
};
function returnStatusName(val) {
	return val.name + "";
};

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
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
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
	plugins : [ accountEditing ],
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
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
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
	plugins : [ brandEditing ],
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
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Phone Number",
		dataIndex : "phoneNo",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
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
	plugins : [ clientEditing ],
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
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Rate",
		dataIndex : 'rate',
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
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
	plugins : [ currencyEditing ],
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
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
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
	plugins : [ statusEditing ],
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
		text : 'brand',
		renderer : returnBrandId,
		dataIndex : 'brand',
	}, {
		text : "Size",
		dataIndex : "size",
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Name",
		dataIndex : "name",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Sold",
		dataIndex : "sold",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Purchase",
		renderer : returnPurchaseId,
		dataIndex : "purchase",
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
	plugins : [ stockEditing ],
	split : true,

});

var orderGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : orderStore,
	columns : [ {
		text : "Code",
		dataIndex : 'orderRecordId',
		sortable : true,
		autoSizeColumn : true,
	}, {
		text : "Price",
		dataIndex : 'price',
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Order Date",

		dataIndex : "orderRecordDate",
		renderer : function(value) {
			var date = Ext.Date.parse(value, 'time');
			return Ext.Date.format(date, 'd/m/Y');

		},
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			xtype : 'datefield',
			format : 'm/d/Y',
			allowBlank : false
		}
	}, {
		text : "Deposite Date",
		dataIndex : "depositeDate",
		renderer : function(value) {
			var date = Ext.Date.parse(value, 'time');
			return Ext.Date.format(date, 'd/m/Y');
		},
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Account",
		dataIndex : "account",
		renderer : returnAccountName,
		autoSizeColumn : true,
	}, {
		text : "Stock",
		dataIndex : "stock",
		renderer : returnStockName,
		autoSizeColumn : true,
	}, {
		text : "Deposit",
		dataIndex : "deposit",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Status",
		dataIndex : "status",
		renderer : returnStatusName,
		autoSizeColumn : true,
	}, {
		text : "Client",
		dataIndex : "client",
		renderer : returnClientName,
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
	plugins : [ orderEditing ],
	split : true,

});

var purchaseGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : purchaseStore,
	columns : [ {
		text : "Code",
		dataIndex : 'purchaseId',
		sortable : true,
	}, {
		text : "Date",
		dataIndex : 'date',
		renderer : function(value) {
			var date = Ext.Date.parse(value, 'time');
			return Ext.Date.format(date, 'd/m/Y');
		},
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Quantity",
		dataIndex : "quantity",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Currency",
		dataIndex : "currency",
		renderer : returnCurrencyName,
		autoSizeColumn : true,
	}, {
		text : "Currency Price",
		dataIndex : "currencyPrice",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Foreign Shipping Cost",
		dataIndex : "foreignShipCost",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Local Shipping Cost",
		dataIndex : "localShipCost",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Logit. Code",
		dataIndex : "logisticCode",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Tracking No.",
		dataIndex : "trackingNo",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Invoice Code",
		dataIndex : "invoice",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
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
	plugins : [ purchaseEditing ],
	split : true,

});

// end grid
