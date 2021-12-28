import Image from 'next/image'
import Keypad from '../components/keypad';
import styles from '../styles/Home.module.css'
import { useEffect, useState, useRef } from 'react';


export default function Home() {
  const [image, updateImage] = useState("0001")
  const [keypad, updateKeyPad] = useState([["4",false], ["5",false], ["6",false], ["R",false], ["T",false], ["Y",false], 
  ["F",false], ["G",false], ["H",false], ["V",false], ["B",false], ["N",false]])
  const div = useRef()
  const frameselect = (event)=>{
    console.log(event)
    switch (event.key){
      case "4":
        updateImage("0002")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[0][1]=true;return previousKeyPad})
        break
      case "5":
        updateImage("0003")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[1][1]=true;return previousKeyPad})
        break
      case "6":
        updateImage("0004")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[2][1]=true;return previousKeyPad})
        break
      case "r":
        updateImage("0005")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[3][1]=true;return previousKeyPad})
        break
      case "t":
        updateImage("0006")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[4][1]=true;return previousKeyPad})
        break
      case "y":
        updateImage("0007")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[5][1]=true;return previousKeyPad})
        break
      case "f":
        updateImage("0008")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[6][1]=true;return previousKeyPad})
        break
      case "g":
        updateImage("0009")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[7][1]=true;return previousKeyPad})
        break
      case "h":
        updateImage("0010")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[8][1]=true;return previousKeyPad})
        break
      case "v":
        updateImage("0011")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[9][1]=true;return previousKeyPad})
        break
      case "b":
        updateImage("0012")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[10][1]=true;return previousKeyPad})
        break
      case "n":
        updateImage("0013")
        updateKeyPad((previousKeyPad)=>{previousKeyPad[11][1]=true;return previousKeyPad})
        break
      default:
        updateImage("0001")
        updateKeyPad((previousKeyPad)=>{return Array.from(previousKeyPad, (e,i)=>{return [e[0],false]})})
        break
    }
  }
  
  const framedeselect = (event)=>{
    console.log(event)
    updateImage("0001")
    updateKeyPad((previousKeyPad)=>{return Array.from(previousKeyPad, (e,i)=>{return [e[0],false]})})
  }
  
  useEffect(() => {
    div.current.focus()
  }, [])


  return (
    <div className = {styles.bg} ref={div} tabIndex='0' onKeyDown={frameselect} onKeyUp={framedeselect}>
      <Image
        src = {`/frames/${image}.png`}
        layout='fill'
        objectFit='contain'
        objectPosition='center'
        className='custom-img'
        quality='100'
        priority
      />  
      <Keypad keypad={keypad}/>
    </div>
  )
}
