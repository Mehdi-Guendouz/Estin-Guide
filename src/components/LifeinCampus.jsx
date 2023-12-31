import campus_1 from "../assets/pic/campus_1.png"
import campus_2 from "../assets/pic/campus_2.png"
import campus_3 from "../assets/pic/campus_3.png"


const LifeinCampus = () => {
    
    return ( 
        <div className="life-in-campus" id='life-in-campus'>
            <div className="shadow-4"></div>
            <div className="shadow-5"></div>
            <h1 data-aos="fade-right" data-aos-duration="1000"
            className="title">life in <span>campus</span></h1>

            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000" 
            className="campus-sec campus-1-border campus-sec1">
                <div className="text">
                    <h2>RESIDENCE</h2>
                    <p>Introducing the Amizour 2 Campus at Estin School, located in Amizour, Bejaia. This secure and peaceful mixed campus is nestled in a beautiful setting, just 3.2 km from Amizour town and 23 km from Bejaia city. It offers separate sections for boys and girls, making it suitable for diverse student populations. The campus is conveniently located near Estin School, providing easy access to additional educational resources and facilities. Amenities at the campus include a prayer room, gym, restaurant, foyer, and a sports field. Additionally, students can enjoy a dedicated reading room for quiet study.</p>
                </div>
                <div className="img-container">
                    <img src={campus_1} alt="campus image" />
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="1000" 
            className="campus-sec campus-2-border">
                <div className="img-container">
                    <img src={campus_2} alt="campus image" />
                </div>
                <div className="text">
                    <h2>RESTAU</h2>
                    <p>The residence restaurant is centrally situated, offering easy access to all students and staff. It provides a range of affordable and wholesome meals, with a regularly updated menu to keep the options fresh. The restaurant maintains cleanliness and ensures a comfortable dining experience for students.</p>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000"
            className="campus-sec campus-1-border">
                <div className="text">
                    <h2>ROOMS</h2>
                    <p>Let's talk about the rooms at Amizour 2 Campus. Each room is designed to accommodate two students, providing a comfortable living space for them. In every room, you will find all the necessary amenities, including two beds, two tables, two chairs, and two closets. Additionally, pillows and covers can be provided as well. The rooms offer a calm and peaceful atmosphere, creating an ideal environment for studying. Moreover, the campus boasts breathtaking views, adding to the overall experience of residing there.</p>
                </div>
                <div className="img-container">
                    <img src={campus_3} alt="campus image" />
                </div>
            </div>
        </div>
        
        
     );
}
 
export default LifeinCampus;