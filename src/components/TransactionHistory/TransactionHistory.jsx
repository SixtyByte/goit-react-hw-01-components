import PropTypes from 'prop-types';
import  css from './TransactionHistory.module.css' ;
export const TransactionHistory=({items})=>  {
  
    
    return(
      <div>
      <table className={css.transactionhistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th className={css.amount}>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
      {items.map(({id,type,amount,currency})=>(
     <tr key={id}>
     <td>{type}</td>
     <td>{amount}</td>
     <td>{currency}</td>
   </tr>))}</tbody></table>
      </div>
)}

TransactionHistory.propTypes={
    items:PropTypes.number && PropTypes.array}