"use client"
import { useState } from "react";
import IterSelect from "./iterSelect.js"
import IterTable from "./iterTable.js"
import IterImg from "./iterImg.js"


export default function IterBox(){
    const [simuA, setSimuA] = useState('')
    const [simuB, setSimuB] = useState('')
    const [dim, setDim] = useState('')
    return (
        <div className="m-2">
            <IterSelect simuA={simuA} setSimuA={setSimuA} 
            simuB={simuB} setSimuB={setSimuB}
            dim={dim} setDim={setDim}/>
			<IterImg simuA={simuA} simuB={simuB} dim={dim}/>
			<IterTable simuA={simuA} simuB={simuB}/>
        </div>
    )
}