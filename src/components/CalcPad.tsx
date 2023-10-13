import { Button, Container } from "react-bootstrap";
import CalcButton from "./CalcButton";

type CalcPadProps = {
    addInput: Function,
    clearInput: Function,
    getResult: Function
};

function CalcPad(props: CalcPadProps) {
    return (
        <Container fluid className="calc-pad">
            <Button id="clear" className="double-width" variant="danger" onClick={() => props.clearInput()}>AC</Button>
            <CalcButton id="divide" manageClick={props.addInput} value={"/"} />
            <CalcButton id="multiply" manageClick={props.addInput} value={"*"} />
            <CalcButton id="seven" manageClick={props.addInput} value={"7"} />
            <CalcButton id="eight" manageClick={props.addInput} value={"8"} />
            <CalcButton id="nine" manageClick={props.addInput} value={"9"} />
            <CalcButton id="subtract" manageClick={props.addInput} value={"-"} />
            <CalcButton id="four" manageClick={props.addInput} value={"4"} />
            <CalcButton id="five" manageClick={props.addInput} value={"5"} />
            <CalcButton id="six" manageClick={props.addInput} value={"6"} />
            <CalcButton id="add" manageClick={props.addInput} value={"+"} />
            <CalcButton id="one" manageClick={props.addInput} value={"1"} />
            <CalcButton id="two" manageClick={props.addInput} value={"2"} />
            <CalcButton id="three" manageClick={props.addInput} value={"3"} />
            <Button id="equals" className="double-height" onClick={() => props.getResult()}>=</Button>
            <CalcButton id="zero" manageClick={props.addInput} value={"0"} />
            <CalcButton id="decimal" manageClick={props.addInput} value={"."} />
        </Container>
    );
}

export default CalcPad;