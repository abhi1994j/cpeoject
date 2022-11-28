import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePagination } from '../../../helper/PaginationHook';
import { filteredAction, getArtData } from '../../../Reducers/BlogReducer/BlogArtRed';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

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
                <img src={item.image} alt="" className="img-fluid" />
              </div>

              <h2 className="entry-title">
                <Link to={`/BlogReadMore/${item.id}`}>{item.title}</Link>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="icofont-user"></i> <a>{item.name}</a></li>
                  <li className="d-flex align-items-center"><i className="icofont-wall-clock"></i> <a>{item.date}</a></li>
                  <li className="d-flex align-items-center"><i className="fa-solid fa-tag"></i> <a>{item.tags}</a></li>
                  <li className="d-flex align-items-center"><i className="fa-brands fa-codepen"></i> <a>{item.catagories}</a></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>
                  {item.body}
                </p>
                <div className="read-more">
                  <Link to={`/blogReadMore/${item.id}`}>Read More</Link>
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
