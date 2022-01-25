import React, {useState} from "react";
import styled from "styled-components";

import { Alert, Button, Img, Text, Wrap, Input } from "../common/index"

import back from "../../img/login/i_back_w.png"
import google from "../../img/login/i_google_b.png"
import facebook from "../../img/login/i_facebook_c.png"


const Step2 = (props) => {

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
							_onClick={()=>{props.setTap(1)}}
						/>
						<Text size="26px" spacing=".0074em">
							회원가입
						</Text>
					</span>
					
					<Text size="18px" spacing=".0208em">개인회원</Text>
				</Wrap>

				{/* 바디 */}
				<Wrap
					direction="column"
				>
					<Text div size="12px" color="#AAA" spacing=".0208em" margin="0 0 10px">소셜 회원가입</Text>

					<Wrap
						direction="column"
						gridGap="10px"
						gap="10px"
						margin="0 0 26px"
					>
						{/* 구글 회원가입 */}
						<Button 
							flex
							width="320px"
							height="40px"
							bg="#333"
						>
							<Img src={google} alt="google"     
								width="30px"
								height="30px"
								margin="5px"
							/>
							<Text flex size="14px" color="#AAA">
								구글로 회원가입
							</Text>
						</Button>

						{/* 페이스북 회원가입 */}
						<Button 
							flex
							width="320px"
							height="40px"
							bg="#333"
						>
							<Img src={facebook} alt="facebook"     
								width="30px"
								height="30px"
								margin="5px"
							/>
							<Text flex size="14px" color="#AAA">
								페이스북으로 회원가입
							</Text>
						</Button>

					</Wrap>

					<Text div size="12px" color="#AAA" spacing=".0208em" margin="0 0 10px">일반 회원가입</Text>
					<Wrap
						direction="row"
						content="space-between"
						items="center"
						width="320px"
						height="50px"
					>
						<Input placeholder="이메일(아이디) 입력" color="#FFF" />
						<Button
							flex
							innerBtn
							width="70px"
							height="50px"
							bg="#767676"
							color="#fff"
						>
							중복체크
						</Button>
					</Wrap>

					<Text margin="20px 0 95px 6px" color="#AAA" indent>
						*가입완료 후 이메일에서 본인인증을 완료해야 <br /> 서비스를 이용하실 수 있습니다.
					</Text>

					<Button
						size="16px"
						width="320px"
						height="50px"
						color="#d8d8d8"
						bg="#767676"
					>
						다음
					</Button>
					
				</Wrap>

			</Container>
			{ ready && <Alert bg="#650aa8">준비중입니다.</Alert> }
		</AppLogin>

	)
}

export default Step2;

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