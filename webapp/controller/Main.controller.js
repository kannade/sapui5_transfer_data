sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"transfer/info/model/Utils",
	"sap/m/MessageToast"
], function (Controller, Utils, MessageToast) {
	"use strict";

	return Controller.extend("transfer.info.controller.Main", {

		onInit: function () {
			// подписываемся на событие
			var oEventBus = sap.ui.getCore().getEventBus();
			oEventBus.subscribe(
				"way1",
				"afterInitComp",
				this.onAfterInitComp,
				this
			);
		},

		onAfterRendering: function () {
			var oComp = this.getOwnerComponent();
			var testModel = oComp.getModel("testmodel");
			var aData = testModel.getData();

			//достанем текст из модели
			this.getView().byId("oneLabel").setText(aData.items[0].key);

			//достанем объект из модели
			var verticalL = this.getView().byId("verL");
			var oLabel2 = testModel.getProperty("/desc");
			verticalL.addContent(oLabel2);

			//достанем текст из utill.js
			this.getView().byId("threeLabel").setText(Utils.getPernr());

			//достанем объекты из utill.js
			var oSimpleForm = this.getView().byId("SimpleFormChange354");
			var oInput = Utils.getOInput();
			var oLabel = Utils.getOLabel();
			oSimpleForm.addContent(oLabel);
			oSimpleForm.addContent(oInput);

			//достанем текст из глобального объекта
			this.getView().byId("twoLabel").setText(sap.alfa.dataBinding.key1);

			//Достанем объект из глобального объекта
			verticalL.addContent(sap.alfa.dataBinding.key2);
		},

		onAfterInitComp: function (channel, event, item) {
			MessageToast.show(item);
		}

	});
});