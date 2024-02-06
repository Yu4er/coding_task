import styled from "@emotion/styled";

const Container = styled.div`
	width:100%;
	max-width:680px;
	margin:0 auto;
	min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const Main = styled.main`
	flex: 1 1 auto;
`

export {Container, Main}