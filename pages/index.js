import Image from 'next/image'
import Keypad from '../components/keypad';
import Screen from '../components/screen';
import Stickers from '../components/stickers';
import styles from '../styles/Home.module.css'
import { useEffect, useState, useRef } from 'react';


export default function Home() {
  const [image, updateImage] = useState("0001")
  const [keypad, updateKeyPad] = useState([["4",false], ["5",false], ["6",false], ["R",false], ["T",false], ["Y",false], 
  ["F",false], ["G",false], ["H",false], ["V",false], ["B",false], ["N",false]])
  const [text, updateText] = useState("")
  const div = useRef()
  const frameselect = (key)=>{
    switch (key){
      case "4":
        updateImage("0002")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[0][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"4").substring(previousText.length-2)})
        break
      case "5":
        updateImage("0003")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[1][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"5").substring(previousText.length-2)})
        break
      case "6":
        updateImage("0004")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[2][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"6").substring(previousText.length-2)})
        break
      case "r":
        updateImage("0005")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[3][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"r").substring(previousText.length-2)})
        break
      case "t":
        updateImage("0006")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[4][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"t").substring(previousText.length-2)})
        break
      case "y":
        updateImage("0007")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[5][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"y").substring(previousText.length-2)})
        break
      case "f":
        updateImage("0008")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[6][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"f").substring(previousText.length-2)})
        break
      case "g":
        updateImage("0009")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[7][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"g").substring(previousText.length-2)})
        break
      case "h":
        updateImage("0010")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[8][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"h").substring(previousText.length-2)})
        break
      case "v":
        updateImage("0011")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[9][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"v").substring(previousText.length-2)})
        break
      case "b":
        updateImage("0012")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[10][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"b").substring(previousText.length-2)})
        break
      case "n":
        updateImage("0013")
        console.log(text)
        updateKeyPad((previousKeyPad)=>{previousKeyPad[11][1]=true;return previousKeyPad})
        updateText((previousText)=>{return (previousText+"n").substring(previousText.length-2)})
        break
      case "Enter":
        updateImage("0014")
      default:
        updateImage("0001")
        updateKeyPad((previousKeyPad)=>{return Array.from(previousKeyPad, (e,i)=>{return [e[0],false]})})
        break
    }
  }
  
  const framedeselect = (event)=>{
    updateImage("0001")
    updateKeyPad((previousKeyPad)=>{return Array.from(previousKeyPad, (e,i)=>{return [e[0],false]})})
  }
  
  useEffect(() => {
    div.current.focus()
  }, [])


  return (
    <div className = {styles.bg} ref={div} tabIndex='0' onKeyDown={(event)=>{frameselect(event.key)}} onKeyUp={framedeselect}>
      <div className= {styles.container}>
        <Image
          src = {`/frames/${image}.png`}
          className='custom-img'
          quality='75'
          priority={true}
          height='1080'
          width='1920'
        />  
        {/* <Keypad keypad={keypad} onMouseDown={frameselect} onMouseUp={framedeselect}/>
        <Screen text={text}/> */}
        {/* <Stickers number={0}/> */}
      </div>
      
    </div>
  )
}
