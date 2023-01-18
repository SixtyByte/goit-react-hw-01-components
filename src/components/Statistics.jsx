import PropTypes from 'prop-types';

export const Statistic=({tittle,stats})=>  {
  
    
    return(
      <div>
        {tittle &&<h2 className='title'>{tittle}</h2>}
      <ul>
      {stats.map(({id,label,percentage})=>(
      <li key={id} className="item">
        <span className="label">{label}</span>
        <span className="percentage"> {percentage} %</span>
      </li>))}</ul>
      </div>
)}

Statistic.propTypes={
 stats:PropTypes.number && PropTypes.array,
 typestat:PropTypes.array

}