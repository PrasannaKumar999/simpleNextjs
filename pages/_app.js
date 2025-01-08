import { CartProvider } from "@/context/cartContext";
import Applayout from "@/layouts/applayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<CartProvider>
			<Applayout>
				<Component {...pageProps} />
			</Applayout>
		</CartProvider>
	);
}
