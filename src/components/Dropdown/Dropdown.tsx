import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { currencyStore } from "../../store/CurrencyStore";

import {
	InputText,
	DropdownContainer,
	DropdownList,
	ListItem,
} from "./Dropdown.style";

export const Dropdown = observer(() => {
	const { currencyList, currentId } = currencyStore;
	const [isOpen, setOpen] = useState(false);

	function toggleOpenList() {
		setOpen((prev) => !prev);
	}
	function handleChange(e: React.MouseEvent<HTMLLIElement>) {
		currencyStore.currentId = (e.target as HTMLLIElement).textContent ?? "";
		toggleOpenList();
	}

	return (
		<DropdownContainer isOpen={isOpen}>
			<InputText value={currentId} onClick={toggleOpenList} readOnly />
			<DropdownList isOpen={isOpen}>
				{currencyList.map((item) => (
					<ListItem onClick={handleChange} key={item.id}>
						{item.id}
					</ListItem>
				))}
			</DropdownList>
		</DropdownContainer>
	);
});
