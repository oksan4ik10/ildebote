//for Task 4
import src1 from "./1.svg";
import src2 from "./2.svg";
import srcQuetion from "./question.svg";
import "./Consultants.css"

interface IProps {
    openTest: () => void;
    question: number;
    screen: number;
}

function Consultants(props: IProps) {
    const { openTest, question, screen } = props;
    const openDialog1 = () => {
        if ((question === 1) || (question === 7)) openTest();
    }
    const openDialog2 = () => {

        if (question === 4) openTest();
    }
    return (
        <>
            <div className="consultants" style={(screen === 42) ? { "zIndex": "99" } : {}} >
                <div className="cons__wrap">
                    <div className="cons" onClick={openDialog1}>
                        <img src={src1} alt="cons1" className="cons__img" />
                    </div>
                    <img src={srcQuetion} alt="question" className={"cons__question " + (((question === 1) || (question === 7)) ? "second" : "")} />
                </div>

                <div className="cons__wrap">
                    <div className="cons" onClick={openDialog2}>
                        <img src={src2} alt="cons2" className="cons__img" />

                    </div>
                    <img src={srcQuetion} alt="question" className={"cons__question " + ((question === 4) ? "second" : "")} />
                </div>

            </div>
        </>
    )
}



export default Consultants;