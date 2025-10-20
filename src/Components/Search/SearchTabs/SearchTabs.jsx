
import Button from './Button'

export default function SearchTabs() {



  return (
    <div className="search-tabs" style={{ width: "100%", display: "flex", flexDirection: "row", alignItems: "start" }}>
      <div className='search-tabs-slider-container' style={{overflow: "hidden",overflowX: "scroll",overflowY: "hidden",scrollBehavior: "smooth",scrollbarWidth: "none"}}>
        <div className='search-tabs-card-wrapper' style={{display: "flex",gap: "0px",margin: "0"}}>
          <Button />
          <Button />
          <Button />
          <Button />
        </div>
      </div>



    </div>
  )
}