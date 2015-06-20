/**
 * 
 */
var accountDropdown = Ext.create('Ext.form.ComboBox', {
	fieldLabel : 'Choose a Account',
	store : accountStore,
	queryMode : 'remote',
	displayField : 'name',
	valueField : 'accountId',
	name : 'accountId'
});

var statusDropdown = Ext.create('Ext.form.ComboBox', {
	fieldLabel : 'Choose a Status',
	store : statusStore,
	queryMode : 'remote',
	displayField : 'name',
	valueField : 'statusId',
	name : 'statusId'
});

var currencyDropdown = Ext.create('Ext.form.ComboBox', {
	fieldLabel : 'Choose a Currency',
	store : currencyStore,
	queryMode : 'remote',
	displayField : 'name',
	valueField : 'currencyId',
	name : 'currencyId'
});

var brandDropdown = Ext.create('Ext.form.ComboBox', {
	fieldLabel : 'Choose a brand',
	store : brandStore,
	name : 'brandId',
	queryMode : 'remote',
	displayField : 'name',
	valueField : 'brandId',
});