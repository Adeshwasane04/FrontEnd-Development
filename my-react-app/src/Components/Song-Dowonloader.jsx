import React from 'react'

function SongDowonloader() {
    let data=[{ name:"Mahiya ve",
                Description: "Lorem, ipsum dolor dfsd dsd vfsfvsfd adipisicing elit.dahsjd.dsd"},
              { name:"Mitwa",
                Description: "Lorem, ipsum dolor dfsd dsd vfsfvsfd adipisicing elit.dahsjd.dsd"},
              { name:"Apna bana le",
                Description: "Lorem, ipsum dolor dfsd dsd vfsfvsfd adipisicing elit.dahsjd.dsd"}
            ];

    const onDownload=()=>{
        alert("Song Downloaded Sucess");
        
    }
  return (
    
    <div className='w-full h-screen bg-zinc-400 flex  justify-center items-center gap-5'>
       {data.map((elem,index)=>(  
        <div className=' w-60  px-3 py-2   bg-zinc-200 rounded-md  '>
         <h3 className='font-bold' key={index}>{elem.name}</h3>
         <p className='mt-4 text-sm 'key={index}>{elem.Description}</p>
         <button className='px-3 py-1 mt-3 text-white bg-blue-700 hover:bg-blue-500 rounded-md' 
                 onClick={onDownload}
         >Download</button>
       </div>))}
    </div>
   
  )
}

export default SongDowonloader;
