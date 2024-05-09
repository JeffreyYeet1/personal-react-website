import './HomePage.css';
import profilePicture from './images/cat.jpg';
import LinkedInIcon from './images/linkedinicon.png';
import GithubIcon from './images/githubicon.png';
import EmailIcon from './images/emailicon.png';

function HomePage() {
    return(
        <div className = "homePageContainer">
            <div className = 'name'>Jeffrey Ye</div>
            <div className = 'description'>Anim eu nulla proident occaecat officia est anim consequat labore. Occaecat mollit mollit est duis velit laboris.</div>
            <div className = 'misc'>Reach Out!</div>
            <a className = 'imageroute' href = 'https://www.linkedin.com/in/jeffrey-ye-b6721b2a0/' target = '_blank' rel="noreferrer"><img className = 'homeicon' src = {LinkedInIcon} id = 'linkedinicon' alt = 'LinkedIn'></img></a>
            <a className = 'imageroute' href = 'https://github.com/JeffreyYeet1' target = '_blank' rel="noreferrer"><img className = 'homeicon' src = {GithubIcon} id = 'githubicon' alt = 'Github'></img></a>
            <img className = 'homeicon' src = {EmailIcon} alt = 'Email'></img>
            <img className = 'profilepic' src = {profilePicture} alt = 'Cat'></img>            
        </div>
    );
}

export default HomePage;