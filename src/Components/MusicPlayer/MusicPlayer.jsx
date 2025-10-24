import PlayerHeader from "./PlayerHeader/PlayerHeader"
import MusicBanner from "./MusicBanner/MusicBanner"
import ButtonGroup from "./ButtonGroup/ButtonGroup"
import ProgressBar from "./ProgressBar/ProgressBar"
import Lyrics from "./Lyrics/Lyrics"
import TrendingList from "../Home/TrendingList/TrendningList"
import RecommendationList from "../Home/Recommendation/RecommendationList"

export default function MusicPlayer() {



  return (

    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
      <div className="header-container" style={{ width: "100%" }}>
        <PlayerHeader />
      </div>

      <div className="banner-container" style={{ width: "100%", paddingTop: "50px" }}>
        <MusicBanner />
      </div>

      <div className="buttons-container" style={{ width: "100%", paddingLeft: "30px", paddingRight: "30px" }}>
        <ButtonGroup />
      </div>
      <div className="progress-container" style={{ width: "100%" }}>
        <ProgressBar />
      </div>
      <div className="lyrics-container">
        <Lyrics />
      </div>

      <div className='Trending' style={{ width: "100%", marginTop: "20px" }}>
        <h3 style={{ textAlign: "start", fontSize: "25px", marginBottom: "20px", marginLeft: "30px", fontWeight: "500" }}>Trending songs</h3>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "5px", paddingLeft: "30px", paddingRight: "30px" }}>
          <TrendingList />
          <TrendingList />
          <TrendingList />
          <TrendingList />
        </div>

        <div className='link' style={{ display: "flex", justifyContent: "end", paddingTop: "20px", paddingRight: "25px" }}>
          <a href="" style={{ color: "#B6B6B6", fontWeight: "300", fontWeight: "500" }}>View all</a>
        </div>
      </div>

      <div className='Recommendation' style={{ width: "100%" }}>
        <h3 style={{ textAlign: "start", fontSize: "25px", marginBottom: "20px", marginLeft: "30px", fontWeight: "500" }}>Recommended to you</h3>
        <div className='recommendation-card-slider-container' style={{ overflowX: "scroll", overflowY: "hidden", scrollBehavior: "smooth", scrollbarWidth: "none", display: "flex", gap: "30px", paddingLeft: "30px", width: "100%", paddingRight: "30px" }}>

          <RecommendationList />
          <RecommendationList />
          <RecommendationList />
          <RecommendationList />

        </div>
      </div>

    </div>
  )
}