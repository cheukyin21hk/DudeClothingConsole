/**
 * 
 */
// start creating the form for each basic info
var accountForm = Ext.create('Ext.form.Panel', {
	region : "center",
	bodyPadding : 10,
	defaultType : 'textfield',
	items : [ {
		xtype : 'textfield',
		fieldLabel : 'Account Name',
		name : 'name',
		nullable : false
	}, {
		xtype : 'button',
		text : 'Add new account',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			var name = form.findField('name').getSubmitValue();
			if (form.isValid()) {
				Ext.Ajax.request({
					url : '/admin/account/add',
					method : 'GET',
					params : {
						name : name
					},
					success : function() {
						console.log('success');
					},
					failure : function() {
						console.log('failure');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		text : 'Reset',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			form.reset();
		}
	} ]
});

var brandForm = Ext.create('Ext.form.Panel', {
	region : "center",
	bodyPadding : 10,
	defaultType : 'textfield',
	items : [ {

		xtype : 'textfield',
		fieldLabel : 'Brand Name',
		name : 'name',
		nullable : false
	}, {
		xtype : 'button',
		text : 'Add new brand',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			var name = form.findField('name').getSubmitValue();
			if (form.isValid()) {
				Ext.Ajax.request({
					url : '/admin/brand/add',
					method : 'GET',
					params : {
						name : name
					},
					success : function() {
						console.log('success');
					},
					failure : function() {
						console.log('failure');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		text : 'Reset',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			form.reset();
		}
	} ]
});

var clientForm = Ext.create('Ext.form.Panel', {
	region : "center",
	bodyPadding : 10,
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Client Name',
		name : 'name'
	}, {
		xtype : 'numberfield',
		fieldLabel : 'Client Phone Number',
		name : 'phoneNumber'
	}, {
		xtype : 'button',
		text : 'Add new client',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			var name = form.findField('name').getSubmitValue();
			var phoneNumber = form.findField('phoneNumber').getSubmitValue();
			if (form.isValid()) {
				Ext.Ajax.request({
					url : '/admin/client/add',
					method : 'GET',
					params : {
						name : name,
						phoneNumber : phoneNumber
					},
					success : function() {
						console.log('success');
					},
					failure : function() {
						alert('error');
						console.log('failure');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		text : 'Reset',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			form.reset();
		}
	} ]
});

var currencyForm = Ext.create('Ext.form.Panel', {
	region : "center",
	bodyPadding : 10,
	defaultType : 'textfield',
	items : [ {
		xtype : 'textfield',
		fieldLabel : 'Currency Name',
		name : 'name',
		nullable : false
	}, {
		xtype : 'numberfield',
		fieldLabel : 'Currency Rate',
		name : 'rate'
	}, {
		xtype : 'button',
		text : 'Add new currency',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			var name = form.findField('name').getSubmitValue();
			var rate = form.findField('rate').getSubmitValue();
			if (form.isValid()) {
				Ext.Ajax.request({
					url : '/admin/currency/add',
					method : 'GET',
					params : {
						name : name,
						rate : rate
					},
					success : function() {
						console.log('success');
					},
					failure : function() {
						alert('error');
						console.log('failure');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		text : 'Reset',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			form.reset();
		}
	} ]
});

var statusForm = Ext.create('Ext.form.Panel', {
	region : "center",
	bodyPadding : 10,
	defaultType : 'textfield',
	items : [ {
		xtype : 'textfield',
		fieldLabel : 'Status Name',
		name : 'name',
		allowBlank : false
	}, {
		xtype : 'button',
		text : 'Add new status',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			var name = form.findField('name').getSubmitValue();
			if (form.isValid()) {
				Ext.Ajax.request({
					url : '/admin/status/add',
					method : 'GET',
					params : {
						name : name
					},
					success : function() {
						console.log('success');
					},
					failure : function() {
						console.log('failure');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		text : 'Reset',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			form.reset();
		}
	} ]
});

var orderForm = Ext.create('Ext.form.Panel', {
	region : "center",
	bodyPadding : 10,
	items : [ {
		xtype : 'numberfield',
		fieldLabel : 'Price',
		name : 'price'
	}, {
		xtype : 'datefield',
		fieldLabel : "Deposite Date",
		name : 'depositeDate'
	}, accountDropdown, {
		xtype : 'textfield',
		fieldLabel : "Stock ID",
		name : "stockId",
		nullable : false
	}, {
		xtype : 'numberfield',
		fieldLabel : "deposit",
		name : "deposit"
	}, statusDropdown, {
		xtype : 'textfield',
		fieldLabel : "client Code",
		name : "client",
		nullable : false
	}, {
		xtype : 'button',
		text : 'Add New Order',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			var name = form.findField('name').getSubmitValue();
			if (form.isValid()) {
				Ext.Ajax.request({
					url : '/admin/order/add',
					method : 'GET',
					params : {
						name : name
					},
					success : function() {
						console.log('success');
					},
					failure : function() {
						console.log('failure');
					}
				});
			}
		}
	}, {
		xtype : 'button',
		text : 'Reset',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			form.reset();
		}
	} ]
});

var purchaseForm = Ext.create('Ext.form.Panel', {
	region : "center",
	bodyPadding : 10,
	items : [
			{
				xtype : 'numberfield',
				fieldLabel : 'quantity',
				name : 'quantity'
			},
			currencyDropdown,
			{
				xtype : 'numberfield',
				fieldLabel : "Price in Currency",
				name : "currencyPrice"
			},
			{
				xtype : 'numberfield',
				fieldLabel : "foreignShipCost",
				name : "foreignShipCost"
			},
			{
				xtype : 'numberfield',
				fieldLabel : "localShipCost",
				name : "localShipCost"
			},
			{
				xtype : 'textfield',
				fieldLabel : "logisticCode",
				name : "logisticCode",
				nullable : false
			},
			{
				xtype : 'textfield',
				fieldLabel : "trackingNo",
				name : "trackingNo",
				nullable : false
			},
			{
				xtype : 'textfield',
				fieldLabel : "invoice",
				name : "invoice"
			},
			brandDropdown,
			{
				xtype : 'textfield',
				fieldLabel : "Size",
				name : "size",
				nullable : false
			},
			{
				xtype : 'textfield',
				fieldLabel : "Stock Name",
				name : "stockName",
				nullable : false
			},
			{
				xtype : 'button',
				text : 'Add New Purchase',
				margin : 10,
				handler : function() {
					var form = this.up('form').getForm();
					if (form.isValid()) {
						Ext.Ajax.request({
							url : '/admin/purchase/add',
							method : 'GET',
							params : {
								quantity : form.findField('quantity')
										.getSubmitValue(),
								currencyPrice : form.findField('currencyPrice')
										.getSubmitValue(),
								foreignShipCost : form.findField(
										'foreignShipCost').getSubmitValue(),
								localShipCost : form.findField('localShipCost')
										.getSubmitValue(),
								trackingNo : form.findField('trackingNo')
										.getSubmitValue(),
								invoice : form.findField('invoice')
										.getSubmitValue(),
								logisticCode : form.findField('logisticCode')
										.getSubmitValue(),
								stockName : form.findField('stockName')
										.getSubmitValue(),
								size : form.findField('size').getSubmitValue(),
								brandId : form.findField('brandId')
										.getSubmitValue(),
								currencyId : form.findField('currencyId').getSubmitValue()
							},
							success : function() {
								console.log('success');
							},
							failure : function() {
								console.log('failure');
							}
						});
					}
				}
			}, {
				xtype : 'button',
				text : 'Reset',
				margin : 10,
				handler : function() {
					var form = this.up('form').getForm();
					form.reset();
				}
			} ]
});