import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi'

const Watchinghistory = () => {
    const [allHisVideos, setAllHisVideos] = useState([])
    const [deleteStatus,setDeleteStatus] = useState({})
    const getAllHistoryVideos = async()=>{
        const result = await getAllVideoHistoryApi()
        console.log(result.data)
        setAllHisVideos(result.data)
    }

    const deleteHis = async(id) =>{
        const result = await deleteHistoryVideoApi(id)
        if(result.status>=200 && result.status<300){
            setDeleteStatus(result.data)
        }

    }
console.log(allHisVideos)
   useEffect(()=>{
    getAllHistoryVideos()
   },[deleteStatus]) 
  return (
    <div className='p-4'>
        <div className="d-flex mt-5">
            <h4>Watch History</h4>
            <Link to={'/home'} style={{textDecoration:'none'}} className='ms-auto'>
            <h5><FontAwesomeIcon icon={faHouse}/>Back Home</h5>
            </Link>
        </div>
        <div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 w-100 table-responsive">
{             allHisVideos.length && <table className='table mt-5'>
                <thead>
                    <tr>
                        <th style={{padding:'20 px'}}>SL.NO</th>
                        <th style={{padding:'20 px'}}>Caption</th>
                        <th style={{padding:'20 px'}}>URL</th>
                        <th style={{padding:'20 px'}}>Time stamp</th>
                        <th style={{padding:'20 px'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
{                    allHisVideos?.map((item,index)=>(
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item?.Caption}</td>
                        <td>{item?.url}</td>
                        <td>{item?.time}</td>
                        <td><button className='btn btn-danger' onClick={()=>deleteHis(item?.id)}><FontAwesomeIcon icon={faTrash}/></button></td>
                    </tr>))}
                </tbody>
            </table>}
                </div>
                <div className="col-md-2"></div>
            </div>

        </div>
    </div>
  )
}

export default Watchinghistory