import "./ScreenBlur.css";

interface IProps {
    children: React.ReactNode;
    screen?: number;
}


function ScreenBlur(props: IProps) {
    const { children, screen } = props;
    console.log(screen);

    const screenTask = screen ? screen : -1;
    return (
        <>
            <div className={"modal-dialog " + (((screenTask === 4) || (screenTask === 7)) ? "none" : "")}>
                {children}
            </div>
        </>
    )
}

export default ScreenBlur;