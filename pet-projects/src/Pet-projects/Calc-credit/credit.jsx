import React, { useState } from 'react';
import '../style/petStyle.scss'

function Calculator() {
    // Определяем состояние для всех входных значений и результатов
    const [amount, setAmount] = useState('');
    const [interest, setInterest] = useState('');
    const [years, setYears] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);
    const [totalPayment, setTotalPayment] = useState(null);
    const [totalInterest, setTotalInterest] = useState(null);

    // Функция для расчета ежемесячного платежа
    const calculatePayment = () => {
        const principal = parseFloat(amount);
        const calculatedInterest = parseFloat(interest) / 100 / 12;
        const calculatedPayments = parseFloat(years) * 12;

        // Формула расчета ежемесячного платежа
        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const calculatedMonthlyPayment = (principal * x * calculatedInterest) / (x - 1);

        // Округляем до двух знаков после запятой
        const monthlyPayment = calculatedMonthlyPayment.toFixed(2);
        const totalPayment = (monthlyPayment * calculatedPayments).toFixed(2);
        const totalInterest = (totalPayment - principal).toFixed(2);

        // Обновляем состояние с результатами
        setMonthlyPayment(monthlyPayment);
        setTotalPayment(totalPayment);
        setTotalInterest(totalInterest);
    };

    // Обработка отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        calculatePayment();
    };

    return (
        <div className="calculator">
            <h1>Кредитный <br />калькулятор</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Сумма кредита:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Процентная<br />ставка (%):</label>
                    <input
                        type="number"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Срок (лет):</label>
                    <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        required
                    />
                </div>
                <button className='calc' type="submit">Посчитать</button>
            </form>

            {monthlyPayment !== null && (
                <div id="results">
                    <h2>Результат</h2>
                    <p>Ежемесячный платеж: {monthlyPayment}</p>
                    <p>Полная переплата: {totalPayment}</p>
                    <p>Сумма всех выплат: {totalInterest}</p>
                </div>
            )}
        </div>
    );
}

export default Calculator;
