import React, {useState} from "react";
import styled from "styled-components";

import { Alert, Img, Text, Wrap } from "../../components/common/index"

import back from "../../img/login/i_back_w.png"
import company from "../../img/login/i_signup_company.png"
import personal from "../../img/login/i_signup_personal.png"

const Step1 = (props) => {

	const [ready, setReady] = useState(false)

	return (
		<AppLogin>
			<Container>

				{/* 헤더 */}
				<Wrap
					direction="row"
					content="space-between"
					items="center"
					margin="0 0 53px"
				>
					<span style={{display: "flex", flexDirection:"row", alignItems:"center"}}>
						<Img src={back} alt="back" width="28px" height="28px" margin="0 6px 0 0" pointer 
							_onClick={()=>{props.setTap(0)}}
						/>
						<Text size="26px" spacing=".0074em">
							회원가입
						</Text>
					</span>
					
					<Text color="#AAA" spacing=".0208em">회원분류를 선택해주세요</Text>
				</Wrap>

				{/* 바디 */}
				<Wrap
					direction="column"
					gridGap="26px"
					gap="26px"
				>
					<Wrap
						display="flex"
						direction="column"
						gridGap="4px"
						gap="4px"
						pointer
						_onClick={()=>{props.setTap(2)}}
					>
						<BackgroundImg url={personal}>
						<Text div margin="16px 0 0" size="20px" center bold>
							개인회원
						</Text>
						<Text div size="14px" margin="0 30px" center bold>
							자신만의 영상을 만들고 싶은 개인회원
						</Text>

						</BackgroundImg>
					</Wrap>

					<Wrap
						display="flex"
						direction="column"
						gridGap="4px"
						gap="4px"
						pointer
						_onClick={()=>{setReady(true)}}
					>
						<BackgroundImg url={company}>
						<Text div margin="16px 0 0" size="20px" center bold>
							기업회원
						</Text>
						<Text div size="14px" margin="0 30px" center bold>
							다함께 영상을 만들고 싶은 기업회원
						</Text>

						</BackgroundImg>
					</Wrap>
				</Wrap>

			</Container>
			{ ready && <Alert bg="#650aa8">준비중입니다.</Alert> }
		</AppLogin>

	)
}

export default Step1;

const AppLogin = styled.div`
	width: 100%;
	height: 100%;
`;

const Container = styled.div`
	width: 320px;
	margin: 0 auto;
`;

const BackgroundImg = styled.div`
  width: 320px;
  height: 200px;
  /* border: 2px solid #f25343; */
  border-radius: 8px;
  background: #ffffff;
  margin-bottom: 5px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;