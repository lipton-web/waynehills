import React from "react";
import styled from "styled-components";

export const Button = (props) => {

  const {
    _onClick,
    children,
    margin,
    width,
		height,
    padding,
    cursor,
    color,
    bg,
    radius,
    size,
		flex,
		innerBtn,
    bold
  } = props;

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    cursor: cursor,
    color: color,
    bg: bg,
    radius: radius,
    size: size,
		height,
		flex,
		innerBtn,
    bold
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </React.Fragment>
  );
};

Button.defaultProps = {
  text: false,
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  padding: null,
  bg: false,
  radius: "8px",
  size: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
	height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  cursor: pointer;
	border-radius: ${(props) => props.radius};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "700" : "400")};

	${(props) => (props.flex &&
	`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	`
	)}

	${(props) => (props.innerBtn &&
	`
	position: absolute;
	top: 0;
	right: 0;
	border-radius: 0;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	` )}
`;
