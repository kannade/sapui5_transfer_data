sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createJsonModel: function() {
			//Создаем массив
			var year = {
				"items": [{
					"key": "",
					"load": false
				}, {
					"key": "",
					"load": false
				}, {
					"key": "",
					"load": false
				}],

				"desc": ""
			};

			//Создаем модель с именем yearModel
			var oModelYear = new sap.ui.model.json.JSONModel();

			//Добавим в модель выше созданный массив
			oModelYear.setData(year);

			return oModelYear;

		}

	};
});