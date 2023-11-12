import { IPropsTask } from "../types";
import Experience from "../../Experience/Experience";
import { useAppDispatch } from "../../../store/store";
import { setWidth } from "../../../store/reducers/pointsReducer";

function Task1(props: IPropsTask) {
    const { nextLevel } = props;
    const dispatch = useAppDispatch();

    const test = () => {
        dispatch(setWidth(2));
    }


    return (
        <>
            <Experience></Experience>
            <h2>TASK 1</h2>
            <button onClick={test}>click</button>
        </>
    )
}

export default Task1;