import React from "react";
import styled from "styled-components";

export const Img = (props) => {

	const {
    _onClick,
    src,
		alt,
    margin,
    width,
		height,
		pointer
	} = props;

	const styles = {
		width,
		height,
		margin,
		pointer
	}

	return (
		<>
			<ImgComponent 
				onClick={_onClick}
				src={src} 
				alt={alt} 
				{...styles}
			/>
		</>
	)
}

Img.defaultProps = {
  _onClick: () => {},
};

const ImgComponent = styled.img`
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	margin: ${(props) => props.margin};
	/* cursor: ${(props) => props.cursor}; */
	${(props) => (props.pointer ? `cursor: pointer;` : "")};
`;
