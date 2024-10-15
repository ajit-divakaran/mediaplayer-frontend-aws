import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Videocard from "../components/Videocard";
import {
  addCategoryApi,
  addVideoToCategoryApi,
  deleteCategoryApi,
  getAllCategoryApi,
} from "../services/allApi";
import { toast } from "react-toastify";

const Category = ({ videoStatus }) => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [addCategoryStatus, setAddCategoryStatus] = useState({});
  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState({});
  const [videoCategoryStatus, setVideoCategoryStatus] = useState({});
  const handleCancel = () => {
    setCategoryName("");
  };

  const ondrop = (e) => {
    e.preventDefault();
  };

  const VideoDrop = async (e, categoryDetails) => {
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"));
    console.log(videoDetails);
    if (categoryDetails.allVideos.find((item) => item.id == videoDetails.id)) {
      toast.error("Video already present in the category");
    } else {
      categoryDetails.allVideos.push(videoDetails);
      
      const result = await addVideoToCategoryApi(categoryDetails.id,categoryDetails);
      if (result.status >= 200 && result.status < 300) {
        toast.success("Video added");
        setVideoCategoryStatus(result.data);
      } else {
        toast.error("Something wengt wrong");
      }
    }
  };

  const VideoDrag = (e, video, category) => {
    console.log(video);
    console.log(category);

    const dataShare = {
      category,
      video,
    };

    e.dataTransfer.setData("dataShare", JSON.stringify(dataShare));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    handleCancel();
    setShow(true);
  };
  const handleCategoryInput = (e) => {
    console.log(e.target.value);
    setCategoryName(e.target.value);
    console.log(categoryName);
  };

  const handleAdd = async () => {
    if (categoryName) {
      const reqBody = {
        category: categoryName,
        allVideos: [],
      };

      const result = await addCategoryApi(reqBody);
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success("Category added successfully");
        setAddCategoryStatus(result.data);
        handleClose();
      } else {
        toast.error("Something went wrong");
      }
    } else {
      toast.info("Please add a category name");
    }
  };

  const getCategory = async () => {
    const result = await getAllCategoryApi();
    console.log(result);
    setAllCategory(result?.data);
    console.log(allCategory)
  };

  const handleDelete = async (id) => {
    const result = await deleteCategoryApi(id);

    console.log(result.data);

    if (result.status >= 200 && result.status < 300) {
      setDeleteCategoryStatus(result.data);
    }
  };

  // console.log(allCategory)

  // useEffect(() => {
  //   getCategory()
  // },[addCategoryStatus,
  //   deleteCategoryStatus,
  //   videoCategoryStatus,
  //   videoStatus,
  // ]);

  useEffect(()=>{getCategory()},[addCategoryStatus,deleteCategoryStatus,videoStatus])

  return (
    <>
      <h4>Category</h4>
      <Button onClick={handleShow} className="w-100 mt-3 btn btn-warning">
        Add Category
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-3 border border-secondary border-2 rounded">
            <input
              type="text"
              placeholder="Category Name"
              value={categoryName}
              className="form-control"
              onChange={handleCategoryInput}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-dark text-light" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn btn-warning" onClick={handleAdd}>
            <FontAwesomeIcon
              icon={faPlus}
              className="me-2 bg-transparent"
              style={{ color: "black" }}
            />
            Add
          </button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length &&
        allCategory?.map((item) => (
          <div
            key={item?.id}
            className="border border-secondary border-2 p-3 rounded mt-3"
            droppable
            onDragOver={(e) => ondrop(e)}
            onDrop={(e) => VideoDrop(e, item)}
          >
            <div className="d-flex justify-content-between">
              <h5>{item?.category}</h5>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item?.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            {item?.allVideos?.length > 0 &&
              item?.allVideos?.map((video) => (
                <div
                  key={video}
                  draggable
                  onDragStart={(e) => VideoDrag(e, video, item)}
                >
                  <Videocard video={video} isPresent={true} />
                </div>
              ))}
          </div>
        ))}
    </>
  );
};

export default Category;
