import React from "react";
import styled from "styled-components";

export const Wrap = (props) => {

  const { 
    children, margin, position, direction, content, 
    _onClick, gridGap, gap, pointer, width, height, items, textarea
  } = props;

  const styles = { 
    margin, position, direction, content, 
    gridGap, gap, pointer, width, height, items, textarea
  };

  return <Container onClick={_onClick} {...styles}>{children}</Container>;
};

Wrap.defaultPorps = {
  children: null,
  margin: "0px auto",
  position: "relative",
	direction: null,
	content: null,
	_onClick: () => {},
};

const Container = styled.div`
  position: relative;
  margin: ${(props) => props.margin};
  display: flex;
  flex-direction: ${(props) => props.direction};
	justify-content: ${(props) => props.content};
	align-items: ${(props) => props.items};
	grid-gap: ${(props) => props.gridGap};
  gap: ${(props) => props.gap};
	${(props) => (props.pointer ? `cursor: pointer;` : "")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${(props) => (props.textarea && `
  background-color: #333;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 14px;
  ` )}
`;