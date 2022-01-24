import React from "react";
import styled from "styled-components";

export const Img = (props) => {

	return (
		<>
			<ImgComponent 
				src={props.src} 
				alt={props.alt} 
				width={props.width} 
				height={props.height} 
				margin={props.margin}
				className={props.class}
			/>
		</>
	)
}

const ImgComponent = styled.img`
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	margin: ${(props) => props.margin};
`;
