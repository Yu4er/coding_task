import styled from "@emotion/styled";
import { COLOR, FONT } from "../../styles/styles.style";

const Footer = styled.footer`
	background-color: ${COLOR.black};
	color:${COLOR.white};
	text-align:center;
	font-size:${FONT.size64};
	font-weight: ${FONT.weightRegular};
	padding: 43px 15px 64px;
	line-height:normal;
	@media(min-width:667px) {
		font-size: ${FONT.size96};
	}
`

export {Footer}