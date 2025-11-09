import { useEffect, useRef, useState } from 'react'
import './Slider.css'
import Avatar from 'react-avatar';
export default function Slider(){
      const [count, setCount] = useState(0);
 const Root = useRef();

 useEffect(()=>{

  setTimeout(()=>{
      const observer = new IntersectionObserver((entries,observer)=>{
        entries.forEach(entry=>{
                if(entry.intersectionRatio==1.0){
                const page = document.querySelector(`.page${entry.target.classList[1]}`);
                console.log(`page${entry.target.classList[1]}`)
                document.querySelector(".active")?.classList.remove("active")
                page.classList.add("active");

                }
        });
      },{ 
        root:Root.current,
        threshold:1.0,
      });
      const target = Root.current.querySelectorAll("div");
   target.forEach(t=>{
    observer.observe(t);
   })
  },500);
 },[])

  return (
    <>
     <div className="slider"  ref={Root}>
      <div className="slide one" >slide 1</div>
      <div className="slide two">slide 2</div>
      <div className="slide three">slide 3</div>
      <div className="slide four">slide 3</div>
      <div className="slide five">slide 3</div>
     </div>
     <div className="pagination">
      <span className="pageone active"></span>
      <span className="pagetwo"></span>
      <span className="pagethree"></span>
      <span className="pagefour"></span>
      <span className="pagefive"></span>
     </div>
    </>)
}