import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaPlus } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Search() {
    const [modalShow, setModalShow] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchbooks, setSearchbooks] = useState([]);
    const [selectedBooks, setSelectedBooks] = useState([]);

    const handleSearch = () => {
        fetch('https://openlibrary.org/search.json?q=' + searchTerm)
            .then(response => response.json())
            .then(data => {
                setSearchbooks(data.docs.slice(0, 5));
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setSearchbooks([]);
            });
    };

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleModalClose = () => {
        setModalShow(false);
        setSearchTerm('');
        setSearchbooks([]);
    };

    const handleBookClick = (book) => {
        const isSelected = selectedBooks.some(selectedBook => selectedBook.key === book.key);
        if (!isSelected) {
            setSelectedBooks(prevSelectedBooks => [...prevSelectedBooks, book]);
            console.log("Clicked on book:", book);
        }
    };

    return (
        <>
            <div style={{ paddingLeft: "50px", paddingTop: "50px" }}>
                <Modal
                    show={modalShow}
                    onHide={handleModalClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Search Books By Title
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Control 
                            type="text" 
                            placeholder="Search" 
                            value={searchTerm} 
                            onChange={handleInputChange} 
                        />
                        {/* Display search books here */}
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            {searchbooks.map((book, index) => (
                                <li key={index} style={{ marginBottom: "10px", cursor: "pointer" }} onClick={() => handleBookClick(book)}>
                                    <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-S.jpg`} alt={`Cover of ${book.title}`} style={{ marginRight: "10px" }} />
                                    {book.title} by {book.author_name}
                                </li>
                            ))}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleModalClose}>Close</Button>
                        <Button onClick={handleSearch}>Search</Button>
                    </Modal.Footer>
                </Modal>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button 
                        variant="outline-dark" 
                        onClick={() => setModalShow(true)} 
                        style={{ width: '100px', height: '100px'}}
                    >
                        Add New <FaPlus />
                    </Button>
                    <div style={{ marginLeft: '20px', display: 'flex', flexWrap: 'wrap' }}>
                        {selectedBooks.map((book, index) => (
                            <Card key={index} style={{ width: '10rem', margin: '10px' }}>
                                <Card.Img variant="top" src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`} alt={`Cover of ${book.title}`} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>{book.author_name}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
