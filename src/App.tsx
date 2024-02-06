import { Global } from "@emotion/react";
import { CatCurrency } from "./pages/CatCurrency";

import { appStyles } from "./App.style";

function App() {
	return (
		<div className="App">
			<Global styles={appStyles} />
			<CatCurrency />
		</div>
	);
}

export { App };
