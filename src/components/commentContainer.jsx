import React from 'react'
import Coment from './Coment'

const CommentList=({comments})=>{
    return(
        <div>
            {
                comments.map((comment,index)=>{
                    return (
                        <div>
                        <div className='ml-7 my-2 pt-1 pl-3 border-l-[2px] border-slate-950'>
                            <Coment data={comment} />
                        </div>
                        <div className='ml-7 my-2 pt-1 pl-3 border-l-[2px] border-slate-950' >
                          <CommentList comments={comment.replies} />
                        </div>
                        </div>
                    )
                })
            }
          
        </div>
    )
}

const CommentContainer = () => {

    const comments=[
        {
            name:'rahul tevatiya',
            text:' bolo mere sang jay hind jay hind jay hind',
            replies:[

            ]
        }, {
            name:'rahul tevatiya',
            text:' bolo mere sang jay hind jay hind jay hind',
            replies:[
                {
                    name:'rahul tevatiya',
                    text:' bolo mere sang jay hind jay hind jay hind',
                    replies:[
                        {
                            name:'rahul tevatiya',
                            text:' bolo mere sang jay hind jay hind jay hind',
                            replies:[
                                
                            ]
                        },
                        {
                            name:'rahul tevatiya',
                            text:' bolo mere sang jay hind jay hind jay hind',
                            replies:[
                                {
                                    name:'rahul tevatiya',
                                    text:' bolo mere sang jay hind jay hind jay hind',
                                    replies:[
                                        {
                                            name:'rahul tevatiya',
                                            text:' bolo mere sang jay hind jay hind jay hind',
                                            replies:[
                                                {
                                                    name:'rahul tevatiya',
                                                    text:' bolo mere sang jay hind jay hind jay hind',
                                                    replies:[
                                                        
                                                    ]
                                                } 
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name:'rahul tevatiya',
                    text:' bolo mere sang jay hind jay hind jay hind',
                    replies:[
                        
                    ]
                },
                {
                    name:'rahul tevatiya',
                    text:' bolo mere sang jay hind jay hind jay hind',
                    replies:[
                        
                    ]
                }
                
            ]
        },
        {
            name:'rahul tevatiya',
            text:' bolo mere sang jay hind jay hind jay hind',
            replies:[ {
                name:'rahul tevatiya',
                text:' bolo mere sang jay hind jay hind jay hind',
                replies:[
                    
                ]
            },
            {
                name:'rahul tevatiya',
                text:' bolo mere sang jay hind jay hind jay hind',
                replies:[
                    
                ]
            }
                
            ]
        },
        {
            name:'rahul tevatiya',
            text:' bolo mere sang jay hind jay hind jay hind',
            replies:[
                
            ]
        },
        {
            name:'rahul tevatiya',
            text:' bolo mere sang jay hind jay hind jay hind',
            replies:[
                {
                    name:'rahul tevatiya',
                    text:' bolo mere sang jay hind jay hind jay hind',
                    replies:[
                        
                    ]
                } 
            ]
        },
        {
            name:'rahul tevatiya',
            text:' bolo mere sang jay hind jay hind jay hind',
            replies:[
                
            ]
        },
        {
            name:'rahul tevatiya',
            text:' bolo mere sang jay hind jay hind jay hind',
            replies:[
                {
                    name:'rahul tevatiya',
                    text:' bolo mere sang jay hind jay hind jay hind',
                    replies:[
                        
                    ]
                } 
            ]
        }
    ]



  return (
    <div>
        commentContainer
        {/* <Coment  data={comments[0]}/> */}
        <CommentList comments={comments} />
    </div>
  )
}

export default CommentContainer