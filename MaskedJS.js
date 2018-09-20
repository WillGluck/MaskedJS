/**
 * The main library class.
 * - Parameter containerId: id of the html container that will have the minputs masked.
*/
var MaskedJS =  function (containerId) {
	if (containerId) {
		if (document.getElementById(containerId)) {
			this.containerId = containerId;
		} 
	}
};

(function(self) {
    
    self.mask = function () {        
        var container = this.containerId ? document.getElementById(this.containerId) : document;
        Array.prototype.forEach.call(container.querySelectorAll("*[data-mjspattern]"), this.configField);
    }
    
    self.configField = function(field) {        
        field.addEventListener('keypress', self.onKeyPress);
    }
            
    //Temp

    self.onKeyPress = function(event) {
        event = self.getEvent(event)
        if (event) {
            var element = self.getElement(event);
            var charCode = self.getCharCode(event);
            if (charCode == 13) {
                return true;
            }            
            var willBeAddedValue = String.fromCharCode(charCode)
            var pattern = element.dataset.mjspattern
            var value = element.value
            
            if (self.isNumber(willBeAddedValue) && element.value.length < pattern.length) {
                
                var index = value.length;
                var patternElement = pattern.charAt(index);

                while(patternElement != "#") {
                    element.value += patternElement
                    patternElement = pattern.charAt(++index); 
                }

            } else {
                event = self.postHandler(event)
                return false   
            }
        }
    }
        
    self.postHandler = function(event) {
        if (self.isIE()) {
            event.keyCode = 0
            event.returnValue = false;
        } else {
            event.preventDefault()
        }
        return event
    }
       
    self.getEvent = function(event) {
        return (event) ? event : (window.event ? event : null)
    }
    
    self.getElement = function(event) {
        return  event.srcElement ? event.srcElement : (event.target ? event.target : null)
    }
        
    self.getCharCode = function(event) {
       return event.charCode ? event.charCode : (event.keyCode ? event.keyCode : (event.which ? event.which : 0));
    }
    
    self.isIE = function() {
        var browswerName = window.navigator.appName
        return (browswerName.indexOf("Internet Explorer") != -1)
    }     
    
    self.isNumber = function(value) {
        var numberPattern = /^[0-9]*$/
        return (numberPattern.test(value))
    }

	
})(MaskedJS.prototype);
