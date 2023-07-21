import logo from '../assets/logo/logo-estin.png'
import { FaDiscord } from "react-icons/fa6";
import { SlSocialFacebook, SlSocialInstagram, SlSocialYoutube, SlSocialLinkedin } from "react-icons/sl";
import { Link } from 'react-router-dom';


const Footer = () => {
    return ( 
        <div data-aos="fade-up" data-aos-duration="1000"
        className='footer-cont'>
        <div className="footer">
            <div className="join-discord">
                <img src={logo} alt="" />
                <p>Empowering Learners, Enriching Communities</p>
                <a target='_blank' href="https://discord.gg/KSyKAQ8ews">
                    <p className="dis-text">Discord server</p>
                    <FaDiscord className='discord-icon'></FaDiscord>
                </a>
            </div>
            <div className="all-links">
                <div className="see-more">
                    <h3>see more</h3>
                    <div className="links">
                        <ul className="links-1">
                            <li><a href="/">home</a></li>
                            <li><a href="#our-clubs">clubs</a></li>
                            <li><a href="#our-events">events</a></li>
                            <li><a href="#life-in-campus">life in campus</a></li>
                        </ul>
                        <ul className="links-1">
                            <li><a href="#studies">studies</a></li>
                            <li><a href="#specialities">specialities</a></li>
                            <li><a href="#admissions">admissions</a></li>
                            {/* <li><a href="#more-q">more questions</a></li> */}
                        </ul>
                    </div>
                </div>
                <div className="social-links">
                    <h3>follow us </h3>
                    <div>
                         <Link target='_blank' to='https://www.instagram.com/bytecraft.estin'><SlSocialInstagram className='icon'/></Link>
                    <Link target='_blank' to='https://www.facebook.com/ByteCraftEstin/'><SlSocialFacebook className='icon'/></Link>
                    {/* <Link target='_blank' to='https://www.youtube.com/@estinbejaia'><SlSocialYoutube className='social-icon'/></Link> */}
                    <Link target='_blank' to='https://www.linkedin.com/company/bytecraft-club/'><SlSocialLinkedin className='icon'/></Link>
                    </div>
                    
                </div>
            </div>
            
        </div>
        <div className="copy-rights">
            <p>all rights are reserved </p>
            	
            <p>&copy; 2023 ByteCraft</p>
        </div>
        </div>
        
     );
}
 
export default Footer;