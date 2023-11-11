import { IPropsTask } from "../types";

function Task2(props: IPropsTask) {
    const { nextLevel } = props;


    return (
        <>
            <h2>TASK 2</h2>
            <button onClick={nextLevel}>click</button>
        </>
    )
}

export default Task2;