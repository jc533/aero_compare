"use client"
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import data from "./data.json"
// import { promises as fs } from 'fs'


export default async function Iterselect() {
	const [simu, setSimu] = useState('')
	const [dim, setDim] = useState('')
	// const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    // const data = JSON.parse(file);
	return (
		<Box>
			<SimuSelect val={simu} setVal={setSimu}/>
			<DimSelect val={dim} setVal={setDim}/>
		</Box>
	)
}
const SimuSelect = ({val,setVal}) => {
	return (
		<BasicSelect 
			val={val} setVal={setVal} 
			name="simulation" labelId="simuSelect">
			<MenuItem value={1}>0</MenuItem>
			<MenuItem value={2}>1</MenuItem>
			<MenuItem value={3}>2</MenuItem>
		</BasicSelect>
	)
}
const DimSelect = ({val,setVal}) => {
	return (
		<BasicSelect 
			val={val} setVal={setVal}
			name="dimension" labelId="dimSelect">
			<MenuItem value={"x"}>x</MenuItem>
			<MenuItem value={"y"}>y</MenuItem>
			<MenuItem value={"z"}>z</MenuItem>
		</BasicSelect>
	)
}

const BasicSelect = ({children,labelId,name,val,setVal}) => {

	const handleChange = (event) => {
		setVal(event.target.value);
	}

	return (
		<FormControl sx={{ m: 1, minWidth: 150 }}>
		<InputLabel>{name}</InputLabel>
			<Select
				labelId={labelId}
				value={val}
				label={name}
				onChange={handleChange}
			>
				{children}
			</Select>
		</FormControl>
	)
}