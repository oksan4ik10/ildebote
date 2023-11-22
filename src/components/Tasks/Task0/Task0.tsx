import Area from "../../Area/Area";
import Popup from "../../utils/Popup/Popup";
import "./Task0.css";
import { IPropsTask } from "../types";
import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
import logoSrc from "../../../assets/images/logo.png"

function Task0(props: IPropsTask) {
    const { nextLevel } = props;

    return (
        <>
            <Area task={0}></Area>
            <ScreenBlur>
                <div className="screen-1">
                    <div className="logo">
                        <img src={logoSrc} alt="logo" />
                    </div>
                    <Popup title="ПРИВЕТСТВУЕМ ТЕБЯ <br> В ИЛЬ ДЕ БОТЭ!" text="Познакомься с компанией поближев нашей игре — ты узнаешь <br> о профессии консультанта и тонкостях <br> бьюти-индустрии много интересного, <br> а в конце получишь шанс стать <br> обладателем приятного приза! Начнём?" funcBtn={nextLevel} textBtn="Начнем" />
                </div>
            </ScreenBlur>
        </>
    )
}



export default Task0;                        