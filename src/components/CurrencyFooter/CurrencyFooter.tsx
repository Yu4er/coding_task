import { Footer } from "./CurrencyFooter.style";

interface ICurrencyNameProps {
	name: string;
}

export const CurrencyFooter = ({ name }: ICurrencyNameProps) => {
	return <Footer>{name}</Footer>;
};
