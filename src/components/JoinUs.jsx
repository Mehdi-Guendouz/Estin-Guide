import estinInfos from "../assets/estinInfos.pdf"


const JoinUs = () => {
   
    return ( 
        <div className="join-us" id="more-q">
            <h1 data-aos="fade-right" data-aos-duration="1000"
            className="title">for more <span>questions </span></h1>
            <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500"
            className="join-us-cont">
                <p className="join">download this PDF file</p>
                <a className="download"  href={estinInfos} download="Infos.pdf">Download</a>
            </div>
            
        </div>
     );
}
 
export default JoinUs;