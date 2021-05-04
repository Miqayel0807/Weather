import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometerHalf, faWind} from '@fortawesome/free-solid-svg-icons'
import {Container, Button,  Card, FormControl} from 'react-bootstrap'
import Icon from './Icon'
import styles from './city.module.css'
import NextDays from './NexDays'



class Temperature extends React.Component{

    state={

        inputValue:'',
        city:'',
        temperature:'',
        wind:'',
        description:'',
        day:new Date(),
        tomorrow:{},
      

    }
    componentDidMount(){
        fetch(`https://goweather.herokuapp.com/weather/Yerevan`)
   .then(res=>res.json())
   .then(data=>{
       if(data.error){
           throw data.error
       }
       this.setState({
           city:'Yerevan',
           temperature:data.temperature,
           wind:data.wind,
           description:data.description,
           tomorrow:data.forecast[0],
           
       })
       

   
   })
   .catch(error=>{
       console.log(error);
   })
}
    temp=(e)=>{
        const {value}=e.target
        this.setState({
            inputValue:value
        })
    }

    request=(keyPress)=>{
        fetch(`https://goweather.herokuapp.com/weather/${this.state.inputValue}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                throw data.error
            }
            this.setState({
                city:this.state.inputValue,
                temperature:data.temperature,
                wind:data.wind,
                description:data.description,
                inputValue:'',
                tomorrow:data.forecast[0],
                secondDay:data.forecast[1],
                thirdDay:data.forecast[2]
            })
      

        
        })
        .catch(error=>{
            console.log(error);
        })
    }

     submit=(type)=>{
         if(type.key!=='Enter'){
            return            
        }
        this.request()
      

    }

    render(){


        
        return(
            <>
               <Container className={styles.container}>
            <h1 style={{color:'white'}}>Weather in the world</h1>
            <FormControl 
            className={styles.form}
            style={{width:'400px'}}
            onChange={this.temp}
              type="text"
              value={this.state.inputValue}
              placeholder='Write city here '
              onKeyPress={this.submit}
              />
            <Button 
                type='button'
                variant='primary'
                onClick={this.request}
                className='mt-3'
                >
                    Know weather
                    </Button>

                   {this.state.temperature?
                <Card className={styles.card}>
                 <Card.Body>
                    <Card.Title><h1>Weather in {this.state.city}</h1></Card.Title>
                    <Card.Text>
                    {this.state.day.toISOString().slice(0,10)}
                    </Card.Text>
                     <Card.Text>
                     <FontAwesomeIcon style={{color:'#5c5cff'}}icon={faThermometerHalf}/> {this.state.temperature}
                     </Card.Text>
                     <Card.Text>
                     <Icon description={this.state.description}/> {this.state.description}
                     </Card.Text>
                     <Card.Text>
                     <FontAwesomeIcon icon={faWind}/>{this.state.wind}
                     </Card.Text>

                     
                     <NextDays  tomorrow={this.state.tomorrow}/>
                </Card.Body>
              </Card>:
                   <div> <h2 className='text-warning'>Please write correct city</h2></div>}


                    </Container>
                 
                    
            </>
        )
    }
}


export default Temperature