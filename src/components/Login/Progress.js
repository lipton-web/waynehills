import React from "react";
import styled from "styled-components";

const Progress = (props) => {

	return (
		<ProgresBar>
			<HighLight width={ props.tap*25 + "%"} />
		</ProgresBar>
	)
}

export default Progress;

const ProgresBar = styled.div`
	/* display: flex;
	flex-direction: row; */
	position: absolute;
	width: 100%;
	height: 10px;
	border-top-right-radius: 8px;
	background-color: #333;
`;

const HighLight = styled.div`
	background-color: #650aa8;
	width: ${(props) => props.width};
  height: inherit;
`;