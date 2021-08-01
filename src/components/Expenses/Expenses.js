import React from 'react';
import './Expenses.css';
import ExpenseItems from './ExpenseItems';

function Expenses(props) {
    const expenses = props.data;
    return (
        <div className='expenses'>
            {expenses.map((item) => (
                <ExpenseItems
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                ></ExpenseItems>
            ))}
        </div>
    );
}

export default Expenses;
