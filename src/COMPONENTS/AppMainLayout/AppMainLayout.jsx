import { Outlet, Routes, Route } from "react-router";
import Avatar from "../Avatar/Avataar"
import Draawer from "../Drawer/Draawer";
import BottomNav from "../BottomNav/BottomNav";
import MusicPlaying from "../MusicPlaying/MusicPlaying";
import Home from '../Home/Home';
import Library from "../Library/Library";
import Search from "../Search/Search";




export default function AppMainLayout(){
    return (
        <Routes>
            <Route path="" index element={<>
              <Avatar/>
              <Draawer/>
              <BottomNav/>
              <MusicPlaying/>
              <Outlet/>
              
            </>}>
                <Route path="" index element={<Home/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
                <Route path="/library" element={<Library/>}></Route>
            </Route>
        </Routes>
    )
}