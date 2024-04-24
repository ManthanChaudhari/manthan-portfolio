import React from 'react'
import Card from './Card'
import ecomProject from "../assets/Ecom.png"
import videoStream from "../assets/youtube.png"
import mela from "../assets/mela.png"
function Projects() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4'>
      <Card projectTitle={"Ecom"} link="https://ecom-lake-five.vercel.app" projectImage={ecomProject} description="Ecommerce website which uses DummyJSON API to fetch data, implements an 'add to cart' feature for items, storing selections in localStorage. It also offers a filtering functionality." techstack={"React, Redux, Tailwind Css"}/>
      <Card projectTitle={"Youtube"} link="https://manthanchaudhari.github.io/videoStream/" projectImage={videoStream} description="Video streaming platform which fetches data from an API to display video information on a webpage. Users can add their favourite videos to a list, toggle between dark and light themes for optimal viewing, and utilize a search bar to find their favourite videos." techstack={"HTML5, CSS3,Javascript"}/>
      <Card projectTitle={"Mela"} link="https://chat-web-app-alpha.vercel.app" projectImage={mela} description="It uses WebSocket for real-time communication and integrates Appwrite for secure authentication. Users can seamlessly join or initiate meetings with friends for interactive collaboration." techstack={"React, Redux, Tailwind Css, Websocket, Appwrite"}/>
    </div>
  )
}

export default Projects
