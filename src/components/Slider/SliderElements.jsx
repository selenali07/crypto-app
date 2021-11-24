import styled, {keyframes} from 'styled-components';

export const scroll = keyframes `
	0% { transform: translateX(0); }
	100% { transform: translateX(-100rem)}
`
export const SliderElt = styled.div`
    background: #fff;
	height: auto;
	margin: auto;
	padding: 0.5rem 0;
	max-width: 100rem;
	overflow:hidden;
	position: relative;
	width: 100%;
	display: flex;
	justify-self:center;
	align-items:center;
	color: #000;
    &::before,
	&::after {
		content: "";
		height: 6rem;
		position: absolute;
		width: 20rem;
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
    animation: ${scroll} 30s linear infinite;
    display: flex;
	align-items: center;
`
export const Slide = styled.div` 
    height: auto;
	margin: 0.5rem 1rem;
	display:flex;
	flex-direction:row;
	align-items: center;
	width: 20rem;
`
export const Loss = styled.p `
	color: #FF0000;
	margin-left:0.5rem;
	margin-right:0.5rem;
`
export const Profit = styled.p `
	color: #0C7C59;
	margin-left:0.5rem;
	margin-right:0.5rem;
`