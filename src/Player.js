import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { players } from './players';
const Player=(props)=>{
    return(
        
        <Card style={{ width: '18rem' }}>
  <img src={props.el.imageURL}/>
      <Card.Body>
        <Card.Title>{props.el.name}</Card.Title>
        <Card.Text>
         {props.el.nationality}
        </Card.Text>
        <Card.Text>
         {props.el.jerseyNumber}
        </Card.Text>
        <Button variant="primary">buy</Button>
      </Card.Body>
    </Card>
        
    )
}
export default Player