"use client"
import { useState } from 'react'
import Image from 'next/image'
import { Box } from '@mui/system'
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import "yet-another-react-lightbox/styles.css"
import Lightbox from "yet-another-react-lightbox"
import Inline from "yet-another-react-lightbox/plugins/inline"
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Typography from '@mui/material/Typography';

const Img = ({src,toggle,update,isZoom,id}) => {
    console.log(src.src)
    return (
        <div className={src.src?' ':"hidden"}>
        <Typography variant='h5'>{src.src}</Typography>
        <Lightbox
            slides={[src]}
            plugins={[Inline,Zoom]}
            render={{
                buttonPrev:()=>null,
                buttonNext:()=>null,
                buttonZoom:isZoom?undefined:()=>null
            }}
            on={{
                view:update(id),
                click:!isZoom?toggle(true):()=>{}}}
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
                //   margin: "1 auto",
                },
            }}
        />
        </div>
    )
}
const Imglist = ({imglist,isZoom}) => {
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0)
  
    const toggleOpen = state => () => {setOpen(state)}
    const handleClick = (current) =>()=> setIndex(current)
    const updateIndex = ({index:current})=>setIndex(current)
    return (
      <>
        <Img
            update={handleClick}
            isZoom={isZoom}
            toggle={toggleOpen}
            id={0}
            src={imglist.A}/>
        <Img
            update={handleClick}
            isZoom={isZoom}
            toggle={toggleOpen}
            id={1}
            src={imglist.B}/>
        <Lightbox
          plugins={[Zoom]}
          open={open}
          close={toggleOpen(false)}
          index={index}
          slides={[imglist.A,imglist.B]}
          on={{ view: updateIndex }}
          animation={{ fade: 0 }}
          controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
        />
      </>
    );
  }
const CompareImg = ({imglist}) => {
    const style = {
        "--divider-width": "1px",
        "--divider-color": "#000000",
        "--default-handle-opacity": 0,
        maxWidth:"600px", margin:'0 auto'
      }
    return (
        <div>
            <Typography className='text-center' variant='h5'>{imglist.A.src}</Typography>
            <ImgComparisonSlider
             className='flex items-center justify-center'
             direction="vertical" style={style}>
                <img slot="first" src={imglist.A.src} />
                <img slot="second"  src={imglist.B.src} />
            </ImgComparisonSlider>
            <Typography className='text-center' variant='h5'>{imglist.B.src}</Typography>
        </div>
    )
}


export default function IterImg({simuA,simuB,dim,isZoom,pos,isCom}){
    const imglist = {
        "A":{src:simuA&&pos&&dim?`/${simuA}/${pos}/${dim}.jpg`:null},
        "B":{src:simuB&&pos&&dim?`/${simuB}/${pos}/${dim}.jpg`:null}
    }
    return (
        <>
        <div className='w-full grid lg:grid-cols-2'>
            <Imglist imglist={imglist} isZoom={isZoom}/>
        </div>
        {isCom ? <CompareImg imglist={imglist}/> : null}
        </>
    )
}
