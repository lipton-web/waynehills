import React from "react";
import styled from "styled-components";

import bg from "./img/bg.mp4"

const Main = () => {
	return (
		<>
			{/* 영상 */}
			<video src={bg} autoPlay> 
			</video>
		</>
	)
}

export default Main;