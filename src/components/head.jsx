import React, { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import youtube from '../images/youtube.png'
import user from '../images/user.png'
import '../App.css'
import { toggle } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'
import { YOUTUBE_SEARCH_SUGESTION } from '../utils/constatnt'
import { searchCache } from '../utils/searchSlice'
import { useSelector } from 'react-redux'
import VideoContainer from '../components/VideoContainer'
import { updateURL, urlonoff } from '../utils/urlSlice'
import { Link } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth"
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'




const Head = () => {
  const [user] = useAuthState(auth);
  const [isUserAvailable, setIsUserAvailable] = useState(false);

  const dispatch = useDispatch();
  const cache = useSelector(store => store.search)
  const useurl = useSelector(store => store.url.url)

  const [query, setquery] = useState('');
  const [sugestion, setsugestion] = useState([]);
  const [issugestion, setissugestion] = useState(false);
  const [selectedCount, setselectedCount] = useState(-1);
  // let url=YOUTUBE_SEARCH_API;

  useEffect(() => {

    if (cache[query]) {
      setsugestion(cache[query]);
    }
    else {
      const timer = setTimeout(() => {
        fetchQueryData()
      }, 200);
      return () => {
        clearTimeout(timer);
      }
    }

  }, [query])

  useEffect(() => {

    window.addEventListener('scroll', () => setissugestion(false));


    return () => {
      window.removeEventListener('scroll', () => setissugestion(false));
    }
  })
  useEffect(() => {
    // const array=query.split(' ');
    // // let url=YOUTUBE_SEARCH_API
    // let payload='';
    // array.map( a=>payload+=a+'%' )
    // dispatch(updateURL(payload));
  }, [query])

  async function fetchQueryData() {
    const data = await fetch(YOUTUBE_SEARCH_SUGESTION + query);
    const json = await data.json();
    setsugestion(json[1]);
    dispatch(searchCache({ [query]: json[1] }))
    // console.log(sugestion);
  }

  function handelMenu() {
    dispatch(toggle());
  }

  function handleKeyDown(e) {
    //  console.log(e.key);
    if (e.key === 'ArrowDown' && selectedCount < sugestion.length - 1) {
      setselectedCount(selectedCount + 1);
    }
    else if (e.key === 'ArrowUp' && selectedCount > 0) {
      setselectedCount(selectedCount - 1)
    } else if (e.key === 'Enter' && selectedCount >= 0 && selectedCount < sugestion.length) {
      setquery(sugestion[selectedCount]);
      dispatch(urlonoff('on'));
      setissugestion(false);
      const array = sugestion[selectedCount].split(' ');
      let payload = '';
      array.map(a => payload += a + '%')
      dispatch(updateURL(payload));
      <VideoContainer />
    }

  }
  function handelOnClick(e) {
    setissugestion(true);
    setquery('')
    setselectedCount(-1)


  }

  // sign-in popup
  const loginHandler = async () => {
    try {
      await signInWithPopup(auth, provider);
      setIsUserAvailable(true);
    }
    catch (err) {
      window.alert(err)
    }

    console.log(user)
  }

  //logout
  const logoutHandler = async() => {
    await auth.signOut();
    setIsUserAvailable(false);
  }

  // show user name
  // useEffect(() => {
  //   if (user) {
  //     setIsUserAvailable(true);
  //   }
  //   else {
  //     setIsUserAvailable(false);
  //   }
  // }, [user])

  return (
    <div className='grid  grid-cols-10 h-16 justify-center items-center shadow-md ' >
      <div className='flex col-span-1  justify-evenly ' >
        <AiOutlineMenu className='h-8' onClick={() => handelMenu()} ></AiOutlineMenu>
        <img className='h-8' alt='youtube' src={youtube} />

      </div>
      <div className='col-span-8 h-8 flex  justify-center  ' >
        <div>
          <input className='border w-80 rounded-l-full px-2 py-[2px]  ' type="text" value={query} onChange={(e) => setquery(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            onFocus={() => setissugestion(true)}
            onBlur={() => setissugestion(false)}
            onScroll={() => setissugestion(false)}
            onClick={(e) => { handelOnClick(e) }} />
          <button className='w-30 border rounded-r-full w-16 py-[2px] bg-slate-100' >🔍</button>

          <div className='fixed bg-white px-2 w-[20rem]  rounded-lg  ' >
            <ul  >
              {
                issugestion && sugestion.map((s, idx) => {
                  return <li key={idx} className={`border-b-[1px] my-1 ${idx === selectedCount ? ('color=red') : ('color=blue')}  hover:bg-gray-200`}
                  >{s}</li>
                  // console.log(s);
                })
              }
            </ul>
          </div>
        </div>



      </div>
      <div className='col-span-1 h-8 w-8 flex justify-center' >
        {!isUserAvailable && <button onClick={loginHandler}>Sign-in With Google</button>}
        {isUserAvailable && <button onClick={logoutHandler}>Logout</button>}
      </div>
    </div>
  )
}

export default Head;