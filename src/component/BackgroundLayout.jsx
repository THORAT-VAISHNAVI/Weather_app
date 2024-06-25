// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { useStateContext } from '../context'
import Clear from '../assets/img/Clear.jpg'
import Cloudy from '../assets/img/cloudy.jpg'
import Fog from '../assets/img/fog.jpg'
import Rainy from '../assets/img/rain.jpg'
import Snow from '../assets/img/snow.jpg'
import Stormy from '../assets/img/storm.jpg'
import Sunny from '../assets/img/sunny.jpg'

const BackgroundLayout = () => {
  const {weather} = useStateContext()
  const [image, setImage] = useState(Clear)
  useEffect(() => {
    if(weather.conditions){
      let imageString = weather.conditions
      if(imageString.toLowerCase().includes('clear')){
        setImage(Clear)
      }else if(imageString.toLowerCase().includes('cloud')){
        setImage(Cloudy)
      }else if(imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')){
        setImage(Rainy)
      }else if(imageString.toLowerCase().includes('fog')){
        setImage(Fog)
      }else if(imageString.toLowerCase().includes('snow')){
        setImage(Snow)
      }else if(imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('storm')){
        setImage(Stormy)
      }else if(imageString.toLowerCase().includes('sunny')){
        setImage(Sunny)
      }

    }
  },[weather])
  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]'/>
  )
}

export default BackgroundLayout
