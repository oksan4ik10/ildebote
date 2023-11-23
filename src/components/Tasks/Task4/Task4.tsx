import { useState } from "react";
import { IPropsTask } from "../types";
import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
import Experience from "../../Experience/Experience";
import Area from "../../Area/Area";
import StopGame from "../../utils/StopGame/StopGame";
import Popup from "../../utils/Popup/Popup";
import ClientsArea from "../../ClientsArea/ClientsArea";


import { useAppDispatch } from "../../../store/store";
import { setTimer } from "../../../store/reducers/timerReducer";


function Task4(props: IPropsTask) {
    const { nextLevel } = props;
    const dispatch = useAppDispatch();


    const [screen, setScreen] = useState(30);
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
            {screen === 31 &&
                <ScreenBlur>
                    <Popup text="Ты не только правильно общаешься <br> с клиентами, но и умеешь проводить <br> диагностику кожи и делать макияж. <br> Ты можешь стать наставником для новых <br> сотрудников и поделиться с ними <br> опытом и знаниями. Чтобы помочь <br> сотруднику, нажми на него и выбер <br> и правильный ответ из предложенных." textBtn="Начать" title="Теперь ты опытный консультант" funcBtn={startGame} />
                </ScreenBlur>}

            <Experience screen={screen}></Experience>

            {(screen === 30) && <StopGame screen={screen} funcBtn={changeScreen} />}
            <Area task={3} screen={screen}></Area>
            <ClientsArea task={3} screen={screen} funcWin={funcWinClient}></ClientsArea>


        </>
    )
}

export default Task4;