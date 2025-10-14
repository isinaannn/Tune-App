import './button.css'
export default function Button(props){


    return (
        <div>
            <button className='button-tab'>{props.name}</button>
        </div>
    )
}