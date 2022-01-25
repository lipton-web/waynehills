import React from "react";
import styled from "styled-components";

export const Input = (props) => {

	const {placeholder, size, color, bg, margin, padding, width, height, radius } = props

	const styles = {size, color, bg, margin, padding, width, height, radius}

	return (
		<InputText placeholder={placeholder} {...styles} />
	)
}

Input.defaultProps = {
  width: "100%",
	height: "50px",
  padding: "0 13px",
  bg: "#333",
  radius: "8px",
  size: "16px",
	margin: null
};

const InputText = styled.input`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "500" : "400")};
	letter-spacing: ${(props) => props.spacing};
  width: ${(props) => props.width};
	height: ${(props) => props.height};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: none;
	border-radius: ${(props) => props.radius};
  font-size: ${(props) => props.size};
`;