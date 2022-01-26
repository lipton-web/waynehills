import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import emblem from "../../img/ttv/i_emblem_m_big.png"
import { Img } from "../common/index";

const Sidebar = () => {

	const history = useHistory();

	return (
		<Container>
			<Img src={emblem} alt="emblem" width="42" height="42" margin="20px 0 40px" 
				_onClick={()=>history.push("/")}
			/>
		</Container>
	)
}

export default Sidebar

const Container = styled.span`
	position: fixed;
	left: 0;
	top: 0;
	width: 60px;
	height: 100vh;
	background-color: #444;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	z-index: 1;
`;