import { useRef } from 'react';
import './Avatar.css'
import Avatar from 'react-avatar';
import Draawer from '../Drawer/Draawer';
import BottomNav from '../BottomNav/BottomNav'
const Avataar = () => {
    const open = useRef(false);
    function onDrawerOpenandClose() {
        const drwr = document.querySelector(".drawer-nav");
        const drwrOverlay = document.querySelector(".overlay");
        const avtr = document.querySelector(".avtr");
        const avtrIndrwr = document.querySelector(".avtrcontainer");
        const bottomNav = document.querySelector(".bottomNav");
        // const playingMusic = document.querySelector(".musicPlay");
        // playingMusic.classList.toggle("hidemusicPlay");
        console.log("avatar",avtr.offsetLeft,avtr.offsetTop);
        console.log("avatar container",avtrIndrwr.offsetLeft,avtrIndrwr.offsetTop);
        console.log("Drawer",drwr.offsetLeft,drwr.offsetTop);
        if (open.current) {
            console.log("close")
            avtr.style.transform = `translate(${0}px,${0}px) scale(${1},${1})`;
            drwr.style.transform = `translate(${100}%,${0})`;
            bottomNav.style.transform = `translateY(${0})`;
            drwr.style.opacity = '0';
            drwrOverlay.style.display="none";
            open.current = false;
            
        } else {
            console.log("open")
            avtr.style.transform = `translate(${drwr.offsetLeft + avtrIndrwr.offsetLeft - avtr.offsetLeft -15}px,${avtrIndrwr.offsetTop + drwr.offsetTop - avtr.offsetTop - 13}px) scale(${1.5},${1.5})`;
            drwr.style.transform = `translate(${0}px,${0}px)`;
            bottomNav.style.transform = `translateY(${100}%)`;
            drwr.style.opacity = `1`;
            drwrOverlay.style.display="block";
            open.current = true;
        }

    }
    const url = "https://images.fineartamerica.com/images-medium-large-5/buffalo-profile-thomas-preston.jpg"
    return (
        <div className="avtranddrwr">
            <Avatar className="avtr" name="Jurrasic Park ghh bhi"size={40} src={url} maxInitials={2} style={{
                
            }} round onClick={onDrawerOpenandClose} />
            <Draawer closeDrawer={onDrawerOpenandClose} />
            {/* <div className="musicPlay"></div> */}
           <BottomNav />
        </div>
    )
}

export default Avataar