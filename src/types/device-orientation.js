import Screen from './screen.js'

let screen = new Screen()

export const DIRECTION = {
	N: 'N',
	S: 'S',
	E: 'E',
	W: 'W',
	NE: 'NE',
	NW: 'NW',
	SE: 'SE',
	SW: 'SW'
}

export default class DeviceOrientation{
	constructor({alpha, beta, gamma}){
		//compensate screen orientation
		alpha = alpha - screen.orientation.angle

		if (alpha < 0) {
			alpha = alpha + 360
		}
		else if (alpha > 360) {
			alpha = alpha - 360
		}

		this.alpha = alpha
		this.beta = beta
		this.gamma = gamma
		this.heading = (alpha !== 0) ? (360 - alpha) : 0
		// console.log({alpha, heading: this.heading})
	}
	get direction(){
		const { heading } = this;
		switch (true) {
			case heading >= 337.5 || heading < 22.5:
				return DIRECTION.N
			case heading >= 22.5 && heading < 67.5:
				return DIRECTION.NE
			case heading >= 67.5 && heading < 112.5:
				return DIRECTION.E
			case heading >= 112.5 && heading < 157.5:
				return DIRECTION.SE
			case heading >= 157.5 && heading < 202.5:
				return DIRECTION.S
			case heading >= 202.5 && heading < 247.5:
				return DIRECTION.SW
			case heading >= 247.5 && heading < 292.5:
				return DIRECTION.W
			case heading >= 292.5 && heading < 337.5:
				return DIRECTION.NW
	  }
	}
}