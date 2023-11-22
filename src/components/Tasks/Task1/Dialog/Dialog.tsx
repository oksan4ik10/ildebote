
//for Task 1
import { useState, useMemo } from "react";
import "./Dialog.css";
import { useAppSelector } from "../../../../store/store";

import srcQuote1 from "./quote1.png";
import srcQuote2 from "./quote2.png";
import srcQuote3 from "./quote3.png";
import srcQuote4 from "./quote4.png";
import src1Client from "../../../../assets/images/clients/1-2.png";
import src2Client from "../../../../assets/images/clients/1-3.png";
interface IProps {
    funcBtn: () => void;
    screen: number;
}


function Dialog(props: IProps) {
    const { funcBtn, screen } = props;

    const nameUser = useAppSelector((state) => state.nameUserReducer).nameUser;
    const arrDataDialog = useMemo(() => [
        {
            nameClient: "Мария, клиентка",
            clientText: `Добрый день, ${nameUser}! Мне нужна моя любимая помада бренда Х`,
            clientImg: src1Client,
            clientQuote: srcQuote1,
            classClientQuote: "",
            userName: `Я, ${nameUser}`,
            userQuote: srcQuote2,
            userText: `Добрый день, Мария. Рада вас снова видеть в нашем магазине. Сейчас принесу вам вашу любимую помаду. Давайте я также познакомлю вас с новым ароматом, который, мне кажется, вам понравится.`,

        },
        {
            nameClient: "Александр, клиент",
            clientText: `Здравствуйте! Я ищу <br> духи в подарок для своих <br> жены и дочки`,
            clientImg: src2Client,
            clientQuote: srcQuote3,
            classClientQuote: "active",
            userName: `Я, ${nameUser}`,
            userQuote: srcQuote4,
            userText: `Я консультант по красоте ${nameUser}. Подскажите, пожалуйста, как я могу к вам обращаться? Я с удовольствием помогу вам с выбором! У нас сегодня в продаже как раз есть роскошные подарочные наборы. Давайте я вам покажу.`
        }

    ], [nameUser])
    const data = screen === 9 ? arrDataDialog[0] : arrDataDialog[1];


    const [btnHelp, setBtnHelp] = useState(false);
    const clickHelp = () => {
        setBtnHelp(true);
        setTimeout(() => funcBtn(), 5000)
    }


    return (
        <>
            <div className="dialog">
                <div className="dialog__client">
                    <div className="dialog__img">
                        <img src={data.clientImg} alt="client" />
                    </div>
                    <div className={"dialog__info " + data.classClientQuote}>
                        <p className="dialog__name">{data.nameClient}</p>
                        <div className="dialog__text">
                            <img src={data.clientQuote} alt="quoteClient" />
                            <p className="dialog__quote" dangerouslySetInnerHTML={{ __html: data.clientText }}></p>
                        </div>

                    </div>
                </div>
                <button className={"dialog__btn " + (btnHelp ? "none" : "")} onClick={clickHelp}>Помочь</button>
                <div className={"dialog__answer " + (btnHelp ? "active" : "")}>
                    <div className="dialog__name">{`Я, ${nameUser}`}</div>
                    <div className="dialog__text">
                        <img src={data.userQuote} alt="quoteUser" />
                        <p className="dialog__quote">{data.userText}</p>
                    </div>
                </div>
            </div >
        </>
    )
}







export default Dialog;                                                                        