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
                    <div className="drawer-nav-menu">
                        <div className="drawer-nav-menu-item">
                            <div className="drawer-nav-menu-item-logo">
                                S
                            </div>
                            <div className="drawer-nav-menu-item-name">
                                Settings
                            </div>
                            <div className="drawer-nav-menu-item-arrow">
                                ▶️
                            </div>
                        </div>
                        <div className="drawer-nav-menu-item">
                            <div className="drawer-nav-menu-item-logo">
                                P
                            </div>
                            <div className="drawer-nav-menu-item-name">
                                Premium
                            </div>
                            <div className="drawer-nav-menu-item-arrow">
                                ▶️
                            </div>
                        </div>
                        <div className="drawer-nav-menu-item">
                            <div className="drawer-nav-menu-item-logo">
                                A
                            </div>
                            <div className="drawer-nav-menu-item-name">
                                Account
                            </div>
                            <div className="drawer-nav-menu-item-arrow">
                                ▶️
                            </div>
                        </div>
                        <div className="drawer-nav-menu-item">
                            <div className="drawer-nav-menu-item-logo">
                                L
                            </div>
                            <div className="drawer-nav-menu-item-name">
                                Logout
                            </div>
                            <div className="drawer-nav-menu-item-arrow">
                                ▶️
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>

    )
}