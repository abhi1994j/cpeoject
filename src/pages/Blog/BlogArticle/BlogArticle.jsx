import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePagination } from '../../../helper/PaginationHook';
import { filteredAction, getArtData } from '../../../Reducers/BlogReducer/BlogArtRed';
import { Pagination } from '@mui/material';

const BlogArticle = () => {
  const { artData, filteredData } = useSelector(state => state.BlogArtRed);
  const dispatch = useDispatch();

  const { totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    displayPage } = usePagination(3, filteredData.length);


  const display = () => {
    const pageData = [];

    if (filteredData.length != 0) {
      for (let i = startPageIndex; i <= endPageIndex; i++) {
        if (filteredData[i] !== undefined) {
          pageData.push(filteredData[i]);
        }
      }
      return pageData;
    } else {
      return []
    }

  }

  useEffect(() => {
    if (artData.length === 0) {
      dispatch(getArtData())
    } else {
      dispatch(filteredAction(artData))
    }
  }, [artData])


  // console.log(endPageIndex);
  // console.log(filteredData);
  // console.log(display());


  return (
    <>
      {

         display().map((item) =>
          <div key={item.id}>
            <article className="entry" data-aos="fade-up">

              <div className="entry-img">
                <img src="assets/img/blog-1.jpg" alt="" className="img-fluid" />
              </div>

              <h2 className="entry-title">
                <a href="blog-single.html">{item.title}</a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="icofont-user"></i> <a href="blog-single.html">{item.name}</a></li>
                  <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a href="blog-single.html"><time dateTime="2020-01-01">{item.date}</time></a></li>
                  <li className="d-flex align-items-center"><i className="fa-solid fa-tag"></i> <a href="blog-single.html">{item.tags}</a></li>
                  <li className="d-flex align-items-center"><i className="fa-brands fa-codepen"></i> <a href="blog-single.html">{item.catagories}</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  {item.body}
                </p>
                <div className="read-more">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>

            </article>
          </div>
        )
      }

      <Pagination
        count={totalPages}
        shape='rounded'
        color='primary'
        onChange={(event, value) => displayPage(value)}
      />

    </>
  )
}

export default BlogArticle;
