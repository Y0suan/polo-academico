 import { Flayer } from "@/components/home";
 import { Noticias } from "@/components/noticias";
 import { Becas } from "@/components/becas";



export default function Home() {
	return (
		<section className=" flayer">
		<Flayer/>
		<Noticias/>
		<Becas/>
		</section>
	);
}
