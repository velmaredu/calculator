import { evaluate } from "mathjs";
import { useState } from "react";
import CalcPad from "./CalcPad";
import Display from "./Display";

function Calculator() {
    const [input, setInput] = useState("");

    const addInput = (val: string) => {
        setInput(input + val);
    }

    const clearInput = () => {
        setInput("");
    }

    const getResult = () => {
        if (input) {
            try {
                const result = evaluate(input).toString();
                setInput(result);
            } catch (error) {
                setInput("Error");
            }
        }
    }

    return (
        <div className="calculator bg-white rounded">
            <Display input={input} />
            <CalcPad addInput={addInput} clearInput={clearInput} getResult={getResult} />
        </div>
    );
}

export default Calculator;