import { Friend } from "./Friend"

export const FriendsList=({friends})=>{
 return (<ul class="friend-list">
{friends.map(friend=>(
<Friend key={friend.id} friend={friend}/>))}
</ul>
)
}
