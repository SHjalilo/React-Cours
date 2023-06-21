import { Card, Button } from "react-bootstrap";


const Card_Detail = (props)=>{
    //console.log(props);
    const showMessage =()=>{
        props.clickMe(props.title);
    }
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button onClick={showMessage} variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    );
}

export default Card_Detail ;