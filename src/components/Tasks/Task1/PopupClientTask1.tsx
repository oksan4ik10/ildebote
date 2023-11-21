//for Task 1
import Modal from "../../utils/Modal/Modal";


interface IProps {
    screen: number;
}

function PopupClientTask1(props: IProps) {
    const { screen } = props;

    const arrObjInfo = [
        {
            text: "",
            className: "none"
        },
        {
            text: "Твоя задача — помогать клиентам в магазине",
            className: "modal-bottom"
        },
        {
            text: "За помощь клиентам ты будешь зарабатывать очки опыта. Чем больше очков ты получишь, тем выше шанс выиграть приз",
            className: "modal-top"
        },
        {
            text: "",
            className: "none"
        },
        {
            text: "Нажми на иконку клиента",
            className: "modal-bottom modal-icon",

        },
        {
            text: "Поздоровайся с новым клиентом. Цель — показать, что клиент важен для нас и проявить искреннюю заинтересованность.",
            className: "modal-top"
        },
        {
            text: "",
            className: "none"
        },
        {
            text: "Чтобы проводить клиента, зажми его изображение и перетащи в нужный отдел",
            className: "modal-bottom"
        }

    ]




    return (
        <>
            <div className={"modal-client " + arrObjInfo[screen].className}>
                <Modal padding="16px 22px" size="12px" text={arrObjInfo[screen].text} title="" />
            </div>
        </>
    )
}



export default PopupClientTask1;