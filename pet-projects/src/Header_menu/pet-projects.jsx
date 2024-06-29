import React, { useState } from "react";
import Calculator from "../Pet-projects/Calc-credit/credit";

function Pet_projects() {

    const [showCalculator, setShowCalculator] = useState(false);

    // Функция для переключения видимости калькулятора
    const toggleCalculator = () => {
        setShowCalculator(!showCalculator);
    };


    return (
        <div className="pet_projects">
            <div className="btn-pet">
                <ul>
                    <li><button onClick={toggleCalculator}>{showCalculator ? 'Hide Calculator' : 'Show Calculator'}</button>
                    </li>
                </ul>
            </div>
            {showCalculator && <Calculator />}
        </div>
    )
}

export default Pet_projects;