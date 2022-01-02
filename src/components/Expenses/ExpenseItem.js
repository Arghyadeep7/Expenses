import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const deleteHandler=() => {
    props.onDelete(props.id);
  }
  
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button className="delete-button" onClick={deleteHandler}><i class="fas fa-trash-alt fa-2x"></i></button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
