import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogReadMore = () => {
    const [moreData, setMoreData] = useState([]);
    const { id } = useParams();

    const getMoreData = async () => {
        const res = await axios.get(`http://127.0.0.1:3004/blogArticle/${id}`);
        setMoreData(await res.data);
    }

    useEffect(() => {
        getMoreData();
    }, []);

    // console.log(moreData);
    // console.log(id);

    return (
        <div className='mt-5 pt-5'>
            <section id="blog" className="blog">
                <div className="container">
                    <article className="entry" data-aos="fade-up">

                        <h2 className="entry-title">
                            {moreData.title}
                        </h2>

                        <div className="entry-meta">
                            <ul>
                                <li className="d-flex align-items-center"><i className="icofont-user"></i> <a>{moreData.name}</a></li>
                                <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a>{moreData.date}</a></li>
                                <li className="d-flex align-items-center"><i className="fa-solid fa-tag"></i> <a>{moreData.tags}</a></li>
                                <li className="d-flex align-items-center"><i className="fa-brands fa-codepen"></i> <a>{moreData.catagories}</a></li>
                            </ul>
                        </div>

                        <div className="entry-content">
                            <p>
                                {moreData.body}
                            </p>
                        </div>

                        <div className="entry-content">
                            <p>
                                {moreData.ReadMore}
                            </p>
                        </div>

                    </article>
                </div>
            </section>
        </div>
    )
}

export default BlogReadMore
