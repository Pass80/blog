import React from 'react';
import './BlogPage.css';
import data from '../../store/data';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
    const params = useParams();
    return (
        <div className="blog-display">
            <div className="main-img">
                <img src={data[params.id].img_url} alt="" />
            </div>
            <div className="details">
                <div className="blog-title">{data[params.id].title}</div>
                <div className="date">{data[params.id].published_date}</div>
                <div className="description">{data[params.id].description}</div>
                <div className="author">{data[params.id].author}</div>
            </div>
        </div>
    );
};

export default BlogPage;
