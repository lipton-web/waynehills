import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Alert, Img } from "../components/common/index"
import Footer from "../components/Footer";

import Step0 from "../components/Login/Step0";
import Step1 from "../components/Login/Step1";
import Step2 from "../components/Login/Step2";

import bg from "../img/bg.mp4"
import logo from "../img/login/i_logo_w_nomal.png"
import close from "../img/login/i_x_g.png"
import Progress from "../components/Login/Progress.js";

const Login = () => {

	const history = useHistory()
	const [check, setCheck] = useState(false)
	const [ready, setReady] = useState(false)
	const [tap, setTap] = useState(0)


	return (
		<>
		<Video autoPlay loop src={bg} /> 
		<Container>
			<div id="logo">
				<Img src={logo} alt="logo" width="220" height="98" />
			</div>

			<LoginContainer>
				<LoginBox>
					{ tap > 0 && <Progress tap={tap} /> }
					<Outer>
						<Img src={close} alt="close" width="28" height="28" pointer _onClick={()=>history.push("/")} />
					</Outer>

					<Inner>
						{/* 내용 바뀌는 부분 */}
						<TabContent tap={tap} setTap={setTap} />
					</Inner>

				</LoginBox>
			</LoginContainer>
			
			<FooterSection>
				<Footer />
			</FooterSection>
			
		</Container>
		
		{ ready && <Alert bg="#650aa8">준비중입니다.</Alert> }
		
		</>
	)
}

export default Login;

function TabContent(props) {

	if (props.tap === 0) {
		return <Step0 setTap={props.setTap} />
	} else if (props.tap === 1) {
		return <Step1 setTap={props.setTap} />
	} else if (props.tap === 2) {
		return <Step2 setTap={props.setTap} />
	}
}

const Video = styled.video`
	position: fixed;
	right: 0;
	bottom: 0;
	min-width: 100vw;
	min-height: 100vh;
	z-index: 0;
`;

const Container = styled.div`
	position: relative;
	z-index: 1;

	#logo {
		position: fixed;
    left: 60px;
    top: 40px;
	}
`;

const LoginContainer = styled.div`
	width: 100vw;
	height: 100vh;
	min-height: 960px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #aaa;
`;

const LoginBox = styled.div`
	width: 440px;
	height: 620px;
	border-radius: 8px;
	background-color: #111111e6;
	position: relative;
	overflow: hidden;
`;

const Outer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin: 30px 30px 10px 30px;
	position: relative;
`;

const Inner = styled.div`
	color: #fff;
	margin: 0 0 40px;
	font-size: 26px;
  letter-spacing: .0074em;
`;

const AppLogin = styled.div`
	width: 100%;
	height: 100%;

	#container {
		width: 320px;
		margin: 0 auto;


		#title {
			margin: 0 0 40px;
		}

		#email {
			all: unset;
			width: 100%;
			height: 50px;
			padding: 13px;
			color: #fff;
			background-color: #333;
			border-radius: 8px;
			font-size: 16px;
			box-sizing: border-box;
			margin: 0 0 20px;
		}

		#password {
			all: unset;
			width: 100%;
			height: 50px;
			padding: 13px;
			color: #fff;
			background-color: #333;
			border-radius: 8px;
			font-size: 16px;
			box-sizing: border-box;
		}
	}
`;

const FooterSection = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
`;