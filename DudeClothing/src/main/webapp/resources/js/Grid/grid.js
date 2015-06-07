/**
 * 
 */

	// create the grid
	var accountGrid = Ext.create('Ext.grid.Panel', {
		title : 'Account record',
		width : 600,
		bufferedRenderer : false,
		store : accountStore,
		columns : [ {
			text : "Code",
			dataIndex : 'accountId',
			sortable : true
		}, {
			text : "Name",
			flex : 1,
			dataIndex : 'name',
		} ],
		forceFit : false,
		split : true,
		region : 'west'
	});

	var currencyGrid = Ext.create('Ext.grid.Panel', {
		title : 'Currency record',
		width : 600,
		bufferedRenderer : false,
		store : currencyStore,
		columns : [ {
			text : "Code",
			dataIndex : 'currencyId',
			sortable : true
		}, {
			text : "Name",
			flex : 1,
			dataIndex : 'name'
		}, {
			text : "Rate",
			flex : 1,
			dataIndex : 'rate',

		} ],
		forceFit : false,
		split : true,
		region : 'west'
	});

	var brandGrid = Ext.create('Ext.grid.Panel', {
		title : 'Brand record',
		width : 600,
		bufferedRenderer : false,
		store : brandStore,
		columns : [ {
			text : "Code",
			dataIndex : 'brandId',
			sortable : true
		}, {
			text : "Name",
			flex : 1,
			dataIndex : 'name',
		} ],
		forceFit : false,
		split : true,
		region : 'west'
	});

	var statusGrid = Ext.create('Ext.grid.Panel', {
		title : 'Status record',
		width : 600,
		bufferedRenderer : false,
		store : statusStore,
		columns : [ {
			text : "Code",
			dataIndex : 'statusId',
			sortable : true
		}, {
			text : "Name",
			flex : 1,
			dataIndex : 'name',
		} ],
		forceFit : false,
		split : true,
		region : 'west'
	});

	// end grid