import { useEffect, useState} from 'react';
import Image from 'next/image'
export default function Keypad(props) {
    return(
        <div>
            {
            Array.from(props.keypad, (e,i)=>{
            let x  = (i%3)*28 + 1125
            let y = (Math.floor(i/3))*33 + 412
            return <div key = {`div keypad ${e[0]}`} style={{position: 'absolute', left: x, top: y+(e[1]?1:0)}}><Image key={`keypad ${e[0]}`} src = {`/text/${e[0]}${e[1]?'_glow':''}.png`} width='20' height='20' quality='10' priority={true} onMouseDown={(event)=>{props.onMouseDown(`${e[0]}`.toLowerCase())}} onMouseUp={props.onMouseUp} /></div>
            })
            }
        </div>
        
    )
}