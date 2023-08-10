import React from 'react'

const VideoHorizontalCard = ({data}) => {
  console.log(data);
  return (
    <div  className='  grid-cols-12 flex border border-blue-200 w-[1100px] my-1  '>
      <img src={data?.snippet?.thumbnails?.medium?.url
} alt="" className='w-[300px] h-[180px] m-4 rounded-lg '  />
      <div className=' inline-block  content-center  my-10 px-1 mx-1'>
        <h2>{data?.snippet?.title}</h2>
        <div className='flex' >
          <h3>{data?.statistics?.viewCount+'  views'} </h3>
          <h3 className='mx-3'>{data?.snippet?.publishedAt
}</h3>
        </div>
        <div  className='flex' >
          <img src='https://yt3.ggpht.com/v_PwNTRdcmpaEU6zh9wytm0ERtq2BOAmBQvr1QyZstphlpcPUqjbX3wqIvSRR9bWIgSjmRUJcwE=s68-c-k-c0x00ffffff-no-rj' alt="" className='w-8 h-8' />
          <h3>{data?.snippet?.channelTitle  }</h3>
        </div>
        <h3>{data?.snippet?.localized?.description.slice(0,180)+'...'
  }</h3>
      </div>

        

    </div>
  )
}

export default VideoHorizontalCard