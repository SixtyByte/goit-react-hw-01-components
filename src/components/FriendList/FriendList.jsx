import { Friend } from "../FriendItem/FriendItem"
import css from './FriendList.module.css' 

export const FriendsList=({friends})=>{
 return (<ul className={css.friendlist}>
{friends.map(friend=>(
<Friend key={friend.id} friend={friend}/>))}
</ul>
)
}
