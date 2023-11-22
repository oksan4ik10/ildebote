import { useState, useMemo } from "react";
import { IPropsTask } from "../types";
import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
import Experience from "../../Experience/Experience";
import Area from "../../Area/Area";
import StopGame from "../../utils/StopGame/StopGame";
import Popup from "../../utils/Popup/Popup";
import ClientsArea from "../../ClientsArea/ClientsArea";

import { IClient } from "../../Client/Client";
import { getClinets } from "../../utils/clients";
import { useAppDispatch } from "../../../store/store";
import { setTimer } from "../../../store/reducers/timerReducer";


function Task2(props: IPropsTask) {

    const arrClients: IClient[] = useMemo(() => getClinets(1), []);
    console.log(arrClients);

    const { nextLevel } = props;
    const dispatch = useAppDispatch();


    const [screen, setScreen] = useState(20);
    const changeScreen = () => {
        setScreen(screen + 1);
    }

    const funcWinClient = () => {
        nextLevel();
    }
    const startGame = () => {
        setScreen(screen + 1);
        dispatch(setTimer(true));
    }


    return (
        <>
            {screen === 21 &&
                <ScreenBlur>
                    <Popup text="Чтобы сделать макияж, перенеси клиента к визажному столику. Это займёт 5 секунд игрового времени и принесёт больше опыта. Помоги всем клиентам, чтобы получить максимум опыта!" textBtn="Хорошо" title="Ты можешь делать <br> макияж клиентам!" funcBtn={startGame} />
                </ScreenBlur>}

            <Experience screen={screen}></Experience>

            {(screen === 20) && <StopGame screen={screen} funcBtn={changeScreen} />}
            <Area task={2} screen={screen}></Area>
            <ClientsArea task={2} screen={screen} funcWin={funcWinClient}></ClientsArea>


        </>
    )
}

export default Task2;