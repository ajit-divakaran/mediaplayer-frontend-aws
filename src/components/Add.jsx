import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = ({setAddVideoStatus,addVideoStatus}) => {
    const [show, setShow] = useState(false);
    const [videoDetails, setVideoDetails]=useState({caption:"",imageUrl:"",embedLink:""})
    const handleClose = () => {
      setShow(false);
      handleCancel()
    };
    const handleShow = () => setShow(true);

    // https://youtu.be/JG7Tggu_wag?si=FKS-mmkC2qHdsb4M
    // const getEmbedLink = (e)=>{
    //   const link = e.target.value;
    //   // const id = link.slice(-11,-1)
    //   if(link.startsWith('https://youtu.be/')){
    //     const embedL = `https://www.youtube.com/embed/${link.slice(17,28)}`
    //     setVideoDetails({...videoDetails, embedLink:embedL})

    //   }

    //   else{
    //     const embedL= `https://www.youtube.com/embed/${link.slice(-11)}`
    //     setVideoDetails({...videoDetails, embedLink:embedL})
    //   }
      
    // }


    const handleCancel = ()=>{
      setVideoDetails({
        caption:"",
        imageUrl:"",
        embedLink:""
      })
    }

    const upload = () =>{
      if(videoDetails.embedLink.startsWith('https://youtu.be/')){
        const embedL = `https://www.youtube.com/embed/${videoDetails.embedLink.slice(17,28)}`
        console.log("condition is true",embedL)
        setVideoDetails({...videoDetails, embedLink:embedL})
      }
      handleAdd()
    }
    const handleAdd = async()=>{
      const {caption, imageUrl, embedLink} = videoDetails

      if(!caption || !imageUrl || !embedLink){
        toast.info("Please fill the form completely")
      }


      else{
        
        // if(videoDetails.embedLink.startsWith('https://youtu.be/')){
          // const embedL = `https://www.youtube.com/embed/${videoDetails.embedLink.slice(17,28)}`
          // setVideoDetails({...videoDetails, embedLink:embedL})
          // const result = await AddVideoApi(videoDetails)
          // console.log(result)
          // if(result.status>=200 && result.status<300){
          //   toast.success('Video Uploaded successfully')
          //   handleClose()
          // }
          // else{
          //   toast.error('Something went wrong')
          //   handleClose()
          // }
        // }
  
        // else{
        //   // const embedL= `https://www.youtube.com/embed/${videoDetails.embedLink.slice(-11)}`
        //   // setVideoDetails({...videoDetails, embedLink:embedL})
        // }

        console.log(videoDetails)
        const result = await AddVideoApi(videoDetails)
        console.log(result)
        if(result.status>=200 && result.status<300){
          toast.success('Video Uploaded successfully')
          setAddVideoStatus(result.data)
          handleClose()
        }
        else{
          toast.error('Something went wrong')
          handleClose()
        }
      }
      }
  
    console.log(videoDetails)
  return (
    <>
    <div className='d-inline-flex gap-2 align-items-center'>
        <h5 className='m-0'> <span className='d-none d-md-inline'>Upload New Video</span></h5>
        {/* <button className='btn' > */}
            <FontAwesomeIcon icon={faCloudArrowUp} onClick={handleShow} className='fa-5'/>
        {/* </button> */}

    </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton closeVariant='white' className='border-none'>
          <Modal.Title className = "text-warning"><FontAwesomeIcon icon={faFilm} className='me-3'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>Please fill the following details</h6>
            <form className = "p-3 border border-light rounded mt-3">
                <div className='mb-3'>
                    <input type="text"placeholder='Video Caption' className='form-control'
                    value={videoDetails.caption} onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})}/>
                </div>
                <div className='mb-3'>
                    <input type="text"placeholder='Video Image' className='form-control' 
                    value={videoDetails.imageUrl}
                    onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})}/>
                </div>
                <div className='mb-3'>
                    <input type="text"placeholder='Video Url' className='form-control'
                    value={videoDetails.embedLink}
                    onChange={(e)=>setVideoDetails({...videoDetails,embedLink:e.target.value})}/>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer className='bg-dark border-none'>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button videoDetails={videoDetails} variant="warning" onClick={upload} >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000} theme='colored'/>
    </>
  )
}

export default Add