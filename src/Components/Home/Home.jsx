
import Header from './Header/Header'
import TrendingList from './TrendingList/TrendningList'
import RecommendationList from './Recommendation/RecommendationList'
import RecentList from './RecentList/RecentList'
import YearSongs from './YearList/YearSongs'
import NewArrival from './NewArrival/NewArrival'

export default function Home() {


    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>

            <div className='header' style={{ position: "sticky", top: "20px" }}>
                <Header />

            </div>

            <div className='Trending' style={{width: "100%"}}>
                <h3 style={{ textAlign: "start", fontSize: "25px", marginBottom: "20px" ,marginLeft: "30px",fontWeight: "500"}}>Trending songs</h3>
               <div style={{width: "100%",display: "flex",flexDirection: "column",gap: "5px",paddingLeft: "30px",paddingRight: "30px"}}>
                <TrendingList />
                <TrendingList />
                <TrendingList />
                <TrendingList />
                </div>

                <div className='link' style={{ display: "flex", justifyContent: "end", paddingTop: "10px", paddingRight: "25px" }}>
                    <a href="" style={{ color: "#B6B6B6", fontWeight: "300", fontWeight: "500" }}>View all</a>
                </div>
            </div>

            <div className='Recommendation' style={{ width: "100%" }}>
                <h3 style={{ textAlign: "start", fontSize: "25px", marginBottom: "20px",marginLeft: "30px",fontWeight: "500" }}>Recommended to you</h3>
                <div className='recommendation-card-slider-container' style={{ overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none", display: "flex", gap: "30px", paddingLeft: "30px", width: "100%" ,paddingRight: "30px" }}>
                    
                        <RecommendationList />
                        <RecommendationList />
                        <RecommendationList />
                        <RecommendationList />
                   
                </div>
            </div>


            <div className='Recents' style={{ width: "100%" }}>
                <h3 style={{ textAlign: "start", fontSize: "25px",marginLeft: "30px",fontWeight: "500" }}>Recents</h3>

                <div className='recent-slider-container' style={{ marginTop: "20px", overflow: "hidden", width: "100%", overflowX: "scroll", overflowY: "hidden", overscrollBehavior: "smooth", scrollbarWidth: "none",display: "flex", gap: "30px", paddingLeft: "30px" }}>
                        <RecentList />
                        <RecentList />
                        <RecentList />
                        <RecentList />
                    
                </div>
            </div>


            <div className='2025-songs' style={{ width: "100%" }}>
                <h3 style={{ textAlign: "start",marginLeft: "30px",fontSize: "25px",fontWeight: "500" }}>2025 songs</h3>

                <div className='songs-slider-container' style={{ marginTop: "20px", overflow: 'hidden', width: "100%", overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none",display: "flex", gap: "30px" ,paddingLeft: "30px",paddingRight: "30px" }}>
                        <YearSongs />
                        <YearSongs />
                        <YearSongs />
                        <YearSongs />


                </div>

            </div>



            <div className='arrival-songs-container' style={{ width: "100%" ,marginBottom: "100px"}}>
                <h3 style={{ textAlign: "start",marginLeft: "30px",fontSize: "25px",fontWeight: "500" }}>New arrival songs</h3>

                <div className='new-arrival-slider-container' style={{ marginTop: "20px", overflow: "hidden", width: "100%", overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none",display: "flex", gap: "30px" ,paddingLeft: "30px",paddingRight: "30px" }}>
                        <NewArrival />
                        <NewArrival />
                        <NewArrival />
                        <NewArrival />
                
                </div>
            </div>
        </div>
    )
}