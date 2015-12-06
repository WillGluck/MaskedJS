/**
 * The main library class.
 * - Parameter containerId: id of the html container that will have the minputs masked.
*/
var MaskedJS =  function (containerId) {
	if (containerId) {
		if (document.getElementById(containerId)) {
			self.containerId = containerId;
		} else {
			throw "The element with the passed container id could not be found.";
		}	
	} else {
		throw "You need to pass a container id";
	}
};

(function(self) {

	function mask() {
		
	}
	
})(MaskedJS.prototype);

/**
 * Enumeration that have all the mask types supported by MaskedJS, with the correct class-name.
 * You can use them to set the class-names in the html fields.
*/
var MaskTypes = {
	
	DateShort: "maskedjs-date-short",
	DateMedium: "maskedjs-date-medium",
	DateLong: "maskedjs-date-long",
	
	CPF: "maskedjs-cpf",
	CNPJ: "maskedjs-cnpj",
	RG: "maskedjs-rg",
	TelephoneNumber: "maskedjs-telephone-number"
}