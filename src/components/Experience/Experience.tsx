import "./Experience.css";
import likeSrc from "../../assets/images/like.png"
import { useAppSelector } from "../../store/store";


function Experience() {
    const widthExperience = useAppSelector((state) => state.pointsReducer).width;
    return (
        <>
            <div className="experience">
                <div className="progress">
                    <span style={{ "width": `${widthExperience}px` }}></span>
                    <img src={likeSrc} alt="like" />
                </div>

            </div >
        </>
    )
}

export default Experience;