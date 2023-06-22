import { Alert } from "react-bootstrap";



const NotFound = (props)=>{
    
    return(
        <div>
            <Alert variant={props.color}>
                {props.message}
            </Alert>
        </div>
    );
}

export default NotFound;