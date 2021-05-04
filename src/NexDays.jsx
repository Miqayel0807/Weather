import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerHalf} from '@fortawesome/free-solid-svg-icons'


const NextDays=(props)=>{


    return(
        <>
        <p>Tomorrow</p>
        <FontAwesomeIcon style={{color:'#5c5cff'}}icon={faThermometerHalf}/>
        {props.tomorrow.temperature}
        
        </>
    )
}

export default NextDays