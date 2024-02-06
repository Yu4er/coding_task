import styled from "@emotion/styled";
import arrow from '../../assets/chevron-down.svg';

import { COLOR, FONT } from "../../styles/styles.style";

interface IDropDownListProps {
	isOpen: boolean;
}

const DropdownContainer = styled.div<IDropDownListProps>`
	display:flex;
	flex-direction:column;
	gap:6px;
	position:relative;
	&::after{
		content:'';
		position:absolute;
		background: no-repeat url('${arrow}') center/13px;
		width:20px;
		height:20px;
		inset: 4px 9px 0 auto;
		margin: auto;
		transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
	}
`

const InputText = styled.input`
	width:100%;
	max-width:181px;
	min-height:43px;
	border: 1px solid ${COLOR.grayBorder};
	position:relative;
	border-radius:10px;
	cursor:pointer;
	padding: 10px 32px 10px 15px;
	font-size:${FONT.size18};
	font-weight:200;
	text-transform:uppercase;
	background-color:transparent;
	z-index:33;
	&:focus,
	&:hover {
		cursor:pointer;
	}

`
const DropdownList = styled.ul<IDropDownListProps>`
	display:${props => props.isOpen ? 'flex' : 'none'};
	flex-direction:column;
	border: 1px solid ${COLOR.grayBorder};
	position:absolute;
	inset: 50px auto auto 0;
	list-style:none;
	width:100%;
	height:100%;
	background-color:${COLOR.white};
	min-height:171px;
	overflow-y:scroll;
	scrollbar-color: ${COLOR.scrollBar} ${COLOR.white};
  scrollbar-width: thin;
`

const ListItem = styled.li`
	min-height:43px;
	padding:10px 15px;
	font-size:${FONT.size18};
	font-weight:${FONT.weightThin};
	text-transform:uppercase;
	cursor:pointer;
	&:hover {
		background-color:${COLOR.selected};
	}
`

export 	{InputText, DropdownContainer, DropdownList, ListItem}