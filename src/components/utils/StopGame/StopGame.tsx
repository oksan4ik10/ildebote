//for Task 1

interface IProps {
    funcBtn: () => void;
    screen: number;
}

function StopGame(props: IProps) {
    const { funcBtn, screen } = props;

    return (
        <>
            <div className={"stop-game " + ((screen === 4 || screen > 7) ? "stop-task1Icon" : "")} onClick={funcBtn}></div>
        </>
    )
}



export default StopGame;