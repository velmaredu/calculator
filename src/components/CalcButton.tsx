import { Button } from "react-bootstrap";

type CalcButtonProps = {
    id: string,
    value: string,
    manageClick: Function
};

function CalcButton(props: CalcButtonProps) {
    return (
        <Button id={props.id}
            className={props.value === "0" ? "double-width" : ""}
            onClick={() => props.manageClick(props.value)}>
            {props.value}
        </Button>
    );
};

export default CalcButton;