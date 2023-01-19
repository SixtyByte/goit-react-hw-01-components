import '../styles/Friend.css'
import PropTypes from 'prop-types';
 export const Friend=({friend:{avatar,name,isOnline},})=>{ return <li className="item">
<span className= {isOnline && "Online"}></span>
<img className={"avatar  " +(isOnline && "online") } src={avatar} alt="User avatar" width="48" />
<p className="name">{name}</p>
</li> }


Friend.propTypes={
  avatar:PropTypes.string,
  name:PropTypes.string,
  isOnline:PropTypes.bool,
  
}