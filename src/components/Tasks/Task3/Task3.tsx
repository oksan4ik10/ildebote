import { useState, useEffect } from "react";
import { IPropsTask } from "../types";
import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
import Experience from "../../Experience/Experience";
import Area from "../../Area/Area";
import StopGame from "../../utils/StopGame/StopGame";
import Popup from "../../utils/Popup/Popup";
import ClientsArea from "../../ClientsArea/ClientsArea";

import { useAppDispatch } from "../../../store/store";
import { setTimer } from "../../../store/reducers/timerReducer";


function Task3(props: IPropsTask) {
    const { nextLevel } = props;
    const dispatch = useAppDispatch();


    const [screen, setScreen] = useState(30);

    const funcWinClient = () => {
        setScreen(screen + 1);
        nextLevel();

        // dispatch(setTimer(false));
    }
    const startGame = () => {
        setScreen(screen + 1);
        dispatch(setTimer(true));
    }

    useEffect(() => {
        setTimeout(() => setScreen(screen + 1), 1000)
    }, [])


    return (
        <>
            {screen === 31 &&
                <ScreenBlur>
                    <Popup text="В ней консультант может провести клиенту диагностику кожи, поделиться экспертизой и подобрать подходящую программу ухода. Чтобы предоставить данный сервис, пригласи клиента в кабину красоты. Это займет 3 секунды, но принесет больше опыта. Постарайся помочь всем клиентам!" textBtn="Хорошо" title="В магазине появилась <br> кабина красоты!" funcBtn={startGame} />
                </ScreenBlur>}

            <Experience screen={screen}></Experience>

            {(screen === 30) && <StopGame screen={screen} />}
            <Area task={3} screen={screen}></Area>
            <ClientsArea task={3} screen={screen} funcWin={funcWinClient}></ClientsArea>


        </>
    )
}

export default Task3;