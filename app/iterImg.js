import { useContext } from 'react'
import { PathContext } from './page'
import Image from 'next/image'
import { promises as fs } from 'fs'

export default async function IterImg(){
    const file = await fs.readFile(process.cwd() + '/app/data.json', 'utf8');
    const data = JSON.parse(file);
    return (
        <>{data.name}
        </>
        // <Image
        //     fill={true}
        //     src={"/KA\ racing/"+"KA1.jpg"}
        //     alt="lalalala"
        // />
    )
}
