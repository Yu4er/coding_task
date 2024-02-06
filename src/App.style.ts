import {  css } from "@emotion/react";

import { COLOR } from "./styles/styles.style";


const appStyles = css`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: "Kreon", serif;
	}
	body {
		background-color: ${COLOR.white};
	}
	button {
		border: none;
		font-family: inherit;
	}
	.App {
		height: 100vh;
	}
`

export {appStyles}