import "./StopGame.css";
interface IProps {
    funcBtn?: () => void;
    screen: number;
}

function StopGame(props: IProps) {
    const { funcBtn, screen } = props;
    const click = () => {
        if (funcBtn) funcBtn();
    }
    return (
        <>
            <div className={"stop-game " + (((screen < 3) || (screen === 20) || (screen === 30) || (screen === 40)) ? "" : "stop-task1Icon")} onClick={click} onTouchStart={click}></div>
        </>
    )
}



export default StopGame;