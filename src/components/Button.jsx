

const Button=()=>{
    const buttons =['cricket' , 'music','gaming','engineering','ram','sanatani','pets','12th','jee','neet','bord','exam','gtu','cricket' , 'music','gaming','engineering']
    return(
        <ul className="flex flex-wrap col-span-9"  >
            {buttons.map((item , index) =>{
                 return <li className=" m-2 py-2 px-3 bg-green-200 rounded" key={index} >{item}</li>
            })
            }
            
        </ul>
    )
}
export default Button;