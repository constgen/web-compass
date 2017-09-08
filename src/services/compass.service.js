
import Compass from '../types/compass.js'

var compass 

try {
	compass = new Compass()
}
catch (err) {
	alert(err.message)
}

export default {
	subscribe(callback){
		compass.subscribe(callback)
	}
}