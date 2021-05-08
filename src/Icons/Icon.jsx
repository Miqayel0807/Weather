import { faCloud, faCloudRain, faCloudSun, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon=(props)=>{
    switch(props.description){
        case 'Sunny': {
            return <FontAwesomeIcon style={{color:'yellow'}} icon={faSun}/>
        }
        case 'Cloudy':{
            return <FontAwesomeIcon style={{color:'blue'}} icon={faCloud}/>
        }
        case 'Partly cloudy':{
             return <FontAwesomeIcon style={{color:'#dcbb56'}}icon={faCloudSun}/>
        }
        case 'Light rain with thunderstorm' :{
            return <FontAwesomeIcon style={{color:'blue'}}icon={faCloudRain}/>
        }
        case  'Light rain shower' :{
            return <FontAwesomeIcon style={{color:'blue'}}icon={faCloudRain}/>
        }
        case  'Light rain':{
            return <FontAwesomeIcon style={{color:'blue'}}icon={faCloudRain}/>
        }
        case 'Clear':{
            return <FontAwesomeIcon style={{color:'yellow'}} icon={faMoon}/>
        }
        default: return <></>
    }
     
    
    
}



export default Icon