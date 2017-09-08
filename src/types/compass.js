import Orientatoin from './orientation'


function isEventAbsolute(event) {
	return Boolean(event.absolute) || event.type === 'deviceorientationabsolute'
}

function deviceOrientationHandler(callback) {
	return function handleDeviceOrientation(event){
		var gamma = event.gamma || 0
		var beta = event.beta || 0
		var alpha = event.webkitCompassHeading ? (360 - event.webkitCompassHeading) : event.alpha || 0

		callback(new Orientatoin({alpha, beta, gamma}))
	}
}

export default class Compass {
	constructor(){
		// feature detection
		if (typeof DeviceOrientationEvent === 'undefined') {
			throw new Error('Your device doesn\'t support compass')
		}
	}
	subscribe(callback){
		if ('ondeviceorientationabsolute' in window) {
			// We can listen for the new deviceorientationabsolute event.
			window.addEventListener('deviceorientation', deviceOrientationHandler(callback), false)
		} 
		else if ('ondeviceorientation' in window) {
			// We can still listen for deviceorientation events.
			// The `absolute` property of the event tells us whether
			// or not the degrees are absolute.
			window.addEventListener('deviceorientation', deviceOrientationHandler(callback), false)
		}
	}
	get(){}
}