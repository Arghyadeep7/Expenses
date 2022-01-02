import {useState} from 'react';
import "./ExpenseForm.css";

const ExpenseForm=(props)=>{

    const [enteredTitle,setEnteredTitle]=useState('');

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    };

    const [enteredAmount,setEnteredAmount]=useState('');

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
    };

    const [enteredDate,setEnteredDate]=useState('');

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);
    };

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:+enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    let max_date='';

    let today=new Date();

    if(today.getMonth()<9){
        if(today.getDate()<10){
            max_date=today.getFullYear()+'-0'+Number(today.getMonth()+1)+'-0'+today.getDate();
        }else{
            max_date=today.getFullYear()+'-0'+Number(today.getMonth()+1)+'-'+today.getDate();
        }
    }else{
        if(today.getDate()<10){
            max_date=today.getFullYear().toString()+'-'+Number(today.getMonth()+1)+'-0'+today.getDate();
        }else{
            max_date=today.getFullYear()+'-'+Number(today.getMonth()+1)+'-'+today.getDate();
        }
    }

    console.log(max_date);
    
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} required/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max={max_date} value={enteredDate} onChange={dateChangeHandler} required/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;