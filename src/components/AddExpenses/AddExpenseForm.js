import React from 'react';
import './AddExpenseForm.css';
import Button from '../utils/Button';
function AddExpenseForm() {

    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text'></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.1' step='0.1'></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2021-01-01' max={formatDate((new Date()).toString())}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <Button
                    value={<i className='far fa-check-circle'></i>}
                    className='xxx white transparent'
                ></Button>
            </div>
        </form>
    );
}

export default AddExpenseForm;
