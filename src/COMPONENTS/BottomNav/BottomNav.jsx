
import LibraryCard from '../Library/LibraryPlaylist/LibraryCard';
import AddCard from './AddCard/AddCard';
import './BottomNav.css'
import { Link } from 'react-router';
export default function BottomNav() {
    function clickadd() {
        const root = document.querySelector(':root');
        root.style.setProperty("--btm-nav", "300px");
        const overlay = document.querySelector('.add-cmpnnt-ovrly');
        overlay.style.display = "block";
        console.log("opened bottom drawer");
    }

    function closeadd() {
        const root = document.documentElement;
        const overlay = document.querySelector('.add-cmpnnt-ovrly');
        overlay.style.display = "none";
        root.style.setProperty("--btm-nav", "0px");
    }
    return (
        <div className="bottomNav">
            <div className="add-component">
                <div className='add-scroll'>
                    <AddCard name={'Community'} detail={'Craete playlist with friends'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="#ebc16d" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                        </svg>
                    </AddCard>
                    <AddCard name={'Playlist'} detail={'Grouping songs or podcast'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="#ebc16d" class="bi bi-headphones" viewBox="0 0 16 16">
                            <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                        </svg>
                    </AddCard>
                    <AddCard name={'Collab'} detail={'Combining playlist'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" fill="#ebc16d" class="bi bi-headphones" viewBox="0 0 16 16">
                            <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
                        </svg>
                        
                    </AddCard>

                </div>

                <div className="add-cmpnnt-ovrly" onClick={closeadd}>

                </div>
            </div>
            <Link to={'/'}><button type='button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#969696" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
            </button></Link>
            <Link to={'/search'}><button type='button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#969696" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </button></Link>
            <button onClick={clickadd}>
                <svg fill="#969696" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="bi" width="24px" height="24px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z" /></svg></button>
            <Link to={'/library'}> <button type='button'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#969696" class="bi bi-file-music-fill" viewBox="0 0 16 16">
                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-.5 4.11v1.8l-2.5.5v5.09c0 .495-.301.883-.662 1.123C7.974 12.866 7.499 13 7 13s-.974-.134-1.338-.377C5.302 12.383 5 11.995 5 11.5s.301-.883.662-1.123C6.026 10.134 6.501 10 7 10c.356 0 .7.068 1 .196V4.41a1 1 0 0 1 .804-.98l1.5-.3a1 1 0 0 1 1.196.98" />
                </svg>
            </button></Link>
        </div>
    )
}