import { useEffect, useState } from "react";
import { IPropsTask } from "../types";
import Experience from "../../Experience/Experience";
import { useAppDispatch } from "../../../store/store";
import Area from "../../Area/Area";
import ClientsArea from "../../ClientsArea/ClientsArea";
import "./Task1.css";

import src1 from "../../../assets/images/clients/1-1.png";
import { IClient } from "../../Client/Client";
import { createCheckArea } from "../../../store/reducers/checkAreaReducer";
import { setArrClients } from "../../../store/reducers/arrClientsReducer";
import StopGame from "../../utils/StopGame/StopGame";

import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
import Popup from "../../utils/Popup/Popup";
import Test from "../../utils/Test/Test";
function Task1(props: IPropsTask) {
    // const { nextLevel } = props;
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(createCheckArea(["wait", "wait", "wait"])); //площадки, которые работают в данном таске
        dispatch(setArrClients(arrClients));

    })

    const [screen, setScreen] = useState(1);

    const changeScreenTest = () => {
        setScreen(7);


    }
    const changeScreen = () => {

        setScreen(screen + 1);
    }


    const arrClients: IClient[] = [
        {
            id: "1",
            category: 1,
            img: src1,
            check: "wait",
            timeClass: "waitTime"
        },
    ]


    return (
        <>
            <ScreenBlur screen={screen}>
                {screen === 3 && <Popup text="В ИЛЬ ДЕ БОТЭ много обучения — сотрудники проходят тренингипо технике продаж, уходу за кожей, подбору парфюмерии, макияжуи другим темам.<br><br>Чтобы успешно справиться с работой консультанта, необходимо понимать, как вести себя с клиентом. Давай начнём с изучения техники продаж!" textBtn="Давай" title="Очаровывай клиентов и развивай магазин!" funcBtn={changeScreen} />}
            </ScreenBlur>
            <Experience screen={screen}></Experience>
            <Area task={1}></Area>
            <ClientsArea task={1} screen={screen} funcWin={changeScreen}></ClientsArea>
            {(screen < 3 || screen === 4) && <StopGame screen={screen} funcBtn={changeScreen} />}
            {(screen > 4 && screen < 7) && <Test task={1} funcWin={changeScreenTest} funcError={changeScreen} />}

        </>
    )

}

export default Task1;