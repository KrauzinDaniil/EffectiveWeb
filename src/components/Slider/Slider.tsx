import { useState } from "react";
import classes from './Slider.module.css'
import './Slider.module.css'
interface Slide {
    image: string;
    name: string;
    role: string;
    comment: string;
  }
  
  interface SliderProps {
    slides: Slide[];
  }   



  const Slider: React.FC<SliderProps> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide + 1);
      };
    
      const prevSlide = () => {
        setCurrentSlide(currentSlide - 1);
      };
     

    return (<aside>
        <div className={classes.decorElemTwo}><img src="src/assets/element.svg"/></div> 
        <div className={classes.wrapper}>
        <div className={classes.decorElem}><img src="src/assets/element.svg"/></div> 
       
            <h2>What our customer are saying </h2>
            <div className={classes.divider}></div>
        
        <div className={classes.sliders}>
            <div className= {classes.innerWrapper}>
           <div className= {classes.circleClip}> <img src={slides[currentSlide].image} alt="" className= {classes.imagePhoto} /></div>
            <div className= {classes.name}>{slides[currentSlide].name}
                <div className={classes.role}>{slides[currentSlide].role}</div>
            </div>
            </div>
            <div className= {classes.commentary}>{slides[currentSlide].comment}</div>


        </div>
        </div>
        
        <div className= {classes.sliderSelector}>
           <div className={currentSlide == 0 ? classes.inactive : classes.active} onClick= {currentSlide == 0 ?  () => {} : prevSlide  }> <img src="/src/assets/sliderArrowLeft.png" alt="" /></div>

         <div className= {classes.buttons}>
            {slides.map((slide, index) => ( 
                <div  className = {index == currentSlide ? classes.activeButton : classes.inactiveButton} onClick={() => setCurrentSlide(index)}/>
            ))}

         </div>
         <div className = {currentSlide == slides.length - 1 ? classes.inactive : classes.active} onClick= {currentSlide == slides.length - 1 ?  () => {} : nextSlide } ><img src="/src/assets/sliderArrowRight.png" alt="" /></div>


        </div>


    </aside>)
}


const SliderPanel: React.FC = () => {
    const text: string = "Our dedicated patient engagement app and " + 
    "web portal allow you to access information instantaneously (no tedeous form, long calls, " + 
    "or administrative hassle) and securely";
    const slides: Slide[] = [
      { image: "/src/assets/man.png",  name: "Edward Newgate", role: "Founder Circle", "comment": text },
      { image: "/src/assets/man.png",  name: "Edward Oldgate", role: "Founder Triangle", "comment": text  },
      { image: "/src/assets/man.png",  name: "Edward Billgate", role: "Founder Rectangle", "comment": text },
      { image: "/src/assets/man.png",  name: "Edward Callgate", role: "Founder Square", "comment": text },
    ];
  return (<div>
         <Slider slides = {slides}/>
  </div> )
}

export default SliderPanel 