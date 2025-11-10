import HeaderLibrary from './Header/Header'
import Button from './Tabs/Button'
import LikedSongs from './LikedSongs/LikedSongs'
import LibraryCard from './LibraryPlaylist/LibraryCard'

import image1 from './image1.jpeg'
import image2 from './image2.jpeg'
import image3 from './image3.jpeg'
import artist1 from './artist1.jpeg'
import artist2 from './artist2.jpeg'
import artist3 from './artist3.jpeg'
import dataIcon from './swap.png'

export default function Library(){


    return (
         <div style={{height: "100%", width: "100%", display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>

     


       <div className='library-header' style={{ width: "100%" ,paddingLeft: "30px",paddingRight: "30px",}}>
        <HeaderLibrary />
      </div>

      <div className='tabs' style={{width: "100%", display: "flex", flexDirection: "row", gap: "10px", marginTop: "20px",paddingLeft: "30px",paddingRight: "30px" }}>
        <Button name={"Artist"} />
        <Button name={"Playlist"} />
        <Button name={"Community"} />
        <div className='net-icon'>
          <img src={dataIcon} alt="" style={{ height: "20px", width: "20px", marginLeft: "40px" }} />
        </div>
      </div>

      <div className='liked-songs-container' style={{width: "100%", marginTop: "20px",display: "flex",paddingLeft: "30px",paddingRight: "30px" }}>
        <LikedSongs />
      </div>

        <div className='playlist-slider-container' style={{width: "100%", marginTop: "20px",paddingLeft: "30px",paddingRight :"30px" , overflow: "hidden", height: '100%', overflowY: "scroll", overflowX: "hidden", scrollbarWidth: "none", scrollBehavior: "smooth", display: "flex", flexDirection: "column", gap: "30px"  }}>
            <LibraryCard name={"Feel good"} caption={<>10 songs <br/> 20 songs</>} category={"Playlist"} src={image3} />
            <LibraryCard name={"Trip song"} caption={<>20 songs<br/> 2 person</>} category={"Playlist"} src={image1} />
            <LibraryCard name={"Dj song"} caption={"10 songs"} category={"Playlist"} src={image2} />
            <LibraryCard type={"artist"} name={"The Weeknd"} caption={"30 songs"} category={"Singer"} src={artist1} />
            <LibraryCard name={"Feel good"} caption={"10 songs"} category={"Playlist"} src={image3} />
            <LibraryCard type={"artist"} name={"Billie eilish"} caption={"20 songs"} category={"Singer"} src={artist2} />
            <LibraryCard type={"artist"} name={"The Weeknd"} caption={"30 songs"} category={"Singer/music director"} src={artist1} />
       
      </div>
 

    </div>
    )
}