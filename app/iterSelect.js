"use client"
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import data from "./data.json"


export default function Iterselect({simuA,setSimuA,simuB,setSimuB,dim,setDim,toggleZoom,pos,setPos}) {
    useEffect(()=>{
        if (simuA == simuB && (simuA||simuB)){
            // alert("are u sure u want to compare the same simu?")
        }
    })
    return (
        <Box>
            <SimuSelect num="1" val={simuA} setVal={setSimuA}/>
            <SimuSelect num="2" val={simuB} setVal={setSimuB}/>
            <DimSelect val={dim} setVal={setDim}/>
            <PlaneSelect val={pos} setVal={setPos}/>
            <Button
                sx={{m:1}}
                variant="contained"
                className="bg-indigo-600"
                size="large"
                onClick={toggleZoom}>
                    toggle zoom
            </Button>
        </Box>
    )
}
const PlaneSelect = ({val,setVal}) => {
    const options = data.plane.map(obj=>{
        return <MenuItem key={obj} value={obj}>{obj}</MenuItem>
    })
    return (
        <BasicSelect 
            val={val} setVal={setVal} 
            name="plane" labelId="planeSelect">
            {options}
        </BasicSelect>
    )
}
const SimuSelect = ({val,setVal,num}) => {
    const options = data.simu.map(obj=>{
        return <MenuItem key={obj} value={obj}>{obj}</MenuItem>
    })
    return (
        <BasicSelect 
            val={val} setVal={setVal} 
            name={`simulation${num}`} labelId="simuSelect">
            {options}
        </BasicSelect>
    )
}
const DimSelect = ({val,setVal}) => {
    const options = data.dim.map(obj=>{
        return <MenuItem key={obj} value={obj}>{obj}</MenuItem>
    })
    return (
        <BasicSelect 
            val={val} setVal={setVal}
            name="dimension" labelId="dimSelect">
            {options}
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