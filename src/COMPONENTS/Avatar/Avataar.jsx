import { useRef } from 'react';
import './Avatar.css'
import Avatar from 'react-avatar';
const Avataar = () => {
    const open = useRef(false);
    function onDrawerOpenandClose() {
        const drwr = document.querySelector(".drwr");
        const avtr = document.querySelector(".avtr");
        const avtrIndrwr = document.querySelector(".avtrcontainer");
        const bottomNav = document.querySelector(".bottomNav");
        const playingMusic = document.querySelector(".musicPlay");
        playingMusic.classList.toggle("hidemusicPlay");
        console.log("avatar",avtr.offsetLeft,avtr.offsetTop);
        console.log("avatar container",avtrIndrwr.offsetLeft,avtrIndrwr.offsetTop);
        console.log("Drawer",drwr.offsetLeft,drwr.offsetTop);
        if (open.current) {
            console.log(drwr.offsetLeft, avtrIndrwr.offsetWidth);
            avtr.style.transform = `translate(${0}px,${0}px) scale(${1},${1})`;
            drwr.style.transform = `translate(${100}%,${0})`;
            bottomNav.style.transform = `translateY(${0})`;
            drwr.style.opacity = '0';
            open.current = false;
        } else {
            console.log(drwr.offsetLeft);
            avtr.style.transform = `translate(${drwr.offsetLeft + avtrIndrwr.offsetLeft+avtrIndrwr.offsetWidth-5}px,${avtrIndrwr.offsetTop + drwr.offsetTop+avtrIndrwr.offsetWidth-5}px) scale(${2},${2})`;
            drwr.style.transform = `translate(${0}px,${0}px)`;
            bottomNav.style.transform = `translateY(${100}%)`;
            drwr.style.opacity = `1`;
            open.current = true;
        }

    }
    const url = "https://images.fineartamerica.com/images-medium-large-5/buffalo-profile-thomas-preston.jpg"
    return (
        <div className="avtranddrwr">
            <Avatar className="avtr" name="Jurrasic Park ghh bhi"size={25} src={url} maxInitials={2} round onClick={onDrawerOpenandClose} />
            <div className="drwr">
                <div className="userDetails">
                    <div className="avtrcontainer"></div>
                    <div className="name">Aravindan</div>
                    <div className="name">arav@email</div>
                </div>
            </div>
            <div className="musicPlay"></div>
            <div className="bottomNav"></div>
        </div>
    )
}

export default Avataar