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
                    <Form />
                </ScreenBlur>}

            <Experience screen={screen}></Experience>

            <Area task={5} screen={screen}></Area>
            <div className="clients"></div>


        </>
    )
}

export default Task5;