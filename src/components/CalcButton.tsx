import { Button } from "react-bootstrap";

type CalcButtonProps = {
    id: string,
    value: string,
    manageClick: Function
};

function CalcButton(props: CalcButtonProps) {
    return (
        <Button id={props.id}
            className={(props.value === "0" ? "double-width" : "") + (isOperator(props.value) ? " operator" : "")}
            onClick={() => props.manageClick(props.value)}
            data-key={props.value}>
            {props.value}
        </Button>
    );
};

function isOperator(value: string) {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(value);
}

export default CalcButton;