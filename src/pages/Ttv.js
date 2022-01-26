import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Text, Wrap, Img, Button } from "../components/common/index";

import user from "../img/ttv/i_user_personal_v.png"
import arrow from "../img/ttv/i-down-arrow-white.png"
import Sidebar from "../components/ttv/Sidebar";

const Ttv = () => {

	const email =  useSelector((state) => state.user.email);
	const [text, setText] = useState("")

	return (
		<Container>

		 <Sidebar/>

			<Wrap
				width="1280px"
				height="40px"
				direction="row"
				content="space-between"
				margin="22px 0 0"
			>
				<Text size="22px">단계 1. 텍스트 입력</Text>

				<Wrap
					direction="row"
					content="center"
					items="center"
				>
					<Wrap
						direction="row"
						content="center"
						items="center"
						position="relative"
					>
						<Img src={user} alt="user" width="36" height="36" />
						<Text
							size="16px"
							margin="0 6px 0 10px"
						>
							{email}
						</Text>
						<Img src={arrow} alt="arrow" width="20" height="20" margin="0 30px 0 0" />
					</Wrap>

					<Button
						bold
						size="16px"
						width="200px"
						height="40px"
						bg="#650aa8"
						color="#FFF"
					>
						다음
					</Button>
				</Wrap>
			</Wrap>

			<TextLocation>
				<TextArea placeholder="500~5,000자 텍스트를 입력해 주세요"
					onChange={(e)=>setText(e.target.value)}
				>

				</TextArea>
				<Wrap
					textarea
					direction="row"
					content="space-between"
					items="center"
					width="100%"
					height="50px"
				>
					<Text
						color="#d8d8d8"
						margin="0 30px"
						size="14px"
					>
						*텍스트를 입력하고 설정한 뒤 다음단계 버튼을 누르세요
					</Text>
					<Text
						color="#d8d8d8"
						margin="0 30px"
						size="14px"
					>
						현재 글자 수 : {text.length}
					</Text>
				</Wrap>

			</TextLocation>
		</Container>
	)
};

export default Ttv;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	min-width: 1420px;
	min-height: 1080px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: #222;
	color: #fff;
	grid-gap: 17px;
	gap: 17px;
`;

const TextLocation = styled.div`
	width: 1280px;
	height: 650px;
	background-color: #444;
	box-shadow: 0 3px 6px 0 #00000029;
	border-radius: 8px;
	margin: 18px 0 0;
`;

const TextArea = styled.textarea`
	border: unset;
	width: 100%;
	height: 600px;
	padding: 10px 30px;
	box-sizing: border-box;
	resize: none;
	overflow-y: auto;
	outline: none;
	background-color: #0000;
	font-size: 15px;
	color: #fff;
	line-height: 1.5;
	font-weight: 300;
`;