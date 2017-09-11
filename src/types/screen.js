import ScreenOrientation from './screen-orientation.js'

export const LOCK_TYPE = {
	ANY: 'any',
	NATURAL: 'natural',
	DEFAULT: 'natural',
	LANDSCAPE: 'landscape',
	PORTRAIT: 'portrait',
	PORTRAIT_PRIMARY: 'landscape-primary',
	PORTRAIT_SECONDARY: 'landscape-secondary',
	LANDSCAPE_PRIMARY: 'landscape-primary',
	LANDSCAPE_SECONDARY: 'landscape-secondary'
}

export default class Screen {
	static LOCK_TYPE = LOCK_TYPE

	constructor(){
		let screen = this
		this.orientation = new ScreenOrientation()
		this.subscribe(function(){
			screen.orientation =  new ScreenOrientation()
		})
	}

	subscribe(callback){
		if (('orientation' in screen) && ('onchange' in screen.orientation)) {
			screen.orientation.addEventListener('change', this.screenOrientationHandler(callback), false)
		} 
		if ('onorientationchange' in window) {
			window.addEventListener('orientationchange', this.screenOrientationHandler(callback), false)
		} 
		else if ('onorientationchange' in screen) {
			screen.addEventListener('orientationchange', this.screenOrientationHandler(callback), false)
		} 
		else if ('onmsorientationchange' in screen) {
			screen.addEventListener('MSOrientationChange', this.screenOrientationHandler(callback), false)
		}
	}

	screenOrientationHandler(callback) {
		let screen = this
		return function handleScreenOrientation(){
			callback(screen.orientation)
		}
	}
}