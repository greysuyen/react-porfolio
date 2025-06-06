import chow from '../assets/images/chow.jpg'
import '../styles/home.css';

const Home = () => {
    return(
        <header>

            <div className="profile">
                { <img src={chow} alt="profile" /> }
            </div>
            
            <div className="nav">
            <a href="home">Home</a>
            <a href="about">About</a>
            <a href="contacts">Contacts</a>
            </div>  

            <div className="content">
                <hr />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo quod dolor repellat expedita porro iure provident beatae alias minima illum, eos pariatur voluptates vero fugit, et cupiditate voluptatibus iste repellendus.
                </p>
            </div>
        </header>
    );
}

export default Home