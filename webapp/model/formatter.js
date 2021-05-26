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

			//return parseFloat(sValue).toFixed(2);
			//return sValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
			//return sValue.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
			//return Number(sValue).toFixed(2);
			
			sValue = parseFloat(sValue);
			return sValue.toLocaleString(
				'de-DE', 
				{ 
					minimumFractionDigits: 2 
				}
			  );
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
		},

		statusValue : function (sValue) {
			var i18n = this.getView().getModel("i18n").getResourceBundle();
			switch (sValue) {
				case i18n.getText("statusKeyA"):
					return i18n.getText("statusTextA");
				case i18n.getText("statusKeyB"):
					return i18n.getText("statusTextB");
				case i18n.getText("statusKeyC"):
					return i18n.getText("statusTextC");
				case i18n.getText("statusKeyD"):
					return i18n.getText("statusTextD");			
				case i18n.getText("statusKeyE"):
					return i18n.getText("statusTextE");		
				case i18n.getText("statusKeyF"):
					return i18n.getText("statusTextF");	
				case i18n.getText("statusKeyG"):
					return i18n.getText("statusTextG");	
				case i18n.getText("statusKeyH"):
					return i18n.getText("statusTextH");	
				case i18n.getText("statusKeyI"):
					return i18n.getText("statusTextI");	
				case i18n.getText("statusKeyJ"):
					return i18n.getText("statusTextJ");	
				case i18n.getText("statusKeyL"):
					return i18n.getText("statusTextL");	
				case i18n.getText("statusKeyS"):
					return i18n.getText("statusTextS");	
				case i18n.getText("statusKeyX"):
					return i18n.getText("statusTextX");		
				case i18n.getText("statusKey1"):
					return i18n.getText("statusText1");																																																					
				case i18n.getText("statusKey9"):
					return i18n.getText("statusText9");	
				case i18n.getText("statusKeyK"):
					return i18n.getText("statusTextK");	
				case i18n.getText("statusKey2"):
					return i18n.getText("statusText2");	
				case i18n.getText("statusKey3"):
					return i18n.getText("statusText3");	
				case i18n.getText("statusKeyM"):
					return i18n.getText("statusTextM");	
				case i18n.getText("statusKey4"):
					return i18n.getText("statusText4");			
				case i18n.getText("statusKey5"):
					return i18n.getText("statusText5");	
				case i18n.getText("statusKeyT"):
					return i18n.getText("statusTextT");	
				case i18n.getText("statusKeyN"):
					return i18n.getText("statusTextN");	
				case i18n.getText("statusKeyR"):
					return i18n.getText("statusTextR");	
				case i18n.getText("statusKeyW"):
					return i18n.getText("statusTextW");																																																					
				default:
					return "";
			}
		},					
	};
});