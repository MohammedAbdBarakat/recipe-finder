import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div>
            <h1>Sorry</h1>
            <p>the page requested is not found click <Link to = {'/'} >here</Link> to return to homepage</p>
        </div>
    );
}

export default NotFound;