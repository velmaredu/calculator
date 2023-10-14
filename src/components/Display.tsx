import { Container } from "react-bootstrap";

type DisplayProps = {
    input: string
}

function Display(props: DisplayProps) {
    return (
        <Container fluid id="display" className="rounded">
            {props.input}
        </Container>
    );
}

export default Display;