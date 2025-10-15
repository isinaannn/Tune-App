import './Header.css'
export default function Header(){


    return (
        <div className="header-container">
          <div className='song-container'>
            <p className='song'>Song</p>
          </div>
          <div className='podcast-container'>
            <p className='podcast'>Podcast</p>
          </div>
            <div className='icon-container'>
                <img className='shuffle-icon' src="src/Components/Home/Header/shuffle_14506030.png" alt="" />
            </div>
        </div>
    )
}