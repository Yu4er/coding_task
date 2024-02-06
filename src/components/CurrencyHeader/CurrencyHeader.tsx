import { Dropdown } from "../Dropdown";

import { Description, Header, Subtitle, Title } from "./CurrencyHeader.style";

export const CurrencyHeader = () => {
	return (
		<Header>
			<Description>
				<Title>Cat</Title>
				<Subtitle>currencies academic terms</Subtitle>
			</Description>
			<Dropdown />
		</Header>
	);
};
