import { useRef, useState } from "react";

const Imgbody = () => {
    const [img, setImg] = useState('');
    const data = useRef();
    const url = "https://source.unsplash.com/1600x800?";
    
    function image() {
     
        setImg(url + data.current.value);

    }
    
    return (
        <div className="right-side">
            <div className="chitti-right">
                <h3 className="version">chitti 2.0</h3>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong className="warning">Warning!!</strong> please do not search adult content 18+ 
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <h1 className="display-3 fw-bold intro">Hello, I'm chitti the image BOT </h1>
                <h1 className="display-5 fw-bold  intro-2">Enter image name </h1>
               
               <div className="image-container">
                    {img && <img src={img} alt="Dynamic Image" />}
               </div>
             
                <div className="input-feild">
                    <input type="text" ref={data} placeholder="Enter image name EX: pig, dog"></input>
                    <button onClick={image}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Imgbody;

