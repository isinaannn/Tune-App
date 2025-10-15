import HeaderLibrary from './Header/Header'
import Button from './Tabs/Button'
import LikedSongs from './LikedSongs/LikedSongs'
import LibraryCard from './LibraryPlaylist/LibraryCard'

export default function Library(){


    return (
         <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>

     


       <div className='library-header' style={{ width: "100%" }}>
        <HeaderLibrary />
      </div>

      <div className='tabs' style={{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "20px" }}>
        <Button name={"Artist"} />
        <Button name={"Playlist"} />
        <Button name={"Community"} />
        <div className='net-icon'>
          <img src="src/Components/Library/Tabs/swap.png" alt="" style={{ height: "20px", width: "20px", marginLeft: "40px" }} />
        </div>
      </div>

      <div className='liked-songs-container' style={{ marginTop: "20px" }}>
        <LikedSongs />
      </div>

      <div className='Library-playlist-container' style={{ marginTop: "20px" }}>
        <div className='playlist-slider-container' style={{ overflow: "hidden", height: "380px", overflowY: "scroll", overflowX: "hidden", scrollbarWidth: "none", scrollBehavior: "smooth" }}>
          <div className='playlist-card-wrapper' style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <LibraryCard name={"Feel good"} caption={"10 songs"} category={"Playlist"} src={"src/Components/Library/LibraryPlaylist/94ae9f12-ffda-42c4-a49f-e252d7e2bff3.jpeg"} />
            <LibraryCard name={"Trip song"} caption={"20 songs. 2 person"} category={"Playlist"} src={"src/Components/Library/LibraryPlaylist/download.jpeg"} />
            <LibraryCard name={"Dj song"} caption={"10 songs"} category={"Playlist"} src={"src/Components/Library/LibraryPlaylist/download (1).jpeg"} />
            <LibraryCard type={"artist"} name={"The Weeknd"} caption={"30 songs"} category={"Singer"} src={"src/Components/Library/LibraryPlaylist/3739458a-d3c4-43b3-b46b-a7421eb12e66.jpeg"} />
            <LibraryCard name={"Feel good"} caption={"10 songs"} category={"Playlist"} src={"src/Components/Library/LibraryPlaylist/94ae9f12-ffda-42c4-a49f-e252d7e2bff3.jpeg"} />
            <LibraryCard type={"artist"} name={"Billie eilish"} caption={"20 songs"} category={"Singer"} src={"src/Components/Library/LibraryPlaylist/b23b6f26-fd93-4413-ad79-e0458e83e33a.jpeg"} />
            <LibraryCard type={"artist"} name={"The Weeknd"} caption={"30 songs"} category={"Singer/music director"} src={"src/Components/Library/LibraryPlaylist/3739458a-d3c4-43b3-b46b-a7421eb12e66.jpeg"} />
            
          </div>
        </div>
      </div>
 

    </div>
    )
}