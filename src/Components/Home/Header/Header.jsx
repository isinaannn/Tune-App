import './Header.css'
export default function Header(){


    return (
        <div className="header-container">
            <ul className="ul">
                <li className='song'>Song</li>
                <li>Podcast</li>
            </ul>
            <div className='icon'>
                <img className='header-icon' src="src/Components/Home/Header/shuffle_14506030.png" alt="" />
            </div>
        </div>
    )
}