export const TYPE = {
	PORTRAIT_PRIMARY: 'landscape-primary',
	PORTRAIT_SECONDARY: 'landscape-secondary',
	LANDSCAPE_PRIMARY: 'landscape-primary',
	LANDSCAPE_SECONDARY: 'landscape-secondary'
}

export function getScreenAngle(orientationChangeEvent){
	if ('orientation' in screen) {
		return screen.orientation.angle
	}
	else if ('orientation' in window){
		return window.orientation
	}
	else {
		return 0
	}
}

export function getScreenOrienation(){
	if ('orientation' in screen) {
		return screen.orientation.type
	}
	else if ('msOrientation' in screen){
		return screen.msOrientation
	}
	else if ('mozOrientation' in screen){
		return screen.mozOrientation
	}
	else {
		return 0
	}
	
	return screen.orientation.type
}

export default class ScreenOrientation {
	static TYPE = TYPE
	constructor(orientationChangeEvent){
		this.angle = getScreenAngle(orientationChangeEvent)
		this.type = getScreenOrienation()
	}
}