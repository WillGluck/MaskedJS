/**
 * The main library class.
 * - Parameter containerId: id of the html container that will have the minputs masked.
*/
var MaskedJS =  function (containerId) {
	if (containerId) {
		if (document.getElementById(containerId)) {
			self.containerId = containerId
		} else {
			throw "The element with the passed container id could not be found."
		}	
	} else {
		throw "You need to pass a container id" 
	}
}