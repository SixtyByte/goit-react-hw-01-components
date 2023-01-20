import PropTypes from 'prop-types';
import  css from './Statistics.module.css'
export const Statistic=({title,stats})=>  {
  
    
    return(
      <div className={css.statistic__section}>
        {title &&<h2 className={css.title}>{title}</h2>}
      <ul className={css.stats__list}>
      {stats.map(({id,label,percentage})=>(
      <li key={id} className={css.item}>
        <span className={css.label}> {label} <br /></span>
        <span className={css.percentage}>  {percentage}%</span>
      </li>))}</ul>
      </div>
)}

Statistic.propTypes={
 stats:PropTypes.number && PropTypes.array,
 typestat:PropTypes.array

}