/**
 * 
 */
	// create the Data Store for each basic info
	var accountStore = Ext.create('Ext.data.Store', {
		autoLoad : true,
		autoSync : true,
		model : 'Account',
		proxy : {
			type : 'rest',
			url : '/admin/account/accounts',
			reader : {
				type : 'json',
				rootProperty : 'data'
			},
			writer : {
				type : 'json'
			}
		}
	});

	var currencyStore = Ext.create('Ext.data.Store', {
		autoLoad : true,
		autoSync : true,
		model : 'Currency',
		proxy : {
			type : 'rest',
			url : '/admin/currency/currencys',
			reader : {
				type : 'json',
				rootProperty : 'data'
			},
			writer : {
				type : 'json'
			}
		}
	});

	var brandStore = Ext.create('Ext.data.Store', {
		autoLoad : true,
		autoSync : true,
		model : 'Brand',
		proxy : {
			type : 'rest',
			url : '/admin/brand/brands',
			reader : {
				type : 'json',
				rootProperty : 'data'
			},
			writer : {
				type : 'json'
			}
		}
	});

	var statusStore = Ext.create('Ext.data.Store', {
		autoLoad : true,
		autoSync : true,
		model : 'Status',
		proxy : {
			type : 'rest',
			url : '/admin/status/statuses',
			reader : {
				type : 'json',
				rootProperty : 'data'
			},
			writer : {
				type : 'json'
			}
		}
	});
	// end store