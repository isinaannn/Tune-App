import Banner from "./Banner/Banner"
import Buttons from "./ButtonGrp/Buttons"
import TrendingList from "../Home/TrendingList/TrendningList"
import RecommendationList from "../Home/Recommendation/RecommendationList"
import lokahImg from './Banner/wp15786026-lokah-wallpapers.jpg'

export default function PlayingAlbum(){


    return (
          <div style={{position: "relative",width: "100%", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
                <div style={{width: "100%",height: "400px",position: "absolute",zIndex: "-3",color: "red"}}>
                   <img src={lokahImg} alt="" style={{boxShadow: "0 0 10px 5px rgba(62, 38, 18, 0.5) "}} /> 
                     <div className="imgOverlay" style={{position: "absolute",top: "0px",height: "400px",width: "100%",background: "linear-gradient(1deg, rgba(22, 11, 2, 1) 0%, rgba(146, 109, 74, 0) 50%, rgba(38, 27, 17, 1) 100%)"}}>

                </div>
                </div>
              
            <Banner />
            <Buttons />
            <div className="trending-container" style={{width: "100%",display: "flex",flexDirection: "column",gap: "5px",paddingLeft: "30px",paddingRight: "30px"}}>
            <TrendingList />
            <TrendingList />
            <TrendingList />
            <TrendingList />
            </div>

            <div style={{marginTop: "20px",marginBottom: "20px",width: "100%", display: "flex",flexDirection: "column",gap: "20px",paddingBottom: "100px"}}>
                <div style={{width:"100%",paddingLeft: "30px"}}>
                    <h3 style={{textAlign: "start",fontSize: "25px",fontWeight: "500"}}>You might also like</h3>
                </div>
              <div className='new-arrival-slider-container' style={{  overflow: "hidden", width: "100%", overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none" ,display: "flex", gap: "30px" ,paddingLeft: "30px",paddingRight: "30px"}}>
                        <RecommendationList />
                        <RecommendationList />
                        <RecommendationList />
                        <RecommendationList />
                
                
                    </div>
            </div>

        </div>
    )
}