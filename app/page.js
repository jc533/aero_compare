"use client"
import Navbar from "./navbar.js"
import IterSelect from "./iterSelect.js"
import IterTable from "./iterTable.js"
import IterImg from "./iterImg.js"
import PathSelect from "./pathSelect.js"
import { useState } from "react"
import { createContext } from "react"

export const PathContext = createContext(null)
export default function Home() {
	const [path,setPath] = useState("./")

	return (
		<PathContext.Provider value={path}>
			<main className="">
				<Navbar/>
				<PathSelect setPath={setPath}/>
				<IterSelect/>
				<IterImg/>
				<IterTable/>
			</main>
		</PathContext.Provider>
	)
}
