sap.ui.define([], function() {
	"use strict";

	var _objPernr = null;
	var _objOLabel = null;
	var _objOInput = null;

	return {

		setPernr: function(objPernr) {
			_objPernr = objPernr;
		},

		getPernr: function() {
			return _objPernr;
		},

		setOLabel: function(oLabel) {
			_objOLabel = oLabel;
		},

		getOLabel: function() {
			return _objOLabel;
		},
		
		setOInput: function(oInput) {
			_objOInput = oInput;
		},

		getOInput: function() {
			return _objOInput;
		}

	};
});