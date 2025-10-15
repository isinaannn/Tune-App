
import Header from './Header/Header'
import TrendingList from './TrendingList/TrendningList'
import RecommendationList from './Recommendation/RecommendationList'
import RecentList from './RecentList/RecentList'
import YearSongs from './YearList/YearSongs'
import NewArrival from './NewArrival/NewArrival'

export default function Home() {


    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>

            <div className='header' style={{ position: "sticky", top: "32px" }}>
                <Header />

            </div>

            <div className='Trending'>
                <h3 style={{ textAlign: "start", fontSize: "25px", marginBottom: "20px" }}>Trending songs</h3>
                <TrendingList />
                <TrendingList />
                <TrendingList />
                <TrendingList />

                <div className='link' style={{ display: "flex", justifyContent: "end", paddingTop: "8px", paddingRight: "5px" }}>
                    <a href="" style={{ color: "#B6B6B6", fontWeight: "300", fontWeight: "500" }}>View all</a>
                </div>
            </div>

            <div className='Recommendation' style={{ width: "100%" }}>
                <h3 style={{ textAlign: "start", fontSize: "25px", marginBottom: "20px" }}>Recommended to you</h3>
                <div className='recommendation-card-slider-container' style={{ overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none", }}>
                    <div className='recommendation-card-wrapper' style={{ display: "flex", gap: "30px", paddingRight: "30px", width: "100%" }}>

                        <RecommendationList />
                        <RecommendationList />
                        <RecommendationList />
                        <RecommendationList />
                    </div>
                </div>
            </div>


            <div className='Recents' style={{ width: "100%" }}>
                <h3 style={{ textAlign: "start", fontSize: "25px" }}>Recents</h3>

                <div className='recent-slider-container' style={{ marginTop: "20px", overflow: "hidden", width: "100%", overflowX: "scroll", overflowY: "hidden", overscrollBehavior: "smooth", scrollbarWidth: "none" }}>
                    <div className='recent-card-slider' style={{ display: "flex", gap: "30px" }}>
                        <RecentList />
                        <RecentList />
                        <RecentList />
                        <RecentList />
                    </div>
                </div>
            </div>


            <div className='2025-songs' style={{ width: "100%" }}>
                <h3 style={{ textAlign: "start" }}>2025 songs</h3>

                <div className='songs-slider-container' style={{ marginTop: "20px", overflow: 'hidden', width: "100%", overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none" }}>
                    <div className='songs-card-wrapper' style={{ display: "flex", gap: "30px" }}>
                        <YearSongs />
                        <YearSongs />
                        <YearSongs />
                        <YearSongs />

                    </div>
                </div>

            </div>



            <div className='arrival-songs-container' style={{ width: "100%" }}>
                <h3 style={{ textAlign: "start" }}>New arrival songs</h3>

                <div className='new-arrival-slider-container' style={{ marginTop: "20px", overflow: "hidden", width: "100%", overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none" }}>
                    <div className='new-arrival-songs-card-wrapper' style={{ display: "flex", gap: "30px" }}>
                        <NewArrival />
                        <NewArrival />
                        <NewArrival />
                        <NewArrival />
                    </div>
                </div>
            </div>
        </div>
    )
}