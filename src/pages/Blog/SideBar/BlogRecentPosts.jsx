import React from 'react'
import { useSelector } from 'react-redux'

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
                            <img src="assets/img/blog-recent-posts-1.jpg" alt="" />
                            <h4><a href="blog-single.html">{item.title}</a></h4>
                            <time dateTime="2020-01-01">{item.date}</time>
                        </div>
                    )
                }

                {/* <div className="post-item clearfix">
                    <img src="assets/img/blog-recent-posts-2.jpg" alt="" />
                    <h4><a href="blog-single.html">Quidem autem et impedit</a></h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                    <img src="assets/img/blog-recent-posts-3.jpg" alt="" />
                    <h4><a href="blog-single.html">Id quia et et ut maxime similique occaecati ut</a></h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                    <img src="assets/img/blog-recent-posts-4.jpg" alt="" />
                    <h4><a href="blog-single.html">Laborum corporis quo dara net para</a></h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div>

                <div className="post-item clearfix">
                    <img src="assets/img/blog-recent-posts-5.jpg" alt="" />
                    <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                </div> */}

            </div>

        </>
    )
}

export default BlogRecentPosts
