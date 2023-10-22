import Navbar from "./navbar.js"
import IterSelect from "./iterSelect.js"
import IterTable from "./iterTable.js"
import IterImg from "./iterImg.js"
import PathSelect from "./pathSelect.js"


export default function Home() {
	return (
		<main className="">
			<Navbar/>
			<PathSelect/>
			<IterSelect/>
			<IterImg/>
			<IterTable/>
		</main>
	)
}
