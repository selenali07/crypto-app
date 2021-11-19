import styled, {keyframes} from 'styled-components';

export const scroll = keyframes `
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-15vw * 5))}
`

export const SliderElt = styled.div`
    background: white;
	box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
	height: auto;
	margin: auto;
	padding: 0.1rem 0;
	overflow:hidden;
	position: relative;
	width: 100vw;
	display: flex;
	justify-self:center;
	align-items:center;
    &::before,
	&::after {
		background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 50%);
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}
    &::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}
`
export const SlideTrack = styled.div` 
    animation: ${scroll} 20s linear infinite;
    display: flex;
    width: calc(250px * 10);
`
export const Slide = styled.div` 
    height: auto;
    width: 250px;
`