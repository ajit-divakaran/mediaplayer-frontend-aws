import React, { useEffect, useState } from 'react'
import Videocard from '../components/Videocard'
import { addVideoToCategoryApi, getVideosApi } from '../services/allApi'
import { toast } from 'react-toastify'

const Allvideos = ({addVideoStatus,setVideoStatus}) => {

  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus,setDeleteVideoStaus] = useState({})

  //side effect
  const getAllVideo = async()=>{
    const result = await getVideosApi()
    setAllVideos(result.data)
  }

  console.log(allVideos)
const ondrop = (e) =>{
  e.preventDefault();

}
const VideoDrop = async(e) =>{
  const {category,video} = JSON.parse(e.dataTransfer.getData("dataShare"))
  console.log(category, video);

  const newArray = category.allVideos.filter((item)=>item.id!=video.id)
  const newCategory = {
    category:category.category,
    allVideos:newArray,
    id:category.id
  }
  console.log(newCategory)
const result = await addVideoToCategoryApi(category.id,newCategory)
  if(result.status>=200 && result.status<300){
    setVideoStatus(result.data)
    }
}
  //handle side effect

  useEffect(()=>{
    getAllVideo()
  },[addVideoStatus,deleteVideoStatus])  //[]- useEffect is called when the component render to the browser
  return (
    <div droppable onDragOver={(e)=> ondrop(e)} onDrop={(e)=>VideoDrop(e)}>
        <h4>Allvideos</h4>
        {
          allVideos.length>0 ?<div className="container">
          <div className="row">
            {allVideos.map((item)=>(
              <div key={item} className="col-md-3 p-1"><Videocard video={item} setDeleteVideoStaus={setDeleteVideoStaus}/></div>
            ))}

          </div>
      </div>
      :
      <div className="container">
      <div className='d-flex justify-content-center mt-3'>
                      <img src="https://cl2.buscafs.com/www.levelup.com/public/uploads/images/832151/832151_1140x516.jpg" alt="" width={'60%'} height={'250px'} />
                  </div>
      </div>
        }


    </div>
  )
}

export default Allvideos