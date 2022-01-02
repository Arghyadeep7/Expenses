import {useState} from 'react';
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


const NewExpense=(props)=>{

    const [flag,setFlag]=useState(false);

    const startEditingHandler=()=>{
        setFlag(true);
    };

    const stopEditingHandler=()=>{
        setFlag(false);
    };

    const saveExpenseDatahandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
    return(
        <div className="new-expense">
            {!flag && <button onClick={startEditingHandler}>Add an Expense!</button>}
            {flag && <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancel={stopEditingHandler}/>}
        </div>
    );
}

export default NewExpense;