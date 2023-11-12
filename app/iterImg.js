"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Box } from '@mui/system'
import "yet-another-react-lightbox/styles.css"
import Lightbox from "yet-another-react-lightbox"
import Inline from "yet-another-react-lightbox/plugins/inline"
import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import { promises as fs } from 'fs'

const Img = ({src,toggle,update,isZoom,id,pos}) => {
    return (
        <Lightbox
          slides={[{src}]}
          plugins={[Inline,Zoom]}
          render={{
            buttonPrev:()=>null,
            buttonNext:()=>null,
            buttonZoom:isZoom?undefined:()=>null
            }}
          on={{
            view:update(id),
            click:toggle(true)}}
          carousel={{
            finite:true,
            padding: 0,
            spacing: 0,
            imageFit: "cover",
          }}
          inline={{
            style: {
              width: "100%",
              maxWidth: "600px",
              aspectRatio: "3 / 2",
              margin: "1 auto",
            },
          }}
        />
    )
}
const Imglist = ({sildes,isZoom}) => {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)
  
    const toggleOpen = state => () => {setOpen(state)}
  
    const handleClick = (current) =>()=> {
        console.log("jizz")
        setIndex(current)
    }
    const updateIndex = ({index:current})=>setIndex(current)
    const slides = [{src:"/test/x/1.jpg"},{src:"/test/x/2.jpg"}]
    return (
      <>
        <Img
            update={handleClick}
            isZoom={isZoom}
            toggle={toggleOpen}
            id={0}
            src="/test/x/1.jpg"/>
        <Img
            update={handleClick}
            isZoom={isZoom}
            toggle={toggleOpen}
            id={1}
            src="/test/x/2.jpg"/>
        <Lightbox
          plugins={[Zoom]}
          open={open}
          close={toggleOpen(false)}
          index={index}
          slides={slides}
          on={{ view: updateIndex }}
          animation={{ fade: 0 }}
          controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        />
      </>
    );
  }

export default function IterImg({simuA,simuB,dim,isZoom}){
    return (
        <Box sx={{maxWidth:700}}>
            <Imglist isZoom={isZoom}/>
        {/* <Image
            width={400}
            height={400}
            src={simuA?`/${simuA}/${pos}/${dim}.jpg`:''}
            alt="lalalala"
            layout='responsive'
        />
        <Image
            width={400}
            height={400}
            src={simuB?`/${simuB}/${pos}/${dim}.jpg`:""}
            alt="lalalala"
        /> */}
        </Box>
    )
}
