import React from "react";
import { BsBookmarkStar } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import { CiBookmarkPlus } from "react-icons/ci";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

export default function Favorites(){
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div style={{paddingTop:"100px"}}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <div>
                        <h1 style={{ paddingRight: "5px", paddingLeft: "10px" }}>Favorites</h1>
                    </div>
                    <div style={{ paddingTop: "0px", marginRight: "10px" }}>
                        <BsBookmarkStar size={20} />
                    </div>
                </div>
                <div style={{
                    paddingLeft:"50px", paddingTop:"50px" 
                }}>
                    <Modal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Modal heading
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Centered Modal</h4>
                            <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                consectetur ac, vestibulum at eros.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => setModalShow(false)}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <Button variant="outline-dark" onClick={() => setModalShow(true)} style={{ width: '100px', height: '100px'}}>Add New Favorite <CiBookmarkPlus />
                    </Button>
                </div>
            </div>
        </>
    );
}
