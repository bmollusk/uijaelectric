import { useEffect, useState} from 'react';
import Image from 'next/image'
export default function Screen(props) {
    return(
        <div>
            {
            Array.from(props.text.split(""), (e,i)=>{
            let x  = (i%3)*28 + 1113
            let y = (Math.floor(i/3))*33 + 339
            return <div key = {`screen div ${i}`} style={{position: 'absolute', left: x, top: y}}><Image key={`screen ${i}`} src = {`/screen/${e}.png`} width='40' height='40' quality='5' priority={true} /></div>
            })
            }
        </div>
        
    )
}