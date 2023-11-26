import { useEffect, useState } from "react";
import { IPropsTask } from "../types";
import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
import Experience from "../../Experience/Experience";
import Area from "../../Area/Area";
import StopGame from "../../utils/StopGame/StopGame";
import Popup from "../../utils/Popup/Popup";
import ClientsArea from "../../ClientsArea/ClientsArea";

import Test from "../../utils/Test/Test";
import Dialog from "../../utils/Dialog/Dialog";

import "./Task4.css"

import Modal from "../../utils/Modal/Modal";


import { useAppDispatch } from "../../../store/store";
import { setTimer } from "../../../store/reducers/timerReducer";
import Consultants from "./Consultants/Consultants";
import { setWidth } from "../../../store/reducers/arrClientsReducer";


function Task4(props: IPropsTask) {
    const { nextLevel } = props;
    const dispatch = useAppDispatch();


    const [screen, setScreen] = useState(40);


    const funcWinClient = () => {
        nextLevel();
    }
    const startGame = () => {
        setScreen(screen + 1);
        setQuestion(1);
    }

    const [question, setQuestion] = useState(-1);


    const funcWinTest = () => {

        dispatch(setWidth(1))
        setQuestion(question + 1);
        dispatch(setTimer(true));

    }
    const openTest = () => {
        if (question === 1) setScreen(screen + 1); //для zIndex в консультантах
        dispatch(setTimer(false));
        setQuestion(question + 1);
    }

    useEffect(() => {
        if (question === 3) {
            setTimeout(() => setQuestion(question + 1), 2000)

        }
        if (question === 6) {
            setTimeout(() => setQuestion(question + 1), 5000)

        }
    })

    useEffect(() => {
        dispatch(setTimer(false));
        setTimeout(() => setScreen(screen + 1), 1000)
    }, [])





    return (
        <>
            {screen === 41 &&
                <ScreenBlur>
                    <Popup text="Ты не только правильно общаешься <br> с клиентами, но и умеешь проводить <br> диагностику кожи и делать макияж. <br> Ты можешь стать наставником для новых <br> сотрудников и поделиться с ними <br> опытом и знаниями. Чтобы помочь <br> сотруднику, нажми на него и выбер <br> и правильный ответ из предложенных." textBtn="Начать" title="Теперь ты опытный консультант" padding="25px 16px" funcBtn={startGame} />
                </ScreenBlur>}
            {screen === 42 &&
                <ScreenBlur>
                    <div className="modal-cons">
                        <Modal text="Нажми на иконку коллеги, когда там появится вопрос" padding="16px 33px" size="12px" title="" />
                    </div>

                </ScreenBlur>}

            {question === 2 &&
                <ScreenBlur>
                    <Test funcWin={funcWinTest} task={2} />
                </ScreenBlur>}
            {question === 8 &&
                <ScreenBlur>
                    <Test funcWin={funcWinTest} task={3} />
                </ScreenBlur>}

            {question === 5 &&
                <ScreenBlur>
                    <Dialog screen={49} funcBtn={funcWinTest} />
                </ScreenBlur>}
            <Experience screen={screen}></Experience>

            <Consultants openTest={openTest} screen={screen} question={question} />

            {(screen === 40) && <StopGame screen={screen} />}
            <Area task={4} screen={screen}></Area>
            <ClientsArea task={4} screen={screen} funcWin={funcWinClient}></ClientsArea>


        </>
    )
}

export default Task4;