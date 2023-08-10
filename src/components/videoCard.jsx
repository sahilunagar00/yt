
function VideoCard({data}){
    const url=data?.snippet?.thumbnails?.medium?.url;
    // console.log(data);

    return (
        <div className="w-[330px] border border-gray-600 rounded items-center my-3   " > 
            <img className="m-auto my-2 rounded "  src={url} alt="thumbnail" />
            <h2 className=" font-bold ml-3 h-12 truncate "   >{data?.snippet?.title?.slice(0,70)+'...'}</h2>
            <h3 className="ml-2 text-left" >{data?.snippet?.channelTitle}</h3>
            <div  className="flex justify-between mx-2 " >
                <h3>{data?.statistics?.viewCount+' views'}</h3>
                <h3>{data?.statistics?.likeCount+' likes'}</h3>
            </div>
        </div>
    )
}
export default VideoCard;