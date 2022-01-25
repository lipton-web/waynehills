import React from "react";
import styled from "styled-components";

export const Alert = (props) => {

	const {children, bg} = props

	const styles = {bg}

	return (
		<Container {...styles}>
			{children}
		</Container>
	)
}

const Container = styled.div`
	font-size: 16px;
	width: 443px;
	height: 76px;
	position: fixed;
	left: 50%;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	transform: translate(-50%,-10%);
	color: #fff!important;
	background-color: ${props => props.bg};
	z-index: 2;

	animation: down 0.1s linear;

	@keyframes down {
		0% {
			height: 0;
		}
		100% {
			height: 76px;
		}
	}
`;