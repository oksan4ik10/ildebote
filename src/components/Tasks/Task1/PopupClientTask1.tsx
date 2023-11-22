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
        },
        {
            text: "",
            className: "none"
        },
        {
            text: "Это постоянная клиентка. Цель — удовлетворить её потребности и порадовать.",
            className: "modal-top"

        },
        {
            text: "Чтобы перенести товар, зажми его<br> изображение и перетащи нужному клиенту",
            className: "modal-bottom modal-drag"
        },
        {
            text: "",
            className: "none"
        },
        {
            text: "Клиент ищет подарок для своих близких, но ещё не определился с выбором. Он прислушается к вашим рекомендациям. Цель — помочь ему сделать выбор и оставить хорошее впечатление о магазине.",
            className: "modal-top"
        },
        {
            text: "",
            className: "none"
        },
        {
            text: "",
            className: "none"
        },

    ]




    return (
        <>
            <div className={"modal-client " + arrObjInfo[screen].className}>
                <Modal padding="16px 16px" size="12px" text={arrObjInfo[screen].text} title="" />
            </div>
        </>
    )
}



export default PopupClientTask1;