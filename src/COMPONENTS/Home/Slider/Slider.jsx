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
                document.querySelector(".active")?.classList.remove("active");
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
      <div className="slide hot" >slide 1</div>
      <div className="slide sex">slide 2</div>
      <div className="slide big">slide 3</div>
      <div className="slide tit">slide 3</div>
      <div className="slide thickcock">slide 3</div>
     </div>
     <div className="pagination">
      <span className="pagehot active"></span>
      <span className="pagesex"></span>
      <span className="pagebig"></span>
      <span className="pagetit"></span>
      <span className="pagethickcock"></span>
     </div>
    </>)
}