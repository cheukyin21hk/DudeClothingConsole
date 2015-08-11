/**
 * 
 */
 Ext.define('com.dudeClothing.AccountDropdown', {
 	extend: 'Ext.form.ComboBox',
 	xtype: 'dudeAccountDropdown',
 	fieldLabel : 'Choose a Account',
 	store : accountStore,
 	queryMode : 'remote',
 	displayField : 'name',
 	valueField : 'id',
 	name : 'accountId'

 });

 Ext.define('com.dudeClothing.StatusDropdown', {
 	extend: 'Ext.form.ComboBox',
 	xtype: 'dudeStatusDropdown',
 	fieldLabel : 'Choose a Status',
 	store : statusStore,
 	queryMode : 'remote',
 	displayField : 'name',
 	valueField : 'id',
 	name : 'statusId'

 });

 Ext.define('com.dudeClothing.CurrencyDropdown', {
 	extend: 'Ext.form.ComboBox',
 	xtype: 'dudeCurrencyDropdown',
 	fieldLabel : 'Choose a Currency',
 	store : currencyStore,
 	queryMode : 'remote',
 	displayField : 'name',
 	valueField : 'id',
 	name : 'currencyId'

 });

 Ext.define('com.dudeClothing.BrandDropdown', {
 	extend: 'Ext.form.ComboBox',
 	xtype: 'dudeBrandDropdown',
 	fieldLabel : 'Choose a brand',
 	store : brandStore,
 	queryMode : 'remote',
 	displayField : 'name',
 	valueField : 'id',
 	name : 'brandId'
 });


