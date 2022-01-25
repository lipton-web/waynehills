import React from "react";
import styled from "styled-components";

import { Img, Text, Language } from "./common/index"

import footer_logo from "../img/footer/i-footer-logo.png"
import facebook from "../img/footer/i-sns-facebook.png"
import youtube from "../img/footer/i-sns-youtube.png"
import instagram from "../img/footer/i-sns-instagram.png"
import copyright from "../img/footer/i-copyright.png";



const Footer = () => {
	return (
		<FooterContainer>
			<FooterInner>
			<div id="footer-container" className="align-center">
				<span id="footer-block-1" className="mat-body-1">

					<Top>
						<a href="https://www.waynehills.co/" target="_blank" rel="noreferrer">
							<Img src={footer_logo} alt="footer_logo" width="200.5" height="18.4"/>
						</a>
						<span id="sns-container">
							<a href="https://www.facebook.com/rakudabi" target="_blank"  rel="noreferrer">
								<Img src={facebook} alt="facebook_logo" width="30" height="30" margin="0 2px" />
							</a>
							<a href="https://www.youtube.com/channel/UCYn39__aIJSlDQc8OlMRUYg" target="_blank"  rel="noreferrer">
								<Img src={youtube} alt="youtube_logo" width="30" height="30" margin="0 2px" />
							</a>
							<a href="https://www.instagram.com/ysuemin/" target="_blank"  rel="noreferrer">
								<Img src={instagram} alt="instagram_logo" width="30" height="30" margin="0 2px" />
							</a>
						</span>
					</Top>

					<Middle>
						웨인힐스벤처스, 서울특별시 강서구 마곡중앙8로 5길 11 파인스퀘어3차 2층(204~207호) &nbsp;&nbsp;|&nbsp;&nbsp; 사업자등록번호 : 547-87-01358 &nbsp;&nbsp;|&nbsp;&nbsp; 설립자 : 이수민 
					</Middle>

					<Bottom>
						<Img src={copyright} alt="copyright-logo" width="30" height="30" />
						<Text size="12px" color="#AAA">Copyright 2021 waynehills ventures all rights reserved</Text>
						&nbsp;&nbsp;|&nbsp;&nbsp;
						<Text size="14px" color="#AAA">이용약관</Text>
						&nbsp;&nbsp;|&nbsp;&nbsp; e-mail:waynehills.ventures@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; Powered by Shutterstock 
					</Bottom>

				</span>

				<Language />
			</div>
			</FooterInner>
			
		</FooterContainer>
	)
}

export default Footer;

const FooterContainer = styled.div`
	flex: 1 1 auto;
	width: 100%;
	min-height: 170px;
	max-height: 170px;
	color: #aaa;

	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	overflow: auto;
	background-color: #000;
	color: #fff;
	font-size: 18px;
	position: relative;

	z-index: 1;

	#footer-container {
		width: 100%;
    background-color: #111111e4;
    overflow: visible;
    display: flex;
    flex-direction: row;
    width: 1260px;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
		max-width: 1260px;
    margin: 0 auto;
	}

	#footer-block-1 {
		flex-direction: column;
	}

	#footer_logo {
		width: 200.5px;
    height: 18.4px;
	}
`;

const FooterInner = styled.div`
	min-width: 1300px;
	height: 170px;
	width: 100%;
	height: 170px;
	background-color: #111111e4;
	color: #aaa;
	display: flex;
`;

const Top = styled.div`
	display: flex;
  font-size: 13px;
	flex-direction: row;
	align-items: center;
	grid-gap: 20px;
	gap: 20px;
`;

const Middle = styled.div`
	margin: 2px 0 0;
	font-size: 13px;
	letter-spacing: .0208em;
`;

const Bottom = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin: 5px 0 0;
	font-size: 13px;
	letter-spacing: .0208em;
`;