//for Task 1
import { useState } from "react";
interface IProps {
    funcBtn: () => void;
    screen: number;
}

function StopGame(props: IProps) {
    const { funcBtn, screen } = props;
    const [touchClick, setTouchClick] = useState(true);
    const click = () => {
        if (!touchClick) return;
        funcBtn();
        setTouchClick(false);
    }
    return (
        <>
            <div className={"stop-game " + (((screen < 3) || (screen === 20) || (screen === 30) || (screen === 40)) ? "" : "stop-task1Icon")} onClick={click} onTouchStart={click}></div>
        </>
    )
}



export default StopGame;