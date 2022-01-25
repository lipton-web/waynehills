import React from "react";
import styled from "styled-components";

export const Wrap = (props) => {

  const { children, margin, position, direction, content, _onClick, gridGap, gap, pointer } = props;
  const styles = { margin, position, direction, content, gridGap, gap, pointer };

  return <Container onClick={_onClick} {...styles}>{children}</Container>;
};

Wrap.defaultPorps = {
  children: null,
  margin: "0px auto",
  // position: "absolute",
	direction: null,
	content: null,
	_onClick: () => {},
};

const Container = styled.div`
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: ${(props) => props.direction};
	justify-content: ${(props) => props.content};
	align-items: center;
	grid-gap: ${(props) => props.gridGap};
  gap: ${(props) => props.gap};
	${(props) => (props.pointer ? `cursor: pointer;` : "")};
  /* width: 90%; */
`;