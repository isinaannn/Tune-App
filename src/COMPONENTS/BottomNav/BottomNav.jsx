import './BottomNav.css'
export default function BottomNav() {
    function clickadd(){
        const root = document.querySelector(':root');
        root.style.setProperty("--btm-nav","300px");
         const overlay = document.querySelector('.add-cmpnnt-ovrly');
         overlay.style.display="block";
        console.log("opened bottom drawer");
    }

    function closeadd(){
         const root = document.documentElement;
         const overlay = document.querySelector('.add-cmpnnt-ovrly');
         overlay.style.display="none";
        root.style.setProperty("--btm-nav","0px");
    }
    return (
        <div className="bottomNav">
<div className="add-component">
    <div className="add-cmpnnt-ovrly" onClick={closeadd}></div>
</div>
            <button type='button'>H</button>
            <button type='button'>S</button>
            <button  onClick={clickadd}>Ad</button>
            <button type='button'>L</button>
        </div>
    )
}