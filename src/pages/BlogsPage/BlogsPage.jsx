import React from 'react';
import './BlogsPage.css';
import data from '../../store/data';
import BlogComponent from '../../components/BlogComponent/BlogComponent';

const BlogsPage = () => {
    return (
        <div className="blogs-container">
            {data.map((blog) => (
                <BlogComponent key={blog.id} blogData={blog} />
            ))}
        </div>
    );
};

export default BlogsPage;
