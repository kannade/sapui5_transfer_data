sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"transfer/info/model/models",
	"transfer/info/model/Utils"
], function(UIComponent, Device, models, Utils) {
	"use strict";

	return UIComponent.extend("transfer.info.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			//установим тестовую модель
			this.setModel(models.createJsonModel(), "testmodel");

			//Получаем текущий, предыдущий и следующий год
			var d = new Date();
			var currentYear = parseInt(d.getFullYear(), 10);
			var prevYear = parseInt(d.getFullYear() - 1, 10);
			var nextYear = parseInt(d.getFullYear() + 1, 10);

			//Первый вариант записи - setProperty
			var testModel = this.getModel("testmodel");
			testModel.setProperty("/items/0/key", prevYear.toString());
			testModel.setProperty("/items/1/key", currentYear.toString());
			testModel.setProperty("/items/2/key", nextYear.toString());

			//Второй вариант записи
			var aData = testModel.getData();
			for (var i = 0; i < aData.items.length; i++) {
				aData.items[i].load = true;
			}
			testModel.refresh();

			//Установим объект через модель
			var oLabel2 = new sap.m.Label({
				text: "Label from Model from Component"
			});
			testModel.setProperty("/desc", oLabel2);

			//Установим текст через Utils
			Utils.setPernr("00001234");

			//Установим объект через Utils
			var oLabel = new sap.m.Label({
				text: "Label from Component"
			});
			Utils.setOLabel(oLabel);

			//Установим объект через Utils
			var oInput = new sap.m.Input({
				value: "Input from Component"
			});
			Utils.setOInput(oInput);

			//установим текст и объект глобально
			var oLabel3 = new sap.m.Label({
				text: "Global Label from Component"
			});

			jQuery.sap.getObject("sap.alfa.dataBinding", 0);
			sap.alfa.dataBinding = {
				key1: "Тест текст из глобального объекта",
				key2: oLabel3
			};

		}
	});
});