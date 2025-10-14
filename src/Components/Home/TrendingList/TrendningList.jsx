import './TrendingList.css'
export default function TrendingList() {

    return (
        <div style={{ width: "100%" }}>

            <div className='trendinglist-container'>

                <div className="song-card">

                    <div className='song-image'>
                        <img src="src/Components/Home/TrendingList/just take a breath.jpeg" alt="" />
                    </div>

                    <div className='song-details'>
                        <h3>Song name</h3>
                        <p>artist name - movie name</p>
                    </div>

                    <div className='add-button'>

                        <img src="src/Components/Home/TrendingList/icons8-add-100 (1).png" alt="" className='add-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}