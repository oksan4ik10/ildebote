import "./ScreenBlur.css";

interface IProps {
    children: React.ReactNode;
    screen?: number;
}


function ScreenBlur(props: IProps) {
    const { children, screen } = props;
    const screenTask = screen ? screen : -1;
    return (
        <>
            <div className={"modal-dialog " + (((screenTask === 4) || (screenTask === 7) || (screenTask === 8) || (screenTask === 10) || (screenTask === 11) || (screenTask === 13)) ? "none" : "")}>
                {children}
            </div>
        </>
    )
}

export default ScreenBlur;