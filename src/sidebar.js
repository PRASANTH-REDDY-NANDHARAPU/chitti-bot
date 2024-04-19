import Imgbody from "./imgbody"
const Sidebar=()=>{

    return <div className="left-side">
        <div className="chitti-left">
              <h1 className="brand-name fw-bolder">Chitti BoT</h1>

              <div>
                <button className="side-btn" onClick={Imgbody.flower}>Flowers</button>
                <button className="side-btn" onClick={Imgbody.car}>Cars</button>
                <button className="side-btn" onClick={Imgbody.food}>Food</button>
                <button className="side-btn" onClick={Imgbody.india}>India</button>
                <button className="side-btn" onClick={Imgbody.wall}>Wallpapers</button>
                <button className="side-btn" onClick={Imgbody.girls}>Girls</button>
                <button className="side-btn" onClick={Imgbody.tech}>Technology</button>
                <button className="side-btn" onClick={Imgbody.dogs}>Dogs</button>
              </div>
        </div>
    </div>
}
export default Sidebar;
