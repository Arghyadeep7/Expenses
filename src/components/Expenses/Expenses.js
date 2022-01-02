import {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2021');

  const yearFilterChangeHandler=(selectedYear)=>{
    console.log("Expenses.js "+selectedYear);
    setFilteredYear(selectedYear);
  }

  const yearFilteredExpenses=props.items.filter((expense)=>filteredYear===expense.date.getFullYear().toString());

  const [filteredMonth, setFilteredMonth] = useState('Entire Year');

  const monthFilterChangeHandler=(selectedMonth)=>{
    console.log("Expenses.js "+selectedMonth);
    setFilteredMonth(selectedMonth);
  }

  let filteredExpenses=[];

  if(filteredMonth==='Entire Year'){
    filteredExpenses=yearFilteredExpenses;
  }else{
    const monthFilteredExpenses=yearFilteredExpenses.filter((expense)=>filteredMonth===expense.date.getMonth().toString())
    filteredExpenses=monthFilteredExpenses;
  }

  let sum=0;

  for(const amt of filteredExpenses){
      sum += amt.amount;
  }
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selectedYear={filteredYear}
          selectedMonth={filteredMonth}
          onYearFilterChange={yearFilterChangeHandler}
          onMonthFilterChange={monthFilterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} onDeleteExpense={props.onDelete}/>
      </Card>
      <Card className="expenses">
        <div className="expenses-total">TOTAL = $ {sum}</div>
      </Card>
    </div>
  );
}

export default Expenses;
