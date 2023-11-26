//Button + Modal

import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./Popup.css";

interface IProps {
    title: string;
    text: string;
    funcBtn: () => void;
    textBtn: string;
    padding?: string;
}

function Popup(props: IProps) {
    const { title, text, funcBtn, textBtn, padding } = props;

    return (
        <>
            <div className="screen__popup">
                <Modal title={title} text={text} size="14px" padding={padding ? padding : "25px 22px"} />
                <Button funcBtn={funcBtn} textBtn={textBtn} classBtn="screen__btn" />

            </div>
        </>
    )
}



export default Popup;