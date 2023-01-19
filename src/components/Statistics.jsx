import PropTypes from 'prop-types';
import '../styles/Statistics.css'
export const Statistic=({title,stats})=>  {
  
    
    return(
      <div className='statistic__section'>
        {title &&<h2 className='title'>{title}</h2>}
      <ul className='stats__list'>
      {stats.map(({id,label,percentage})=>(
      <li key={id} className="item">
        <span className="label"> {label} <br /></span>
        <span className="percentage">  {percentage}%</span>
      </li>))}</ul>
      </div>
)}

Statistic.propTypes={
 stats:PropTypes.number && PropTypes.array,
 typestat:PropTypes.array

}