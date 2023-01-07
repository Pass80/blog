import React from 'react';
import './BlogComponent.css';
import { Link } from 'react-router-dom';

const BlogComponent = ({ blogData }) => {
    return (
        <div className="card">
            <div className="img-container">
                <img src={blogData.img_url} alt="blog" />
            </div>

            <h3>{blogData.title}</h3>
            <Link to={`/blogs/${blogData.id}`}>
                <button className="btn">Read more</button>
            </Link>
        </div>
    );
};

export default BlogComponent;
