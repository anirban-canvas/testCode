import SingleItems from "./SingleItem";

export default function Items({itemlist}){

    return(<div className='list'>
        {itemlist.map((item)=>{

                return <SingleItems key={item.id} task={item.task}/>
        })}
       
  
  </div>)



}