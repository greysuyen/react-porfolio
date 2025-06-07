import '../styles/home.css'
import myicon from '../assets/images/myicon.png'
const Profile = () => {
    return(
        <header>
            {/* Profile */}
            <div className="profile">
                <img src={myicon} alt="profile" /> 
            </div>
            
            {/* Full name */}
            <div className="name">
                <h1>Cho Yihyun</h1>
            </div>
        </header>
    )
}

export default Profile