import React from 'react';
import {Link} from 'react-router-dom';
import BlogArticle from './BlogArticle/BlogArticle';
import BlogCatagories from './SideBar/BlogCatagories';
import BlogRecentPosts from './SideBar/BlogRecentPosts';
import BlogSearch from './SideBar/BlogSearch';
import BlogTags from './SideBar/BlogTags';

function Blog() {
    return (
        <>

            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Blog</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Blog</li>
                            </ol>
                        </div>

                    </div>
                </section>

                {/* <!-- ======= Blog Section ======= --> */}
                <section id="blog" className="blog">
                    <div className="container">

                        <div className="row">

                            {/* ----------Blog Articles------------- */}

                            <div className="col-lg-8 entries">

                                <BlogArticle/>

                            </div>

{/* --------------------------------------Sidebar------------------------------ */}

                            <div className="col-lg-4">

                                <div className="sidebar" data-aos="fade-left">

                                    {/* ----------Search part------------- */}  
                                    <BlogSearch/>

                                    {/* ----------Catagories------------- */}
                                        <BlogCatagories/>

                                    {/* ----------Recent Posts------------- */}
                                        <BlogRecentPosts/>

                                    {/* ----------Tags------------- */}
                                        <BlogTags/>

                                </div>

                            </div>

                        </div>

                    </div>
                </section>
            </main>

        </>
    )
}

export default Blog
