import profile from './assets/SB.jpg'
function Card()
{
    return(
        <div className='card'>
            <img className = "cardImage" src={profile} alt="profile picture"></img>
            <h2 className = "cardTitle">Samriddho</h2>
            <p className='cardText'>Full Stack Web Developer</p>
        </div>
    );
}

export default Card