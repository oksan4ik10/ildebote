//for Task 1

interface IProps {
    funcBtn: () => void;
}

function StopGame(props: IProps) {
    const { funcBtn } = props;

    return (
        <>
            <div className="stop-game" onClick={funcBtn}></div>
        </>
    )
}



export default StopGame;