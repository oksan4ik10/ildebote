import { IPropsTask } from "../types";

function Task1(props: IPropsTask) {
    const { nextLevel } = props;


    return (
        <>
            <h2>TASK 1</h2>
            <button onClick={nextLevel}>click</button>
        </>
    )
}

export default Task1;