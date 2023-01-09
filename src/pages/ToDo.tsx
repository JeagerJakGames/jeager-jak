import DDLGrid from "../components/Grid/DDLGrid/DDLGrid";
import Grid from "../components/Grid/Grid";


export default function ToDo() {

    let i = 0;
    const list: any[] = [];
    while (i < 100) {
        list.push({
            id: i,
            name: "test",
            description: "test",
            status: "test",
            priority: "test",
            created: "test",
            updated: "test"
        });
        i++;
    }

    return (
        <div>
            <h1>ToDo</h1>
            <DDLGrid name={"todo-list"} gridObjects={list} />
        </div>
    )
}
