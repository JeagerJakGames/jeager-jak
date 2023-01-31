import React from "react";
import DDLGrid from "../components/Grid/DDLGrid/DDLGrid";


export default function ToDo() {
    const [data, setData] = React.useState<any>([]);
    const url = "https://jeagerjak.azurewebsites.net/";
    const endPoint = "WeatherForecast";
    React.useEffect(() => {
        fetch(url + endPoint)
            .then(response => response.json())
            .then(data => {
                setData(data);
                console.log(data);
            }) 
            .catch(error => console.log(error));
    },[]);
    if(data.length > 0) return(
        <div>
            <h1>ToDo</h1>
            <DDLGrid name={"todo-list"} gridObjects={data} />
        </div>
    );
    return(<div>Loading...</div>);

}
