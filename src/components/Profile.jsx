import '../styles/home.css'
import chow from '../assets/images/chow.jpg'
const Profile = () => {
    return(
        <header>
            {/* Profile */}
            <div className="profile">
                <img src={chow} alt="profile" /> 
            </div>
            
            {/* Full name */}
            <div className="name">
                <h1>Cho Yihyun</h1>
            </div>
        </header>
    )
}

export default Profile