import "./Button.css";

interface IProps {
    funcBtn: () => void;
    textBtn: string;
    classBtn: string;
}

function Button(props: IProps) {
    const { funcBtn, textBtn, classBtn } = props;

    return (
        <>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className={"btn " + classBtn} onClick={funcBtn}>
                {textBtn}
            </label>
        </>
    )
}

export default Button;