import { useEffect, useState } from "react";
import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
import Experience from "../../Experience/Experience";
import Area from "../../Area/Area";
import Popup from "../../utils/Popup/Popup";
import Form from "./Form/Form";

import "./Task5.css"

import { useAppSelector } from "../../../store/store";



function Task5() {

    const [screen, setScreen] = useState(50);

    const openPortal = () => {
        window.location.href = "http://vk.com";
    }


    const countClients = useAppSelector((store) => store.arrClientsReducer).countClients;

    const startGame = () => {
        setScreen(screen + 1);
    }

    function numWord(value: number, words: string[]) {
        value = Math.abs(value) % 100;
        const num = value % 10;
        if (value > 10 && value < 20) return words[2];
        if (num > 1 && num < 5) return words[1];
        if (num == 1) return words[0];
        return words[2];
    }

    const text = `Ты очень профессиональный <br> консультант! ${countClients} ${numWord(countClients, ["клиент", "клиента", "клиентов"])} остались <br> довольны твоей заботой о них. <br> <br>
Помогать другим легче, чем кажется!`;
    useEffect(() => {
        setTimeout(() => setScreen(screen + 1), 1000)
    }, [])





    return (
        <>
            {screen === 51 &&
                <ScreenBlur>
                    <Popup text={text} textBtn="Прекрасно!" title="Ого, прекрасный результат!" funcBtn={startGame} />
                </ScreenBlur>}
            {screen === 52 &&
                <ScreenBlur>
                    <Form openPortal={openPortal} sendForm={startGame} />
                </ScreenBlur>}
            {screen === 53 &&
                <ScreenBlur>
                    <Popup text="Если ты победишь, то мы отправим тебе <br> всю информацию на указанную почту. <br> Но победить можно не только <br> в розыгрыше, но и в жизни — нажимай <br> на кнопку ниже, чтобы узнать больше <br> о карьере в ИЛЬ ДЕ БОТЭ!" textBtn="На карьерный портал!" title="Ты участвуешь <br>в розыгрыше красоты!" funcBtn={openPortal} />
                </ScreenBlur>}

            <Experience screen={screen}></Experience>

            <Area task={5} screen={screen}></Area>
            <div className="clients"></div>


        </>
    )
}

export default Task5;