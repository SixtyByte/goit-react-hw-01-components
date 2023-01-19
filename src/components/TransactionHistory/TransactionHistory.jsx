import PropTypes from 'prop-types';
import  './TransactionHistory.css' 
export const TransactionHistory=({items})=>  {
  
    
    return(
      <div>
      <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th className='amount'>Amount</th>
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