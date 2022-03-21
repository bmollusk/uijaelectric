import { useEffect, useState} from 'react';
import Image from 'next/image'
export default function Stickers(props) {
    let stickernames = [
        ["4GH", "4RT", "5BB", "5RR", "6YG", "6VF"],
    ]
    return(
        <div>
            {
            Array.from(stickernames[props.number], (e,i)=>{
            let x  = (i%2)*185 + 713
            let y = (Math.floor(i/2))*165 + 140
            return <div key = {`div sticker ${i}`} style={{position: 'absolute', left: x, top: y}}>
                    <Image key={`sticker ${i}`} src = {`/stickers/${props.number}/${i}_${e}.png`} width='200' height='200' quality='50' priority={true} />
                    {
                        Array.from(e.split(""), (f,j)=>{
                        let xl  = (j%3)*9 + x*0.05 + 43
                        let yl =  y*-0.0035 + 160
                        return <div key = {`labels div ${j}`} style={{position: 'absolute', left: xl, top: yl, width:"10%"} }><Image key={`labels ${j}`} src = {`/labels/${f}.png`} width='15' height='15' quality='1' priority={true} /></div>
                        })
                    }
                </div>
            })
            }
        </div>
        
    )
}