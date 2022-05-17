import {useState} from 'react'
import img from '../assets/images/maxence.png'
import imgClicked from '../assets/images/maxence-glasses.png'


const ClickablePicture = () => {

    const [isClicked, setIsClicked] = useState(false)

    const togglePicture = () => {
        setIsClicked((prevClicked) => !prevClicked)
    }


  return (
    <div>
    <img src={isClicked ? imgClicked : img} alt="" onClick={togglePicture}/>
    </div>
  )
}

export default ClickablePicture