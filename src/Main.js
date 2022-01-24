import React from "react";
import styled from "styled-components";

import Footer from "./components/Footer";
import { Img } from "./components/common/Img";

import bg from "./img/main/bg.mp4"
import head from "./img/main/i_logo_head.png"
import main from "./img/main/logo_main.png"
import profile from "./img/main/i_profile_w.png"
import play from "./img/main/i_play_w_b.png"
import illust from "./img/main/main_illust.png"



const Main = () => {
	return (
		<Container>
			<Video autoPlay loop src={bg} /> 

			<Top>
				<Img src={head} alt="head" width="300" height="27.5" />

				<span id="top-right">
					<span className="clickable">회원가입</span>
					<span id="button-login" className="clickable">
						<span id="button-login">로그인</span>
						<Img src={profile} alt="profile" width="27" height="27" />
					</span>
				</span>
			</Top>

			<Middle>
				<MiddleLeft>
					<Img className="clickable" src={main} alt="main" width="537px" height="170px" />
					<div id="start-container">
						<span>너무나도 빠르고 편리한 영상제작 A.I</span>
						<Img class="clickable" src={play} alt="play-button" width="36" height="36" margin="0 0 0 20px" />
					</div>
				</MiddleLeft>

				<MiddleRight>
					<div id="make-video-container" className="clickable">
						<Img src={illust} alt="illust" width="235" height="190" margin="17px 0 0" />
						<span id="make-video-container-right">
							<div id="make-video-container-right-top">텍스트로 만드는 A.I영상</div>
							<div id="make-video-container-right-middle">A.I영상 만들기</div>
							<div id="make-video-container-right-bottom"> *영상을 다운받으려면 로그인 후 이용하세요. </div>
						</span>
					</div>
				</MiddleRight>
			</Middle>

			<Footer/>

		</Container>
	)
}

export default Main;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	min-height: 1240px;
	overflow: auto;
	background-color: #000;
	color: #fff;
	font-size: 18px;
	position: relative;
`;

const Video = styled.video`
	position: fixed;
	right: 0;
	bottom: 0;
	min-width: 100vw;
	min-height: 100vh;
	z-index: 0;
`;

const Top = styled.div`
	width: 100%;
	min-width: 1300px;
	min-height: 100px;
	max-height: 100px;
	flex-grow: 1 1 auto;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0 60px;
	z-index: 1;

	#button-login {
		width: 140px;
    height: 46px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 32px;
    background-color: #7450ff;
	}

	#top-right {
		display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-shrink: 0;
    grid-gap: 43px;
    gap: 43px;
	}
`;

const Middle = styled.div`
	flex: 10 1 auto;
	width: 100%;
	min-height: 580px;
	min-width: 1300px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 60px;
	z-index: 1;
`;

const MiddleLeft = styled.span`
		text-decoration: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

	#start-container {
		margin: 73px 0 0 30px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
	}
`;

const MiddleRight = styled.span`
	#make-video-container {
		transform: translateY(-80%);
    width: 650px;
    height: 209px;
    border: 2px solid #7450ff;
    border-radius: 16px;
    background-color: #111;
    display: flex;
    flex-direction: row;
    justify-content: center;
    grid-gap: 17px;
    gap: 17px;
    margin: 0 30px 0 0;
	}

	#make-video-container-right {
		display: flex;
    flex-direction: column;
	}

	#make-video-container-right-top {
		margin: 47px 0 0;
    font-size: 20px;
	}

	#make-video-container-right-middle {
		margin: 10px 0 0;
    font-size: 36px;
	}

	#make-video-container-right-bottom {
    margin: 40px 0 0;
    font-size: 18px;
    color: #d8d8d8;
	}

`;



