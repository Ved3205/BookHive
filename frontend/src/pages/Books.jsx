import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksSection from "../components/BooksSection";
import { FiSearch } from "react-icons/fi";
import "./Books.css"; // Create this new CSS file

const Books = () => {
    const [data, setData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [filterOption, setFilterOption] = useState("all");

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("http://localhost:1000/api/v1/getBooks");
                setData(res.data.books);
            } catch (error) {
                console.error("Error fetching books:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBooks();
    }, []);

    const filteredBooks = data?.filter((book) => {
        const matchesSearch = 
            book.bookname.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesFilter = 
            filterOption === "all" || 
            (filterOption === "available" && book.status === "available") ||
            (filterOption === "checked-out" && book.status === "checked-out");
        
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="books-page">
            {/* Header Section */}
            <div className="books-header">
                <div className="container">
                    <h1 className="page-title">
                        <span className="gold-text">Library</span> Collection
                    </h1>
                    <p className="page-subtitle">
                        Browse and manage our complete catalog
                    </p>
                    
                    {/* Search and Filter Bar */}
                    <div className="search-filter-container">
                        <div className="search-box">
                            <FiSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search by title, author or description..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        
                        <div className="filter-options">
                            <select 
                                value={filterOption}
                                onChange={(e) => setFilterOption(e.target.value)}
                                className="filter-select"
                            >
                                <option value="all">All Books</option>
                                <option value="available">Available Now</option>
                                <option value="checked-out">Checked Out</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="books-main container">
                {isLoading ? (
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                        <p>Loading our collection...</p>
                    </div>
                ) : filteredBooks && filteredBooks.length > 0 ? (
                    <BooksSection data={filteredBooks} setData={setData} />
                ) : (
                    <div className="no-results">
                        <img 
                            src="https://illustrations.popsy.co/amber/no-data.svg" 
                            alt="No books found" 
                            className="no-results-img"
                        />
                        <h3>No books match your search</h3>
                        <p>Try adjusting your search or filter criteria</p>
                        <button 
                            className="reset-btn"
                            onClick={() => {
                                setSearchQuery("");
                                setFilterOption("all");
                            }}
                        >
                            Reset Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Books;