import "./Experience.css";
import likeSrc from "../../assets/images/like.png"
import { useAppSelector } from "../../store/store";

interface IProps {
    screen?: number;
}
function Experience(props: IProps) {
    const { screen } = props;

    const widthExperience = useAppSelector((state) => state.arrClientsReducer).width;
    return (
        <>
            <div className="experience" style={screen === 2 ? { "zIndex": "99" } : {}}>
                <div className="progress">
                    <span style={{ "width": `${widthExperience}px` }}></span>
                    <img src={likeSrc} alt="like" />
                </div>

            </div >
        </>
    )
}

export default Experience;