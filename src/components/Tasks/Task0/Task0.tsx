import Area from "../../Area/Area";
import Popup from "../../utils/Popup/Popup";
import "./Task0.css";
import { IPropsTask } from "../types";
import ScreenBlur from "../../utils/ScreenBlur/ScreenBlur";
import logoSrc from "../../../assets/images/logo.png"

function Task0(props: IPropsTask) {
    const { nextLevel } = props;
    const delayNext = () => {
        setTimeout(nextLevel, 100)
    }

    return (
        <>
            <Area task={0}></Area>
            <ScreenBlur>
                <div className="screen-1">
                    <div className="logo">
                        <img src={logoSrc} alt="logo" />
                    </div>
                    <Popup title="ПРИВЕТСТВУЕМ ТЕБЯ В ИЛЬ ДЕ БОТЭ!" text="Познакомься с компанией поближе в нашей игре — ты узнаешь о профессии консультанта и тонкостях бьюти-индустрии много интересного, а в конце получишь шанс стать обладателем приятного приза! Начнём?" size="14px" padding="20px" funcBtn={delayNext} textBtn="Начнем" classBtn="screen__btn"></Popup>
                </div>
            </ScreenBlur>
            </>
                )
           
    
}

export default Task0;                        