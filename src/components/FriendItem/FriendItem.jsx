import  css from './FriendItem.module.css'
import PropTypes from 'prop-types';
 export const Friend=({friend:{avatar,name,isOnline},})=>{ return <li className="item">
<span className="status">{isOnline}</span>
<img className={ (isOnline && css.online)|| (css.offline)} src={avatar} alt="User avatar" width="48" />
<p className="name">{name}</p>
</li> }


Friend.propTypes={
  avatar:PropTypes.string,
  name:PropTypes.string,
  isOnline:PropTypes.bool,
  
}