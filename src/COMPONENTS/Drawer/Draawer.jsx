import { useState } from 'react'
import './Drawer.css'

export default function Draawer(props) {
   
    return (
        <div className="drawer">
            <div className="overlay" onClick={props.closeDrawer}></div>
            <div className='drawer-nav'>
                <div className="userDetails">
                    <div className="avtrcontainer"></div>
                    <div className="name"><h3>Aravindan</h3></div>
                    <div className="name">arav@email</div>
                </div>
            </div>
        </div>

    )
}