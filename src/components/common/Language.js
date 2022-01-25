import React from "react";
import styled from "styled-components";
import { Img } from "./Img";

import global from "../../img/languageImg/i-global-g.png"
import arrow from "../../img/languageImg/i-down-arrow-w.png"

const Language = () => {

	return (
		<Container>
			<div id="main"> 
				<div id="container" className="clickable">
					<sapn id="inner-container">
						<span id="left-container">
							<Img src={global} alt="global-icon" width="30" height="30" />
							<span id="lang">한국어</span>
						</span>
						<Img src={arrow} alt="arrow" width="20" height="20" />
					</sapn>
				</div>
			</div>
		</Container>
	)
}

export default Language;

const Container = styled.span`
	display: flex;
	width: 300px;

	#container {
		width: 140px;
    height: 46px;
    border-radius: 8px;
    outline: 1px solid #707070;
    outline-offset: -1px;
    background-color: #111;
    justify-content: space-between;
    color: #fff;
    padding: 0 10px 0 4px;
    position: relative;
	}

	#main {
		width: 300px;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		grid-gap: 20px;
		gap: 20px;
	}

	#inner-container {
		display: flex;
    flex-direction: row;
    align-items: center;
		justify-content: space-around;
    width: 100%;
    height: 100%;
	}

	#left-container {
		display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
	}

	#lang {
		margin: 0 0 0 4px;
    font-size: 16px;
    font-weight: 500;
	}
`;