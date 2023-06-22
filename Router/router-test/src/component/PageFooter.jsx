import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";





const Footer = ()=>{

    return(
        <div>
            <p>All Rights 2023</p>
            <Link to="/" > <Button>Go Home </Button> </Link>
            

        </div>
    );
}

export default Footer ;