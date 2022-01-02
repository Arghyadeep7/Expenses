import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const dropDownYearChangeHandler=(event)=>{
    props.onYearFilterChange(event.target.value);
  };

  const dropDownMonthChangeHandler=(event)=>{
    props.onMonthFilterChange(event.target.value);
  };

  
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <select value={props.selectedMonth} onChange={dropDownMonthChangeHandler}>
          <option value='Entire Year'>Entire Year</option>
          <option value='0'>JAN</option>
          <option value='1'>FEB</option>
          <option value='2'>MAR</option>
          <option value='3'>APR</option>
          <option value='4'>MAY</option>
          <option value='5'>JUN</option>
          <option value='6'>JUL</option>
          <option value='7'>AUG</option>
          <option value='8'>SEP</option>
          <option value='9'>OCT</option>
          <option value='10'>NOV</option>
          <option value='11'>DEC</option>
        </select>
        <select value={props.selectedYear} onChange={dropDownYearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;