import { IPropsTask } from "../types";

function Task4(props: IPropsTask) {
    const { nextLevel } = props;


    return (
        <>
            <h2>TASK 4</h2>
            <button onClick={nextLevel}>click</button>
        </>
    )
}

export default Task4;