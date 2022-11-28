import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const BlogRecentPosts = () => {
    const { artData } = useSelector(state => state.BlogArtRed);

    const display = (data) => {
        let dispData = []
        if (data.length !== 0) {
            for (let i = 0; i < 5; i++) {
                dispData.push(data[i])
            }
        }
        return dispData;
    }

    return (
        <>
            <h3 className="sidebar-title">Recent Posts</h3>
            <div className="sidebar-item recent-posts">

                {
                    display(artData).map((item) =>
                        <div className="post-item clearfix" key={item.id}>
                            <img src={item.image} alt="" />
                            <h4><Link to={`/blogReadMore/${item.id}`}>{item.title}</Link></h4>
                            <time dateTime="2020-01-01">{item.date}</time>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default BlogRecentPosts
