
import SearchHeader from './SearchHeader/SearchHeader'
import SearchBar from './SearchBar/SEarchBar'
import SearchTabs from './SearchTabs/SearchTabs'
import SongCard from './SongCards/SongCard'

export default function Search() {


    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center"}}>
            <div style={{ width: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "20px", position: "fixed", zIndex: "1" ,backgroundColor: "black"}}>
                <SearchHeader />
                <SearchBar />
                <SearchTabs />
            </div>
            <div className='song-cards-container' style={{ marginTop: "200px",padding: "20px", width: "100%", display: "grid", gap: "15px", gridTemplateColumns: "auto auto" }}>
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
                <SongCard />
            </div>


        </div>
    )
}