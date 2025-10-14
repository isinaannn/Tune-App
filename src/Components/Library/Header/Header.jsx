import './Header.css'

export default function HeaderLibrary(){


    return (
        <div className='header-container'>
            <div className='heading-container'>
            <h3 className='library-heading'>Your Library</h3>
            </div>
            <div className='search'>
               <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
            </div>
            <div className='plus'>
               <svg className='plus-icon' fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"/></svg>
            </div>
        </div>
    )
}