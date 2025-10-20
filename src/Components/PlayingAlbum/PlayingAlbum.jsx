import Banner from "./Banner/Banner"
import Buttons from "./ButtonGrp/Buttons"
import TrendingList from "../Home/TrendingList/TrendningList"
import RecommendationList from "../Home/Recommendation/RecommendationList"


export default function PlayingAlbum(){


    return (
          <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "30px", alignItems: "center" }}>

            <Banner />
            <Buttons />
            <div className="trending-container" style={{width: "100%",display: "flex",flexDirection: "column",gap: "5px",paddingLeft: "30px",paddingRight: "30px"}}>
            <TrendingList />
            <TrendingList />
            <TrendingList />
            <TrendingList />
            </div>

            <div style={{width: "100%", display: "flex",flexDirection: "column",gap: "20px",paddingBottom: "100px"}}>
                <div style={{width:"100%",paddingLeft: "30px"}}>
                    <h3 style={{textAlign: "start",fontSize: "25px",fontWeight: "500"}}>You might also like</h3>
                </div>
              <div className='new-arrival-slider-container' style={{ marginTop: "0px", overflow: "hidden", width: "100%", overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none" ,display: "flex", gap: "30px" ,paddingLeft: "30px",paddingRight: "30px"}}>
                        <RecommendationList />
                        <RecommendationList />
                        <RecommendationList />
                        <RecommendationList />
                
                
                    </div>
            </div>

        </div>
    )
}