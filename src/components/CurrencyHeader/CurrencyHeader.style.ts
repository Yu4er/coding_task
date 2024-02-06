import styled from "@emotion/styled";
import kittenIMG from '../../assets/Kitten.png';

import { COLOR, FONT } from "../../styles/styles.style";

const Header = styled.header`
	min-height:185px;
	display:flex;
	align-items:flex-start;
	flex-direction:column;
	justify-items:center;
	flex: 1 1 auto;
	position:relative;
	padding:0 20px 20px 20px;
	@media (max-width:517px) {
		align-items:center;
	}
	@media (min-width:517px) {
		&:after{
			content:'';
			position:absolute;
			background:no-repeat url('${kittenIMG}') center/225px;
			width:225px;
			height:415px;
			inset: 0 0 auto auto;
			margin:0 0 auto auto;
			z-index:-1;
		}
		
	}
`

const Description = styled.div`
	display:flex;
	align-items: center;
	gap: 20px;
	padding-top:30px;
`

const Title = styled.h1`
	color:${COLOR.black};
	font-size:96px;
	text-transform:uppercase;
`
const Subtitle = styled.p`
	color:${COLOR.black};
	font-size:${FONT.size20};
	max-width:88px;
	font-weight:${FONT.weightThin};
`

export {Header, Description, Title, Subtitle}