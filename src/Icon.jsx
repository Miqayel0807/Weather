import { faCloud, faCloudRain, faCloudSun, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon=(props)=>{
    if(props.description==='Sunny'){
        return(

            <FontAwesomeIcon style={{color:'yellow'}} icon={faSun}/>
        )

    }else if(props.description==='Cloudy'){
        return (
            <FontAwesomeIcon style={{color:'blue'}} icon={faCloud}/>
        )
    }else if(props.description==='Partly cloudy'){
        return (
            <FontAwesomeIcon style={{color:'#dcbb56'}}icon={faCloudSun}/>
        )
    }else if(props.description==='Light rain with thunderstorm' || props.description==='Light rain shower'){
        return (
            <FontAwesomeIcon style={{color:'blue'}}icon={faCloudRain}/>
   
        )
    }else if(props.description==='Clear'){
        return <FontAwesomeIcon style={{color:'yellow'}} icon={faMoon}/>

    }
    else return(
        <></>
    )
    
}



export default Icon