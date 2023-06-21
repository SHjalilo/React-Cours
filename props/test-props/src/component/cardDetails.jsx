import { Card, Button } from "react-bootstrap";

// method 1
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

// method 2 => add children 
/*const CardTestProp = (title,description,img, clickMe , children)=>{

    const showMessage =()=>{
        clickMe(title);
    }
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {props.description}
            </Card.Text>
            <Button onClick={showMessage} variant="primary">Go somewhere</Button>
            {children}
        </Card.Body>
        </Card>
    );
}*/

export default Card_Detail ;