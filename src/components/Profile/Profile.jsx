import PropTypes from 'prop-types';
import css from './Profile.module.css'
function Profile(props) {
    
    return(<div className={css.profile}>
    <div className={css.description}>
      <img
        src={props.avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{props.username}</p>
      <p className={css.tag}>@{props.tag}</p>
      <p className={css.location}>{props.location}</p>
    </div>
  
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers:</span>
        <span className={css.quantity}> {props.stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views:</span>
        <span className={css.quantity}> {props.stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes:</span>
        <span className={css.quantity}> {props.stats.likes}</span>
      </li>
    </ul>
  </div>)
}

export default Profile;
Profile.propTypes={
  username:PropTypes.string,
  tag:PropTypes.string,
  location:PropTypes.string,
  avatar:PropTypes.string,
  
}