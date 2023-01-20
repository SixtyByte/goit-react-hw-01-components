import { Friend } from "../FriendItem/FriendItem"
import './FriendList.module.css' 

export const FriendsList=({friends})=>{
 return (<ul className="friend-list">
{friends.map(friend=>(
<Friend key={friend.id} friend={friend}/>))}
</ul>
)
}
