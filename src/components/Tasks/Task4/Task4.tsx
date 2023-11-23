import { useState } from "react";
import { IPropsTask } from "../types";
import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
import Experience from "../../Experience/Experience";
import Area from "../../Area/Area";
import StopGame from "../../utils/StopGame/StopGame";
import Popup from "../../utils/Popup/Popup";
import ClientsArea from "../../ClientsArea/ClientsArea";

import "./Task4.css"

import Modal from "../../utils/Modal/Modal";


import { useAppDispatch } from "../../../store/store";
import { setTimer } from "../../../store/reducers/timerReducer";
import Consultants from "./Consultants/Consultants";


function Task4(props: IPropsTask) {
    const { nextLevel } = props;
    const dispatch = useAppDispatch();


    const [screen, setScreen] = useState(40);
    const changeScreen = () => {
        setScreen(screen + 1);

    }

    const funcWinClient = () => {
        nextLevel();
    }
    const startGame = () => {
        setScreen(screen + 1);
        changeQuestion(1);
        // dispatch(setTimer(true));
    }

    const [question, setQuestion] = useState(-1);
    const changeQuestion = (data: number) => {
        setQuestion(data);
    }


    return (
        <>
            {screen === 41 &&
                <ScreenBlur>
                    <Popup text="Ты не только правильно общаешься <br> с клиентами, но и умеешь проводить <br> диагностику кожи и делать макияж. <br> Ты можешь стать наставником для новых <br> сотрудников и поделиться с ними <br> опытом и знаниями. Чтобы помочь <br> сотруднику, нажми на него и выбер <br> и правильный ответ из предложенных." textBtn="Начать" title="Теперь ты опытный консультант" funcBtn={startGame} />
                </ScreenBlur>}
            {screen === 42 &&
                <ScreenBlur>
                    <div className="modal-cons">
                        <Modal text="Нажми на иконку коллеги, когда там появится вопрос" padding="16px 33px" size="12px" title="" />
                    </div>

                </ScreenBlur>}

            <Experience screen={screen}></Experience>

            <Consultants screen={screen} changeQuestion={changeQuestion} question={question} />

            {(screen === 40) && <StopGame screen={screen} funcBtn={changeScreen} />}
            <Area task={4} screen={screen}></Area>
            <ClientsArea task={4} screen={screen} funcWin={funcWinClient}></ClientsArea>


        </>
    )
}

export default Task4;