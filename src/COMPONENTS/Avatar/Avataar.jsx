import './Avatar.css'
import Avatar from 'react-avatar';
const Avataar = ({ openandCloseDrawer }) => {
    const afunc = openandCloseDrawer();

    const url = "https://images.fineartamerica.com/images-medium-large-5/buffalo-profile-thomas-preston.jpg"
    return (
        <div className="avtranddrwr">
            <Avatar className="avtr" name="Aravindan J" size={40} src={url} maxInitials={2} round onClick={afunc} />
        </div>
    )
}



export default Avataar;