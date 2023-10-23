"use client"
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { PathContext } from './page';


export default function PathSelect(props){
    const path = useContext(PathContext)
    const selectPath = () => {
        let p = prompt("enter file path")
        props.setPath(p)
    }
    return (
        <Stack sx={{m:2}} spacing={2} direction="row">
            <Button
                component="label"
                varinat="contained"
                className='bg-red-300'
            >
                select path
                <input 
                    className='hidden' 
                    type="button" //webkitdirectory="" 
                    onClick={selectPath}/>
            </Button>
            <Typography className='text-lg'>current path:{path}
            </Typography>
        </Stack>
    )
}