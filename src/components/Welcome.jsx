import { FaAnglesDown } from "react-icons/fa6";
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube, SlSocialLinkedin } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Welcome = () => {
    return ( 
        <div
        data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800"
        className="welcome-cont">
            <div className="shadow-2"></div>
            <div className="welcome">
                <h1>Marhba Bikom</h1>
                <h2>Future <span>students</span></h2>
                <p>Welcome to our website! This platform is designed specifically for individuals like you, aiming to provide valuable insights and information about our esteemed school.</p>
                <a href='#whatsestin'>Let's discover it together</a>
                <FaAnglesDown className='arrow-down'/>
                <div
                data-aos="fade-down" data-aos-duration="900" data-aos-delay="1600"
                className="social-media">
                    <Link target='_blank' to='https://www.instagram.com/bytecraft.estin'><SlSocialInstagram className='social-icon'/></Link>
                    <Link target='_blank' to='https://www.facebook.com/ByteCraftEstin/'><SlSocialFacebook className='social-icon'/></Link>
                    {/* <Link target='_blank' to='https://www.youtube.com/@estinbejaia'><SlSocialYoutube className='social-icon'/></Link> */}
                    <Link target='_blank' to='https://www.linkedin.com/company/bytecraft-club/'><SlSocialLinkedin className='social-icon'/></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Welcome;