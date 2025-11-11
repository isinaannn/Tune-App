import { Outlet, Routes, Route } from "react-router";
import Avatar from "../Avatar/Avataar"
import Drawer from "../Drawer/Draawer";
import BottomNav from "../BottomNav/BottomNav";
import MusicPlaying from "../MusicPlaying/MusicPlaying";
import Home from '../Home/Home';
import Library from "../Library/Library";
import Search from "../Search/Search";
import PlayingAlbum from "../PlayingAlbum/PlayingAlbum";

let draweropen=false;
function DrawerControlFunction(){
   
           return ()=> {
                const drwr = document.querySelector(".drawer-nav");
                const drwrOverlay = document.querySelector(".overlay");
                const avtr = document.querySelector(".avtr");
                const avtrIndrwr = document.querySelector(".avtrcontainer");
                const bottomNav = document.querySelector(".bottomNav");
                const playingMusic = document.querySelector(".musicPlay");
                playingMusic.classList.toggle("hidemusicPlay");
                console.log("avatar", avtr.offsetLeft, avtr.offsetTop);
                console.log("avatar container", avtrIndrwr.offsetLeft, avtrIndrwr.offsetTop);
                console.log("Drawer", drwr.offsetLeft, drwr.offsetTop);
                if (draweropen) {
                    console.log("close")
                    avtr.style.transform = `translate(${0}px,${0}px) scale(${1},${1})`;
                    drwr.style.transform = `translate(${100}%,${0})`;
                    bottomNav.style.transform = `translateY(${0})`;
                    drwr.style.opacity = '0';
                    drwrOverlay.style.display = "none";
                    draweropen = false;

                } else {
                   
                    avtr.style.transform = `translate(${drwr.offsetLeft + avtrIndrwr.offsetLeft - avtr.offsetLeft - 15}px,${avtrIndrwr.offsetTop + drwr.offsetTop - avtr.offsetTop - 13}px) scale(${1.5},${1.5})`;
                    drwr.style.transform = `translate(${0}px,${0}px)`;
                    bottomNav.style.transform = `translateY(${100}%)`;
                    drwr.style.opacity = `1`;
                    drwrOverlay.style.display = "block";
                    draweropen = true;
                }

            }

            
}



const MainLayout = [
    {
        path: "/",
        // index: true,
      
        element: <>
            <Avatar openandCloseDrawer={DrawerControlFunction}/>
             <Drawer closeDrawer={DrawerControlFunction}/>
            <BottomNav />
            <MusicPlaying />
            <Outlet />
        </>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/library",
                element: <Library />
            },
        ]
    },
    {
        //Album which comes inside the Main Layout
        path: '/playing-album', element: <>
            <PlayingAlbum />
            <BottomNav />

        </>
    }
]


function AppMainLayiut() {
    return (
        <Routes>
            <Route path="" index element={<>
                <Avatar />
                <Draawer />
                <BottomNav />
                <MusicPlaying />
                <Outlet />

            </>}>
                <Route path="" index element={<Home />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/library" element={<Library />}></Route>
            </Route>
        </Routes>
    )
}

export default MainLayout;