//for Task 1

interface IProps {
    funcBtn: () => void;
    screen: number;
}

function StopGame(props: IProps) {
    const { funcBtn, screen } = props;
    console.log(screen);

    return (
        <>
            <div className={"stop-game " + ((screen < 3) ? "" : "stop-task1Icon")} onClick={funcBtn}></div>
        </>
    )
}



export default StopGame;