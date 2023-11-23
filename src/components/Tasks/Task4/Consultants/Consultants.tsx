//for Task 4
import src1 from "./1.svg";
import src2 from "./2.svg";
import srcQuetion from "./question.svg";
import "./Consultants.css"

interface IProps {
    changeQuestion: (data: number) => void;
    question: number;
    screen: number;
}

function Consultants(props: IProps) {
    const { changeQuestion, question, screen } = props;
    const openDialog = () => {
        if (question === -1) return;
        console.log(23);

    }

    return (
        <>
            <div className="consultants" style={(screen === 42) ? { "zIndex": "99" } : {}} >
                <img src={srcQuetion} alt="question" className={"cons__question " + ((question === 1) ? "first" : (question === 2) ? "second" : "")} />
                <div className="cons" onClick={openDialog}>
                    <img src={src1} alt="cons1" className="cons__img" />

                </div>
                <div className="cons">
                    <img src={src2} alt="cons2" className="cons__img" />
                </div>
            </div>
        </>
    )
}



export default Consultants;