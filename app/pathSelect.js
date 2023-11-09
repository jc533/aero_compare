"use client"
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';


export default function PathSelect(props){
    const selectPath = () => {
        let p = prompt("enter file path")
    }
    return (
        <Stack sx={{m:2}} spacing={2} direction="row">
            <Button
                component="label"
                variant="contained"
                className="bg-indigo-600"
            >
                select path
                <input 
                    className='hidden' 
                    type="button" //webkitdirectory="" 
                    onClick={selectPath}/>
            </Button>
            <Typography className='text-lg'>
                current path:{path}
            </Typography>
        </Stack>
    )
}