import React from "react";
import styled from "styled-components";

const Text = (props) => {
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
		// height
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
		// height
  };
  return (
    <Span onClick={_onClick} {...styles}>
      {children}
    </Span>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  // size: "14px",
  margin: false,
  cursor: false,
  _onClick: () => {},
  center: false,
  // height: "-20px",
};

const Span = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
	height: "-20px";
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
	${(props) => (props.pointer ? `cursor: pointer;` : "")};
  ${(props) => (props.center ? `text-align: center` : "")};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")};
  ${(props) => (props.bottom ? `border-bottom: ${props.bottom};` : "")};
`;

export default Text;
