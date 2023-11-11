//Button + Modal

import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import "./Popup.css";

interface IProps {
    title: string;
    text: string;
    size: string;
    padding: string;
    funcBtn: () => void;
    textBtn: string;
    classBtn: string;
}

function Popup(props: IProps) {
    const { title, text, size, padding, funcBtn, textBtn, classBtn } = props;

    return (
        <>
            <div className="screen__popup">
                <Modal title={title} text={text} size={size} padding={padding} />
                <Button funcBtn={funcBtn} textBtn={textBtn} classBtn={classBtn} />

            </div>
        </>
    )
}



export default Popup;