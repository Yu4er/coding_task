import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { CurrencyHeader } from "../../components/CurrencyHeader";
import { CurrencyFooter } from "../../components/CurrencyFooter";

import { currencyStore } from "../../store/CurrencyStore";

import { Container } from "../../Main.style";
import { WaitingContainer } from "./CatCurrency.style";

export const CatCurrency = observer(() => {
	const { pending, currencyList, error } = currencyStore;

	const currencyName = currencyStore.getCurrencyName();

	useEffect(() => {
		currencyStore.fetchCurrencyList();
	}, []);

	if (pending) {
		return <WaitingContainer>Loading...</WaitingContainer>;
	}

	if (currencyList.length === 0) {
		return <WaitingContainer>No data</WaitingContainer>;
	}

	if (error) {
		return <WaitingContainer>{error}</WaitingContainer>;
	}

	return (
		<Container>
			<CurrencyHeader />
			<CurrencyFooter name={currencyName} />
		</Container>
	);
});
