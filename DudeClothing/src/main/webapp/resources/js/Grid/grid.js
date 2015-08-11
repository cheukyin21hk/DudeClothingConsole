/**
 * plugins: [ Ext.create('Ext.grid.plugin.RowEditing', { clicksToEdit: 2,
 * listeners: { edit: function(e){ Ext.Ajax.request({ url:
 * 'index.php/issue/update/' + e.record.get('reportID'), params:
 * e.record.getChanges(), success: function(){} }) } } }) ],
*/

function returnId(val) {
	return val.id + "";
};

function returnName(val) {
	return val.name + "";
};

// create the grid
var accountGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : accountStore,
	columns : [ {
		text : "Code",
		dataIndex : 'id',
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

var itemGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : itemStore,
	columns : [ {
		text : "Code",
		dataIndex : 'id',
		sortable : true,
		autoSizeColumn : true,
	}, {
		text : "brand",
		dataIndex : 'brandId',
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
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
	plugins : [ itemEditing ],
	split : true,
});

var brandGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : brandStore,
	columns : [ {
		text : "Code",
		dataIndex : 'id',
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
		dataIndex : 'id',
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
		dataIndex : 'id',
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
		dataIndex : 'id',
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
	// store : stockStore,
	columns : [ {
		text : "Code",
		dataIndex : 'id',
		sortable : true,
		autoSizeColumn : true,
	}, {
		text : 'brand',
		renderer : returnId,
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
		renderer : returnId,
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

var saleOrderGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : saleOrderStore,
	columns : [ {
		text : "Code",
		dataIndex : 'id',
		sortable : true,
		autoSizeColumn : true,
	}, {
		text : "Order Date",
		dataIndex : "orderDate",
		autoSizeColumn : true,
		renderer : function(value) {
			return Ext.Date.format(value, 'd-m-Y');
		},
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
			return Ext.Date.format(value, 'd-m-Y');
		},
		autoSizeColumn : true,
		
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Account",
		dataIndex : "account",
		renderer : returnName,
		autoSizeColumn : true,
	}, {
		text : "Deposit",
		dataIndex : "deposit",
		autoSizeColumn : true,
	}, {
		text : "Status",
		dataIndex : "status",
		renderer:returnName,
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Client",
		dataIndex : "client",
		renderer : returnName,
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

var saleItemGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : saleItemStore,
	columns : [ {
		text : "Code",
		dataIndex : 'id',
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
		text : "Size",
		dataIndex : 'size',
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Quantity",
		dataIndex : 'quantity',
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}

	}, {
		text : "Deliver",
		dataIndex : 'delivered',
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Sale Order Code",
		dataIndex : 'saleOrder',
		renderer: returnId,
		autoSizeColumn : true,
		editor : {
		}
	},{
		text : "Purchase Order Code",
		dataIndex : 'purchaseOrder',
		renderer: returnId,
		autoSizeColumn : true,
		editor : {
		}
	} ,{
		text : "Item",
		dataIndex : 'item',
		renderer:returnName,
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
	plugins : [ orderEditing ],
	split : true,

});

var purchaseOrderGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : purchaseOrderStore,
	columns : [ {
		text : "Code",
		dataIndex : 'id',
		sortable : true,
	}, {
		text : "Purchase Date",
		dataIndex : 'purchaseDate',
		renderer : function(value) {
			return Ext.Date.format(value, 'd-m-Y');
		},
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Currency",
		dataIndex : "currency",
		renderer : returnName,
		autoSizeColumn : true,
	}, {
		text : "Foreign Shipping Cost",
		dataIndex : "foreignShipCost",
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

var purchaseItemGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : purchaseItemStore,
	columns : [ {
		text : "item name",
		dataIndex : 'item',
		renderer : returnName,
		sortable : true,
	},  {
		text : "Quantity",
		dataIndex : "quantity",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	},  {
		text : "Size",
		dataIndex : "size",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	},   {
		text : "Price",
		dataIndex : "price",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Shipment Code",
		dataIndex : "purchaseShipment",
		renderer : function(val)
		{
			return val.shipmentCode;
		},
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "Purchase Code",
		dataIndex : "purchaseShipment",
		renderer : function(val)
		{
			return val.purchase.id;
		},
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	}, {
		text : "delivered",
		dataIndex : "delivered",
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

var purchaseShipmentGrid = Ext.create('Ext.grid.Panel', {
	width : 1000,
	bufferedRenderer : false,
	store : purchaseShipmentStore,
	columns : [ {
		text : "Code",
		dataIndex : 'id',
		sortable : true,
	},{
		text : "Shipment Code",
		dataIndex : 'shipmentCode',
		sortable : true,
	}, {
		text : "Local Shipping Cost",
		dataIndex : "localShippingCost",
		autoSizeColumn : true,
		editor : {
			// defaults to textfield if no xtype is supplied
			allowBlank : false
		}
	},{
		text : "Status",
		dataIndex : 'status',
		renderer:returnName,
		sortable : true,
	},{
		text : "purchase Order Code",
		dataIndex : 'purchase',
		renderer: returnId,
		sortable : true,
	}  ],
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
