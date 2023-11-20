//for Task 1
import Modal from "../../utils/Modal/Modal";
import { IPropsModal } from "../../utils/Modal/Modal";

interface IProps extends IPropsModal {
    className: string;
}

function PopupClientTask1(props: IProps) {
    const { className, padding, size, text } = props;

    return (
        <>
            <div className={"modal-client" + className}>
                <Modal padding={padding} size={size} text={text} title="" />
            </div>
        </>
    )
}



export default PopupClientTask1;