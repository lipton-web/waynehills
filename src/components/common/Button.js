import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const {
    text,
    _onClick,
    is_float,
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
  } = props;

  // if (is_float) {
  //   return (
  //     <React.Fragment>
  //       <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
  //     </React.Fragment>
  //   );
  // }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    cursor: cursor,
    color: color,
    bg: bg,
    radius: radius,
    size: size,
		height
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {/* {text ? text : children} */}
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
  //아영 - 배경컬러,radius,size 추가
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
  /* ${(props) =>
    props.borderRadius
      ? `border-radius: ${props.borderRadius};`
      : "border-radius: 3px;"} */
  font-size: ${(props) => props.size};
`;

export default Button;
