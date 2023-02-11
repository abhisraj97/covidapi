import React from "react";
import { useEffect ,useState} from "react";
import  './Slidc.css'

const  Slid = () =>{
    const [data,setData] = useState([])
    const getCovdData = async () =>{
        try {
            const res = await fetch('https://api.covid19api.com/summary') 
            const actualData = await res.json()
            setData(actualData.Countries[77])
        } catch (error) {
            console.log(error)
        }
    

    }
    useEffect (() =>{
           getCovdData()
    },[]);
return (
    <>
    <h1 >COVID UPDATE </h1>
 <div className="slider-container">
  <div className="slider">
    <div className="slides">
      
      <div id="slides__1" className="slide">
        <span className="slide__text">INDIA</span>
        <a className="slide__prev" href="#slides__4" title="Next"></a>
        <a className="slide__next" href="#slides__2" title="Next"></a>
      </div>
      <div id="slides__2" className="slide">
        <span className="slide__text">Confirmed <br/> {data.TotalConfirmed}</span>
        <a className="slide__prev" href="#slides__1" title="Prev"></a>
        <a className="slide__next" href="#slides__3" title="Next"></a>
      </div>
      <div id="slides__3" className="slide">
        <span className="slide__text">Recovered <br/> {data.TotalRecovered}</span>
        <a className="slide__prev" href="#slides__2" title="Prev"></a>
        <a className="slide__next" href="#slides__4" title="Next"></a>
      </div>
      <div id="slides__4" className="slide">
        <span className="slide__text">Deaths <br/> {data.TotalDeaths}</span>
        <a className="slide__prev" href="#slides__3" title="Prev"></a>
        <a className="slide__next" href="#slides__5" title="Prev"></a>
      </div>
      <div id="slides__5" className="slide">
        <span className="slide__text">UPDATE <br/> {data.Date}</span>
        <a className="slide__prev" href="#slides__4" title="Prev"></a>
        <a className="slide__next" href="#slides__1" title="Prev"></a>
      </div>
    </div>
  </div>
  
</div>
<footer>
	<p>Created by Abhsihek Rajput. © 2022</p>
</footer>

    </>
);
}

export default Slid;