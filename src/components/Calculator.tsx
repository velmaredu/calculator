import { evaluate } from "mathjs";
import { useState } from "react";
import CalcPad from "./CalcPad";
import Display from "./Display";

function Calculator() {
    const operatorRegEx = /[-+*/]/;
    const [input, setInput] = useState("");
    const [result, setResult] = useState(false);

    const addInput = (val: string) => {
        if (result) {
            if (!val.match(operatorRegEx)) {
                setInput(val);
            } else {
                processVal(val);
            }
            setResult(false);
        } else {
            processVal(val);
        }
    }

    const processVal = (val: string) => {
        let lastNumber = input.split(operatorRegEx).pop();
        if (!(val === '.' && lastNumber && lastNumber.includes('.'))) {
            if (!input && val === ".") {
                setInput("0.");
            } else if (input === "0") {
                setInput(val);
            } else {
                setInput(input + val);
            }
        }
    }

    const clearInput = () => {
        setInput("0");
    }

    const getResult = () => {
        setResult(true);
        if (input) {
            try {
                let expression = input.replace(/([-+*/]+)/g, (_, group) => {
                    let length = group.length;
                    let lastOperator = group.charAt(length - 1);
                    if (lastOperator === '-') {
                        return group.substring(length - 2, length);
                    } else {
                        return lastOperator;
                    }
                });
                const result = evaluate(expression).toString();
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