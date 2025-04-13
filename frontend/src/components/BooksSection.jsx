import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch, FaRupeeSign } from 'react-icons/fa';

const BooksSection = ({ data, setData }) => {
    const [updateData, setUpdateData] = useState({
        _id: "",
        bookname: "",
        author: "",
        description: "",
        price: "",
        image: ""
    });

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [hoveredBook, setHoveredBook] = useState(null);

    const handleDelete = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this book?");
        if (!isConfirmed) return;

        try {
            const res = await axios.delete(`http://localhost:1000/api/v1/deleteBook/${id}`);
            alert(res.data.message);
            setData(data.filter((book) => book._id !== id));
        } catch (error) {
            console.error("Error deleting book:", error);
            alert("Failed to delete book. Please try again.");
        }
    };

    const handleUpdateClick = (book) => {
        setUpdateData(book);
        setShowUpdateModal(true);
    };

    const handleUpdateChange = (e) => {
        const { name, value } = e.target;
        setUpdateData({ ...updateData, [name]: value });
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:1000/api/v1/updateBook/${updateData._id}`, updateData);
            alert(res.data.message);
            setData(data.map((book) => (book._id === updateData._id ? updateData : book)));
            setShowUpdateModal(false);
        } catch (error) {
            console.error("Error updating book:", error);
            alert("Failed to update book. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                {data && data.map((item) => (
                    <div key={item._id} className="col-md-3 mb-4">
                        <div
                            className="book-card"
                            style={{
                                width: "250px",
                                minHeight: "470px",
                                border: "1px solid rgba(255,255,255,0.2)",
                                borderRadius: "10px",
                                backgroundColor: "rgba(45, 45, 45, 0.7)",
                                position: "relative",
                                textAlign: "center",
                                padding: "10px",
                                display: "flex",
                                flexDirection: "column",
                                transition: "all 0.3s ease",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                            }}
                            onMouseEnter={() => setHoveredBook(item._id)}
                            onMouseLeave={() => setHoveredBook(null)}
                        >
                            <img
                                style={{ 
                                    width: "100%", 
                                    height: "360px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                    marginBottom: "10px"
                                }}
                                src={item.image}
                                alt={item.bookname}
                            />

                            <div style={{
                                padding: "5px",
                                flex: 1,
                                display: "flex",
                                flexDirection: "column"
                            }}>
                                <h6 
                                    style={{
                                        color: "white",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        marginBottom: "8px",
                                        minHeight: "40px",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis"
                                    }}
                                    title={item.bookname}
                                >
                                    {item.bookname}
                                </h6>

                                <p 
                                    style={{
                                        color: "#ddd",
                                        fontSize: "12px",
                                        flex: 1,
                                        overflowY: "auto",
                                        maxHeight: "80px",
                                        marginBottom: "10px",
                                        textAlign: "left",
                                        lineHeight: "1.4",
                                        padding: "0 5px"
                                    }}
                                >
                                    {item.description}
                                </p>

                                <div style={{ marginTop: "auto" }}>
                                    <div style={{ 
                                        display: "flex", 
                                        alignItems: "center", 
                                        justifyContent: "center",
                                        color: "white",
                                        marginBottom: "10px"
                                    }}>
                                        <FaRupeeSign style={{ marginRight: "5px" }} />
                                        <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                                            {item.price}
                                        </span>
                                    </div>

                                    <div className="d-flex justify-content-around" style={{ gap: "10px" }}>
                                        <button 
                                            className="btn btn-primary btn-sm"
                                            style={{ flex: 1 }}
                                            onClick={() => handleUpdateClick(item)}
                                        >
                                            Update
                                        </button>
                                        <button 
                                            className="btn btn-danger btn-sm"
                                            style={{ flex: 1 }}
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced Tooltip */}
                            {hoveredBook === item._id && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "-10px",
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: "220px",
                                        backgroundColor: "rgba(0,0,0,0.9)",
                                        color: "white",
                                        padding: "8px",
                                        borderRadius: "6px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                                        zIndex: "1000",
                                        fontSize: "12px",
                                        lineHeight: "1.4",
                                        textAlign: "center"
                                    }}
                                >
                                    <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                                        {item.bookname}
                                    </div>
                                    <div style={{ fontSize: "11px" }}>
                                        {item.author}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Update Modal */}
            {showUpdateModal && (
                <div className="modal" style={{ 
                    display: "block", 
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1050
                }}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content" style={{ 
                            backgroundColor: "#2d2d2d",
                            color: "white"
                        }}>
                            <div className="modal-header">
                                <h5 className="modal-title">Update Book</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setShowUpdateModal(false)}
                                    style={{ filter: "invert(1)" }}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleUpdateSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Book Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="bookname" 
                                            value={updateData.bookname} 
                                            onChange={handleUpdateChange}
                                            style={{ backgroundColor: "#3d3d3d", color: "white", border: "none" }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Author</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="author" 
                                            value={updateData.author} 
                                            onChange={handleUpdateChange}
                                            style={{ backgroundColor: "#3d3d3d", color: "white", border: "none" }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            className="form-control" 
                                            name="description" 
                                            value={updateData.description} 
                                            onChange={handleUpdateChange}
                                            rows="3"
                                            style={{ backgroundColor: "#3d3d3d", color: "white", border: "none" }}
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Image URL</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            name="image" 
                                            value={updateData.image} 
                                            onChange={handleUpdateChange}
                                            style={{ backgroundColor: "#3d3d3d", color: "white", border: "none" }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Price</label>
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            name="price" 
                                            value={updateData.price} 
                                            onChange={handleUpdateChange}
                                            style={{ backgroundColor: "#3d3d3d", color: "white", border: "none" }}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-success w-100">
                                        Update Book
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BooksSection;