import React from 'react'

function Card() {

  const data=[{img:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9uJTIwYm94fGVufDB8fDB8fHww',name:"Amazon Basics",Discription:"Lorem ipsum dolor sit, amet consectetur adipisicing.",InStock:false},
              {img:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9uJTIwYm94fGVufDB8fDB8fHww',name:"Amazon Basics",Discription:"Lorem ipsum dolor sit, amet consectetur adipisicing.",InStock:true},
              {img:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9uJTIwYm94fGVufDB8fDB8fHww',name:"Amazon Basics",Discription:"Lorem ipsum dolor sit, amet consectetur adipisicing.",InStock:false},
              {img:'https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9uJTIwYm94fGVufDB8fDB8fHww',name:"Amazon Basics",Discription:"Lorem ipsum dolor sit, amet consectetur adipisicing.",InStock:true},
          
             ];
            
 
  return (
    <>
    <div className='w-full h-screen  bg-zinc-200 flex items-center justify-center gap-10'>
     {   data.map((elem,index)=>(
            <div className=' w-52 bg-zinc-100  overflow-hidden  rounded-md' >
            <div className=' w-52 h-40 bg-zinc-300'>
              <img className='w-full h-full object-cover' key={index} src={elem.img}/>
            </div>
                    <div className='w-full px-3 py-4'>
                      <h2 className='font-semibold' key={index}>{elem.name}</h2>
                      <p className='text-sx mt-3 ' key={index}>{elem.Discription}</p>
                      <button className={`mt-2 px-3 py-1 text-sm text-zinc-100 ${elem.InStock?'bg-blue-800 hover:bg-sky-600':'bg-red-700 hover:bg-red-500'}  rounded-md`}>
                        {elem.InStock?"In Stock":"Out of Stock"}</button>
                    </div>
        </div>
        
      ))  
    }
    </div>  

   </>
  )
}

export default Card;
