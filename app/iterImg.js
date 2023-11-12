import { useContext } from 'react'
import Image from 'next/image'
import { Box } from '@mui/system'
// import { promises as fs } from 'fs'

export default function IterImg({simuA,simuB,dim,pos}){
    // const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    // const data = JSON.parse(file);
    return (
        <Box>
        <Image
            width={400}
            height={400}
            src={simuA?`/${simuA}/${pos}/${dim}.jpg`:''}
            alt="lalalala"
        />
        <br/>
        <Image
            width={400}
            height={400}
            src={simuB?`/${simuB}/${pos}/${dim}.jpg`:""}
            alt="lalalala"
        />
        </Box>
    )
}
