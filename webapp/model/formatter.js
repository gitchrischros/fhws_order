sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue : function (sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		
		twoDigits : function (sValue) {
			if (!sValue) {
				return "";
			}
			var oLocale = sap.ui.getCore().getConfiguration().getLocale(); //Get Local settings
			var oFormatOptions = {
				maxFractionDigits: 2,
				minFractionDigits : 2
			};
			var oCurrencyFormat = sap.ui.core.format.NumberFormat.getCurrencyInstance(oFormatOptions, oLocale);

			return oCurrencyFormat.format(sValue);
		}			
	};
});