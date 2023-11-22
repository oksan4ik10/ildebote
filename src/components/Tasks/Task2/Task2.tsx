import { useState, useMemo, useEffect } from "react";
import { IPropsTask } from "../types";
import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
import Experience from "../../Experience/Experience";
import Area from "../../Area/Area";
import StopGame from "../../utils/StopGame/StopGame";
import Popup from "../../utils/Popup/Popup";
import ClientsArea from "../../ClientsArea/ClientsArea";

import { IClient } from "../../Client/Client";

import { createCheckArea } from "../../../store/reducers/checkAreaReducer";
import { setArrClients } from "../../../store/reducers/arrClientsReducer";
import { useAppDispatch } from "../../../store/store";

import src1 from "../../../assets/images/clients/1-1.png";
import src2 from "../../../assets/images/clients/1-2.png";
import src3 from "../../../assets/images/clients/1-3.png";

function Task2(props: IPropsTask) {
    const { nextLevel } = props;
    console.log("task2");
    const dispatch = useAppDispatch();


    const [screen, setScreen] = useState(20);
    const changeScreen = () => {
        setScreen(screen + 1);
    }

    const funcWinClient = () => {
        ("win!");
        nextLevel();
    }

    const arrClients: IClient[] = useMemo(() => [
        {
            id: "1",
            category: 1,
            img: src1,
            check: "wait",
            timeClass: "waitTime"
        },
        {
            id: "2",
            category: 7,
            img: src2,
            check: "wait",
            timeClass: "waitTime"
        },
        {
            id: "3",
            category: 1,
            img: src3,
            check: "wait",
            timeClass: "waitTime"
        },
        {
            id: "4",
            category: 5,
            img: src3,
            check: "wait",
            timeClass: "waitTime"
        }
    ], [])

    useEffect(() => {
        dispatch(createCheckArea(["wait", "wait", "wait", "wait"])); //площадки, которые работают в данном таске
        dispatch(setArrClients(arrClients));

    }, [dispatch, arrClients])

    return (
        <>
            {screen === 21 &&
                <ScreenBlur>
                    <Popup text="В ИЛЬ ДЕ БОТЭ много обучения — сотрудники проходят тренингипо технике продаж, уходу за кожей, подбору парфюмерии, макияжуи другим темам.<br><br>Чтобы успешно справиться с работой консультанта, необходимо понимать, как вести себя с клиентом. Давай начнём с изучения техники продаж!" textBtn="Давай" title="Очаровывай клиентов и развивай магазин!" funcBtn={changeScreen} />
                </ScreenBlur>}

            <Experience screen={screen}></Experience>
            <Area task={2} screen={screen}></Area>
            <ClientsArea task={2} screen={screen} funcWin={funcWinClient}></ClientsArea>
            {(screen === 20) && <StopGame screen={screen} funcBtn={changeScreen} />}


        </>
    )
}

export default Task2;