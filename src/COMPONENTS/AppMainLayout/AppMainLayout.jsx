import { useRef } from "react";
import { Outlet, Routes, Route } from "react-router";
import Avatar from "../Avatar/Avataar"
import Draawer from "../Drawer/Draawer";
import BottomNav from "../BottomNav/BottomNav";
import MusicPlaying from "../MusicPlaying/MusicPlaying";
import Home from '../Home/Home';
import Library from "../Library/Library";
import Search from "../Search/Search";
import PlayingAlbum from "../PlayingAlbum/PlayingAlbum";



const MainLayout = [
    {
        path: "/",
        // index: true,
      
        element: <>
            <Avatar Drawer={Draawer}/>
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