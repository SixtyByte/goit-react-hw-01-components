function Statistic(props) {
    
    return(<section class="statistics">
    <h2 class="title">Upload stats</h2>
  
    <ul class="stat-list">
      <li class="item">
        <span class="label">{props.stats[0].label}</span>
        <span class="percentage"> {props.stats[0].percentage}%</span>
      </li>
      <li class="item">
        <span class="label">{props.stats[1].label}</span>
        <span class="percentage"> {props.stats[1].percentage}%</span>
      </li>
      <li class="item">
        <span class="label">{props.stats[2].label}</span>
        <span class="percentage"> {props.stats[2].percentage}%</span>
      </li>
      <li class="item">
        <span class="label">{props.stats[3].label}</span>
        <span class="percentage"> {props.stats[3].percentage}%</span>
      </li>
    </ul>
  </section>)
}

export default Statistic;

export const Statistic=({datas})=>{
  return (<section>
<ul class="statistics">
 {datas.map(StatisticItem=>(
 <StatisticItem key={StatisticItem.id} StatisticItem={data}/>))}
 </ul>
 </section>
 )
 }

export const StatisticItem=({friend:{avatar,name,isOnline},})=>{ return <li class="item">
<span class="status">{isOnline}</span>
<img class="avatar" src={avatar} alt="User avatar" width="48" />
<p class="name">{name}</p>
</li> }
