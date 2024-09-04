import './profile.css'
import bg from './images/bglog.jpg'
const Profile=(props)=>{
      return(
        <>
        <div className="main-prof-container">
        <div className="dummy-container">
        <div className="prof-img">
            <img src={bg} alt="profile" />
        </div>
        <div className="prof-details">
            <label>Username:<span>Admin</span></label>
            <label>PhoneNo:<span>12345</span></label>
            <label>Email:<span>admin123@gmail.com</span></label>
        <div className="btn-edit-close">
        <button className='btn-edit'>
            Edit
        </button>  
        <button className='btn-edit' onClick={props.handleProfileToggle}>Close</button>
        </div>
        </div>
        </div>
        </div>
        </>
      )
}
export default Profile;