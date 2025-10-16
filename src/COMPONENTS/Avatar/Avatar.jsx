import { useRef } from 'react';
import './Avatar.css'
const Avatar = () => {
    const open = useRef(false);
    function getdrwrPos() {
        const elem = document.querySelector(".drwr");
        const elem2 = document.querySelector(".avtr");
        const elem3 = document.querySelector(".avtrcontainer");
        const elem4 = document.querySelector(".bottomNav");
        const elem5 = document.querySelector(".musicPlay");
        elem5.classList.toggle("hidemusicPlay");
        if (open.current) {
            console.log(elem.offsetLeft, elem3.offsetWidth);
            elem2.style.transform = `translate(${0}px,${0}px) scale(${1},${1})`;
            elem.style.transform = `translate(${100}%,${0})`;
            elem4.style.transform = `translateY(${0})`;
            elem.style.opacity = '0';
            open.current = false;
        } else {
            console.log(elem.offsetLeft);
            elem2.style.transform = `translate(${elem.offsetLeft + elem3.offsetLeft + (elem3.offsetWidth / 4)}px,${elem3.offsetTop + elem3.offsetWidth / 4}px) scale(${2},${2})`;
            elem.style.transform = `translate(${0}px,${0}px)`;
            elem4.style.transform = `translateY(${100}%)`;
            elem.style.opacity = `1`;
            open.current = true;
        }

    }
    return (
        <div className="avtranddrwr">
            <div className="avtr" onClick={getdrwrPos}>A</div>
            <div className="drwr">
                <div className="userDetails">
                    <div className="avtrcontainer"></div>
                    <div className="name">Aravindan</div>
                </div>
            </div>
            <div className="musicPlay"></div>
            <div className="bottomNav"></div>
        </div>
    )
}

export default Avatar