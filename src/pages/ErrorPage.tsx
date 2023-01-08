import { Link } from "react-router-dom";

export default function ErrorPage(){
    document.title = "404";
    return(
        <>
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to = "/">Go Home</Link>
        </>
    )
}