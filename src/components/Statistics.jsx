import PropTypes from 'prop-types';
function Statistic(props) {
    
    return(
      <li class="item">
        <span class="label">{props.stats.label}</span>
        <span class="percentage"> {props.stats.percentage}%</span>
      </li>
)}
export default Statistic;

Statistic.propTypes={
 stats:PropTypes.number,
 typestat:PropTypes.string

}