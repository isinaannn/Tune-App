import './LibraryCard.css'

export default function LibraryCard({ name, caption, src, type ,category}) {



    return (

<>
        { type== "artist" ?
            (<div className="library-card">
                <div className="artist-image">
                    <img className='library-image' src={src} alt="" />
                </div>
                <div className="library-details">
                    <h4 className='library-head'>{name}</h4>
                    <p className='library-para'>{caption}</p>
                </div>
                <div className="library-category">
                    <p>{category}</p>
                </div>

            </div>

            ) :
            (<div className="library-card">
                <div className="image-container">
                    <img className='library-image' src={src} alt="" />
                </div>
                <div className="library-details">
                    <h4 className='library-head'>{name}</h4>
                    <p className='library-para'>{caption}</p>
                </div>
                <div className="library-category">
                    <p>{category}</p>
                </div>

            </div>)}
            
           </>
            )
    
}