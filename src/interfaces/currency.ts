interface ICurrency {
	id: string,
	name: string,
	min_size: string
}
interface ICurrencyResponse {
	data: ICurrency[]
}

export type {ICurrency, ICurrencyResponse}