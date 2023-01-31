import DDLGrid from "../components/Grid/DDLGrid/DDLGrid";


export default async function ToDo() {
    const url = "https://jeagerjak.azurewebsites.net/";
    const endPoint = "WeatherForecast";
    let err = null;
    await fetch(url + endPoint)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const list = data;

        return(
            <div>
                <h1>ToDo</h1>
                <DDLGrid name={"todo-list"} gridObjects={list} />
            </div>
        )
    })
    .catch((error) => {
        err = error;
    });
    if(err) return <div>{err}</div>
    return <h1>incomplete</h1>
}
