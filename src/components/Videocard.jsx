import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { addVideoHistoryApi, deleteVideoApi } from "../services/allApi";
const Videocard = ({ video, setDeleteVideoStaus, isPresent }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleDelete = async (id) => {
    const result = await deleteVideoApi(id);
    console.log(result.data);
    if (result.status >= 200 && result.status < 300) {
      setDeleteVideoStaus(result.data);
    }
  };
  const handleShow = async () => {
    setShow(true);
    const time = new Date();
    let formatedDate = new Intl.DateTimeFormat("en-GB").format(time);
    console.log(formatedDate);
    const reqBody = {
      caption: video?.caption,
      url: video?.embedLink,
      time: formatedDate,
    };
    const result = await addVideoHistoryApi(reqBody);
    console.log(result);
  };

  const videoDrag = (e, video) => {
    console.log(video);
    e.dataTransfer.setData("videoDetails", JSON.stringify(video));
  };
  return (
    <>
      <Card
        style={{ width: "100%", height: "100%" }}
        draggable
        onDragStart={(e) => videoDrag(e, video)}
      >
        {!isPresent && (
          <Card.Img
            onClick={handleShow}
            variant="top"
            src={video?.imageUrl}
            className="w-100"
            height={"240px"}
          />
        )}
        <Card.Body className="d-flex justify-content-between">
          <Card.Title className="text-light">{video?.caption}</Card.Title>
          {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text> */}
          {!isPresent && (
            <Button
              variant="danger"
              onClick={() => handleDelete(video?.id)}
              style={{ maxHeight: "2.25rem" }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          )}{" "}
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> {video?.caption} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={`${video?.embedLink}?autoplay=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Videocard;
