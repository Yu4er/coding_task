import axios from "axios";
import { currenciesAPI } from "../api/api";

import type { ICurrencyResponse } from "../interfaces/currency";

const getCurrencies = axios.get<ICurrencyResponse>(currenciesAPI)

export {getCurrencies}
