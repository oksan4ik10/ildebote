//for Task 1

interface IProps {
    funcBtn: () => void;
    screen: number;
}

function StopGame(props: IProps) {
    const { funcBtn, screen } = props;
    return (
        <>
            <div className={"stop-game " + (((screen < 3) || (screen === 20) || (screen === 30) || (screen === 40)) ? "" : "stop-task1Icon")} onClick={funcBtn}></div>
        </>
    )
}



export default StopGame;