import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo,smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc,setVideoSrc]=useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet =() => {
    if (window.innerWidth < 760 ){
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }
  }
  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrcSet);
    return()=> {
      window.removeEventListener('resize',handleVideoSrcSet)
    }
  },[])
  useGSAP(()=>{
    gsap.to("#hero",{
      opacity:1,
      delay:1.5,
  });
  gsap.to("#cta",{
    opacity:1,
    delay:2,
    y:-50,

  });

},[]);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex justify-center items-center flex-col">
      <p id= 'hero'className="text-center font-semibold text-3xl text-gray opacity-0  max-md:mb-10">iPhone 15 Pro </p>
      <div className="md:w-10/12 w-9/12">
      <video className="pointer-events-none"autoPlay muted playsInline={true} key={videoSrc}>
        <source src={videoSrc} type="video/mp4"/>
      </video>
      </div>
      </div>
      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
      <a className="px-4 py-1 rounded-2xl bg-blue my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue">Buy</a>
      <p className="font-normal text-xl">From $199/month or $999</p>
      </div>

    </section>
  )
}

export default Hero