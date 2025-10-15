import { useRef } from 'react';
import './Avatar.css'
const Avatar = ()=>{
    const open = useRef(false);
    function getdrwrPos(){
        const elem = document.querySelector(".drwr");
        const elem2 = document.querySelector(".avtr");
        const elem3 = document.querySelector(".avtrcontainer");
       if(open.current){
           console.log(elem.offsetLeft);
        elem2.style.transform = `translate(${0}px,${0}px)`;
        elem.style.transform = `translate(${100}%,${0})`;
        open.current=false;
       }else{
         console.log(elem.offsetLeft);
        elem2.style.transform = `translate(${elem.offsetLeft+elem3.offsetLeft}px,${elem3.offsetTop}px)`;
        elem.style.transform = `translate(${0}px,${0}px)`;
        open.current=true;
       }
       
    }
    return (
        <div className="avtranddrwr">
            <div className="avtr"  onClick={getdrwrPos}>A</div>
            <div className="drwr">
                <div className="userDetails">
                    <div className="avtrcontainer"></div>
                    <div className="name">Aravindan</div>
                </div>
            </div>
        </div>
    )
}

export default Avatar