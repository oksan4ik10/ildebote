import { IPropsTask } from "../types";

function Task3(props: IPropsTask) {
    const { nextLevel } = props;


    return (
        <>
            <h2>TASK 3</h2>
            <button onClick={nextLevel}>click</button>
        </>
    )
}

export default Task3;