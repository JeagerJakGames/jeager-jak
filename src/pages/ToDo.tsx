import Grid from "../components/Grid/Grid";


export default function ToDo() {

    const list = [
        {
            id: 1,
            name: "test",
            description: "test",
            status: "test",
            priority: "test balh dfjdkfjkds djkfljsda fjdlk;fj sal;kdfjldsa",
            created: "test",
            updated: "test"
        },
        {
            id: 2,
            name: "test",
            description: "test",
            status: "test",
            priority: "test",
            created: "test",
            updated: "test"
        },
        {
            id: 3,
            name: "test",
            description: "test",
            status: "test",
            priority: "test",
            created: "test",
            updated: "test"
        },
        {
            id: 4,
            name: "test",
            description: "test",
            status: "test",
            priority: "test",
            created: "test",
            updated: "test"
        },

    ];

    return (
        <div>
            <h1>ToDo</h1>
            <Grid gridObjects={list} />
        </div>
    )
}
