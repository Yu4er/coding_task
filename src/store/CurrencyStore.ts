import { makeAutoObservable, runInAction } from "mobx";
import { getCurrencies } from "../services/getCurrencies";

import type { ICurrency } from "../interfaces/currency";
import type { AxiosError } from "axios";


class Currency {
	private _pending = false;
	private _currencyList:ICurrency[] = [];
	private _currentId: string = '';
	private _error: string | undefined = undefined;

	constructor() {
		makeAutoObservable(this);
	}


	public get error() {
		return this._error;
	}

	public get pending() {
		return this._pending;
	}

	public get currencyList() {
		return this._currencyList;
	}

	public get currentId() {
		return this._currentId;
	}

	public getCurrencyName(): string {
		return this._currencyList.find((item)=>	item.id === this._currentId)?.name ?? ""
	}

	public set currentId(id:string) {
		runInAction(()=>{
			this._currentId = id;
		})
		
	}

	public setError(text?:string) {
		runInAction(() => {
			this._error = text;
		});
	}

	public set pending(status:boolean) {
		runInAction(() => {
			this._pending = status;
		});
	}

	public set currencyList(data:ICurrency[]) {
		runInAction(() => {
			this._currencyList = data;
		}); 
	}

	public async fetchCurrencyList() {
		this.pending = true;
		this.setError();

		try {
				const response = await getCurrencies;
				this.currencyList = response.data.data;
				this.currentId = response.data.data[0].id
		} catch (error:unknown) {
			const {message} = error as AxiosError;
			this.setError(message)
		}
		finally {
			this.pending = false;
		}
	}
}

export const currencyStore = new Currency();
