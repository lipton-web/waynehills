import React from "react";
import styled from "styled-components";

export const Text = (props) => {

  const {
    bold,
    color,
    size,
    padding,
    children,
    margin,
    cursor,
    _onClick,
    center,
		bottom,
		pointer,
		spacing,
		div,
		flex,
		indent
  } = props;

  const styles = {
    bold: bold,
    cursor: cursor,
    color: color,
    size: size,
    margin: margin,
    center: center,
    padding: padding,
		bottom: bottom,
		pointer,
		spacing,
		flex,
		indent
  };
	
	
	if (div) {
		return (
			<Div onClick={_onClick} {...styles}>
				{children}
			</Div>
		);
	}

	return (
		<Span onClick={_onClick} {...styles}>
			{children}
		</Span>
	);
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#FFF",
  size: "12px",
  margin: false,
  cursor: false,
  _onClick: () => {},
  center: false,
};


const Span = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "500" : "400")};
	letter-spacing: ${(props) => props.spacing};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
	${(props) => (props.pointer ? `cursor: pointer;` : "")};
  ${(props) => (props.center ? `text-align: center` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.bottom ? `border-bottom: ${props.bottom};` : "")};
	${(props) => (props.center ? `text-align: center` : "")};
	${(props) => (props.indent ? `text-indent: -6px` : "")};

	${(props) => (props.flex && 
	`
	display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
	`
	)}
`;

const Div = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "500" : "400")};
	height: "-20px";
	letter-spacing: ${(props) => props.spacing};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
	${(props) => (props.pointer ? `cursor: pointer;` : "")};
  ${(props) => (props.center ? `text-align: center` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.bottom ? `border-bottom: ${props.bottom};` : "")};
	${(props) => (props.center ? `text-align: center` : "")};
`;


