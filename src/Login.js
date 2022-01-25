import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Button from "./components/common/Button";
import { Img } from "./components/common/Img";
import Text from "./components/common/Text";
import { Wrap } from "./components/common/Wrap";
import Footer from "./components/Footer";

import bg from "./img/bg.mp4"
import logo from "./img/login/i_logo_w_nomal.png"
import close from "./img/login/i_x_g.png"
import checkOff from "./img/login/i_select_small_g.png"
import checkOn from "./img/login/i_select_small_v.png"
import google from "./img/login/i_google_b.png"
import facebook from "./img/login/i_facebook_b.png"


const Login = () => {

	const history = useHistory()
	const [check, setCheck] = useState(false)


	return (
		<>
		<Video autoPlay loop src={bg} /> 
		<Container>
			<div id="logo">
				<Img src={logo} alt="logo" width="220" height="98" />
			</div>

			<LoginContainer>
				<LoginBox>
					<Outer>
						<Img src={close} alt="close" width="28" height="28" pointer _onClick={()=>history.push("/")} />
					</Outer>

					<Inner>
						<AppLogin>
							<div id="container">
								<div id="title">로그인</div>

								<form>
									<div>
										<input id="email" type="text" placeholder="이메일 입력"/>
										<input id="password" type="password" placeholder="비밀번호 입력"/>
									</div>

									<Wrap direction="row" content="space-between" margin="8px 0 22px">
										<Text
											color="#AAA"
											size="12px"
										>
											비밀번호를 잊으셨나요?
										</Text>
										<Text
											color="#767676"
											size="12px"
											bottom="1px solid #aaa"
										>
											비밀번호 찾기
										</Text>
									</Wrap>
	
									<Button
										width="320px"
										height="50px"
										borderRadius="8px"
										bg="#650aa8"
										color="#fff"
										margin="0 0 16px"
										size="16px"
									>
										로그인
									</Button>
								</form>

								<Wrap 
									direction="row"
									content="flex-start"
									_onClick={()=>{setCheck(!check)}}
								>
									{
										check ?
										<Img src={checkOn} alt="check" width="20" height="20" cursor="pointer" />
										:
										<Img src={checkOff} alt="check_off" width="20" height="20" cursor="pointer" />
									}

									<Text
										color="#fff"
										size="12px"
										cursor="pointer"
										margin="0 0 0 8px"
									>
										로그인 정보 저장
									</Text>
								</Wrap>

								<Wrap
									direction="row"
									content="space-around"
									gridGap="6px"
									gap="6px"
									margin="28px 0 48px"
								>
									<Wrap pointer>
										<Img src={google} alt="google" width="20" height="20" />
										<Text size="12px" color="#767676">
											구글로 로그인하기
										</Text>
									</Wrap>
										<Text color="#3c3c3c">|</Text>
										<Wrap pointer>
										<Img src={facebook} alt="facebook"  width="20" height="20" />
										<Text size="12px" color="#767676">
											페이스북으로 로그인하기
										</Text>
									</Wrap>
								</Wrap>

								<Wrap
									direction="column"
									items="center"
									gridGap="10px"
									gap="10px"
								>
									<Text size="12px" color="#AAA">
										회원가입하고 영상을 제작해보세요!
									</Text>
									<Button
										width="320px"
										height="50px"
										// radius="8px"
										bg="#333"
										color="#fff"
										size="16px"
										margin="0 0 16px"
									>
										회원가입
									</Button>
								</Wrap>
							</div>

							
						</AppLogin>
					</Inner>
				</LoginBox>
			</LoginContainer>
			


			{/* <Footer /> */}
		</Container>
		</>
	)
}

export default Login;

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
	margin: 30px;
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