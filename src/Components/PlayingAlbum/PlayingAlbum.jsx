import Banner from "./Banner/Banner"
import Buttons from "./ButtonGrp/Buttons"
import TrendingList from "../Home/TrendingList/TrendningList"
import RecommendationList from "../Home/Recommendation/RecommendationList"


export default function PlayingAlbum(){


    return (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "15px", alignItems: "center" }}>

            <Banner />
            <Buttons />
            <div>
            <TrendingList />
            <TrendingList />
            <TrendingList />
            <TrendingList />
            </div>
                <div style={{width:"100%"}}>
                    <h3 style={{textAlign: "start"}}>You might also like</h3>
                </div>
              <div className='new-arrival-slider-container' style={{ marginTop: "20px", overflow: "hidden", width: "100%", overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none" }}>
                    <div className='new-arrival-songs-card-wrapper' style={{ display: "flex", gap: "30px" }}>
                        <RecommendationList />
                        <RecommendationList />
                        <RecommendationList />
                        <RecommendationList />
                
                        </div>
                    </div>

        </div>
    )
}