import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddBooks.css"; // Create this new CSS file

const AddBooks = () => {
    const [Data, setData] = useState({
        bookname: "",
        author: "",
        description: "",
        price: "",
        image: ""
    });
    const [preview, setPreview] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const change = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
        if (name === "image") {
            setPreview(value);
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await axios.post("http://localhost:1000/api/v1/add", Data);
            alert(res.data.message);
            setData({
                bookname: "",
                author: "",
                description: "",
                price: "",
                image: ""
            });
            setPreview("");
            navigate("/Books"); // Redirect after successful submission
        } catch (error) {
            console.error("Error adding book:", error);
            alert("Failed to add book. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="add-books-container">
            <div className="add-books-form-container">
                <h2 className="form-title">
                    <i className="bi bi-book-plus"></i> Add New Book
                </h2>
                
                <form onSubmit={submit} className="add-book-form">
                    <div className="form-row">
                        <div className="form-col">
                            <div className="form-group">
                                <label className="form-label">Book Title</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter Book Title"
                                    name="bookname"
                                    value={Data.bookname}
                                    onChange={change}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label className="form-label">Author</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter Author Name"
                                    name="author"
                                    value={Data.author}
                                    onChange={change}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-textarea"
                                    placeholder="Enter Book Description"
                                    name="description"
                                    value={Data.description}
                                    onChange={change}
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        
                        <div className="form-col">
                            <div className="form-group">
                                <label className="form-label">Cover Image URL</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter Image URL"
                                    name="image"
                                    value={Data.image}
                                    onChange={change}
                                    required
                                />
                                {preview && (
                                    <div className="image-preview">
                                        <img src={preview} alt="Book cover preview" />
                                        <div className="preview-label">Preview</div>
                                    </div>
                                )}
                            </div>
                            
                            <div className="form-group">
                                <label className="form-label">Price</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    placeholder="Enter Price"
                                    name="price"
                                    value={Data.price}
                                    onChange={change}
                                    min="0"
                                    step="0.01"
                                    required
                                />
                            </div>
                            
                            <button 
                                type="submit" 
                                className="submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm" role="status"></span>
                                        Adding...
                                    </>
                                ) : (
                                    "Add Book"
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBooks;