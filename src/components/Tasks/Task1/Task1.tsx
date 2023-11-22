import { useEffect, useState, useMemo } from "react";
import { IPropsTask } from "../types";
import Experience from "../../Experience/Experience";
import { useAppDispatch } from "../../../store/store";
import Area from "../../Area/Area";
import ClientsArea from "../../ClientsArea/ClientsArea";
import "./Task1.css";
import { getClinets } from "../../utils/clients";



import { IClient } from "../../Client/Client";
import { createCheckArea } from "../../../store/reducers/checkAreaReducer";
import { setArrClients } from "../../../store/reducers/arrClientsReducer";
import StopGame from "../../utils/StopGame/StopGame";

import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
import Popup from "../../utils/Popup/Popup";
import Test from "../../utils/Test/Test";
import Dialog from "./Dialog/Dialog";
function Task1(props: IPropsTask) {
    const { nextLevel } = props;
    const dispatch = useAppDispatch();
    const arrClients: IClient[] = useMemo(() => getClinets(0), [])


    useEffect(() => {
        dispatch(createCheckArea(["wait", "wait", "wait"])); //площадки, которые работают в данном таске
        dispatch(setArrClients([arrClients[0]]));

    }, [dispatch, arrClients])

    const [screen, setScreen] = useState(1);

    const changeScreenTest = () => {
        setScreen(7);
    }
    const changeScreen = () => {


        setScreen(screen + 1);
        console.log("change", screen);
    }

    //смена CientsArea
    const funcWinClient = () => {
        if (screen === 7) {
            dispatch(setArrClients([arrClients[1]]));
        }
        if (screen === 10) {
            dispatch(setArrClients([arrClients[2]]));

        }
        changeScreen();
    }




    return (
        <>
            <ScreenBlur screen={screen}>
                {screen === 3 && <Popup text="В ИЛЬ ДЕ БОТЭ много обучения — сотрудники проходят тренингипо технике продаж, уходу за кожей, подбору парфюмерии, макияжуи другим темам.<br><br>Чтобы успешно справиться с работой консультанта, необходимо понимать, как вести себя с клиентом. Давай начнём с изучения техники продаж!" textBtn="Давай" title="Очаровывай клиентов и развивай магазин!" funcBtn={changeScreen} />}
                {screen === 14 && <Popup text="Теперь ты можешь пройти дополнительное обучение и начать оказывать сервис по макияжу." textBtn="Давай" title="У тебя прекрасно получается помогать клиентам!" funcBtn={nextLevel} />}
            </ScreenBlur>

            <Experience screen={screen}></Experience>
            <Area task={1} screen={screen}></Area>
            <ClientsArea task={1} screen={screen} funcWin={funcWinClient}></ClientsArea>
            {(screen < 3 || screen === 4 || screen === 8 || screen === 11) && <StopGame screen={screen} funcBtn={changeScreen} />}
            {(screen > 4 && screen < 7) && <Test task={1} funcWin={changeScreenTest} funcError={changeScreen} />}
            {(screen === 9 || screen === 12) && <Dialog screen={screen} funcBtn={changeScreen} />}

        </>
    )

}

export default Task1;