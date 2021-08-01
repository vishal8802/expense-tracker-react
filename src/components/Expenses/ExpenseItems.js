import React, { useState } from 'react';
import './ExpenseItems.css';
import ExpenseDate from './ExpenseDate';
import Button from '../utils/Button';
function ExpenseItems(props) {
    let expenseDate = props.date;
    // let expenseTitle = props.title;
    let expenseAmount = props.amount;

    const [expenseTitle, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('updated');
        console.log(expenseTitle);
    };

    return (
        <div className='expense-item'>
            <div>
                <ExpenseDate date={expenseDate}></ExpenseDate>
            </div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
            <Button
                className='transparent white xx'
                value={<i className='far fa-edit'></i>}
                onClick={clickHandler}
            ></Button>
            <Button
                className='transparent red xx'
                value={<i className='far fa-trash-alt'></i>}
            ></Button>
        </div>
    );
}

export default ExpenseItems;
