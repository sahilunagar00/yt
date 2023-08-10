import { useEffect,useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { closeMenu } from '../utils/cartSlice'
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './commentContainer';
import LiveChat from './LiveChat';
import {addChats} from '../utils/chatSlice'
import {generate} from '../helper/nameGenrate'
import {makeid } from '../helper/textGenrator'


const Watch = () => {
  const dispatch = useDispatch();
  const chatselect=useSelector(store => store.chat.message);

  const [sendLiveChat, setsendLiveChat] = useState('')

  const [searchparams] = useSearchParams();
  const video_id = searchparams.get("v");
  // console.log(ans);
  function hanelSEndButton(){
    dispatch(addChats({
      name:'sahil',
      text:sendLiveChat,
    }))
    setsendLiveChat('')
  }


  useEffect(() => {

    // close();
    dispatch(closeMenu());
    const itr=setInterval(() => {
      dispatch(addChats({
        name:generate(),
        text:makeid(15)+' '+makeid(15)+' '+makeid(15)+' '+makeid(15),
      }))
    }, 500);
    
    return ()=>{clearInterval(itr)}

  }, []);

  

  return (
    <div className='flex p-0 m-0  ' >
    <div className='m-1 p-2 pr-0 rounded-lg shadow-gray-300  ' >
      <iframe 
        width="850" 
        height="450" 
        // className='sticky top-2 m-2  '
        src={"https://www.youtube.com/embed/"+video_id} 
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>

        </iframe>
        <div className='w-[800px] m-4' >
    <CommentContainer/>
    </div>
    </div>
   
    <div className='w-[450px] ml-2 my-5 p-2 h-[450px] border border-black sticky top-1 right-7   '>
      <h2 className='w-[450px] m-2 my-2 '>live chat</h2>
        <div className='h-[400px] overflow-y-scroll flex flex-col-reverse '>
        {
        chatselect.map((chat,idx)=>{
          return <LiveChat key={idx} chat={chat} />
        })
      }
        
    </div>
    <div className='w-[440px]  my-2 border border-black '>
      <input className='w-[370px] border border-black m-1 px-2 '  type="text" value={sendLiveChat} onChange={(e)=>setsendLiveChat(e.target.value)} />
      <button className=' border border-black rounded-lg px-2 bg-slate-100 font-bold'  onClick={()=>hanelSEndButton()} >send</button>
    </div>
    </div>
      
    </div>
  )
}

export default Watch;