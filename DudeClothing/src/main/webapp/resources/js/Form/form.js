/**
 * 
 */
// start creating the form for each basic info
var accountForm = Ext.create('Ext.form.Panel', {
	title : 'account info',
	region : "center",
	bodyPadding : 10,
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Account Name',
		name : 'name'
	}, {
		xtype : 'button',
		text : 'Add new account',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			var name = form.findField('name').getSubmitValue();
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
	title : 'Currency info',
	region : "center",
	bodyPadding : 10,
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Currency Name',
		name : 'name'
	}, {
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
	title : 'Brand info',
	region : "center",
	bodyPadding : 10,
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Brand Name',
		name : 'name'
	}, {
		xtype : 'button',
		text : 'Add new brand',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			var name = form.findField('name').getSubmitValue();
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
	title : 'Status info',
	region : "center",
	bodyPadding : 10,
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Status Name',
		name : 'name'
	}, {
		xtype : 'button',
		text : 'Add new status',
		margin : 10,
		handler : function() {
			var form = this.up('form').getForm();
			var name = form.findField('name').getSubmitValue();
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