import "./Modal.css";

interface IProps {
    title: string;
    text: string;
    size: string;
    padding: string;
}

function Modal(props: IProps) {
    const { title, text, size, padding } = props;

    return (
        <>
            <div className="modal" style={{ "padding": padding }}>
                {title && <h3 className="modal__title" dangerouslySetInnerHTML={{ __html: title }}></h3>}
                <span className="modal__text" style={{ "fontSize": size }} dangerouslySetInnerHTML={{ __html: text }}></span>

            </div>
        </>
    )
}



export default Modal;