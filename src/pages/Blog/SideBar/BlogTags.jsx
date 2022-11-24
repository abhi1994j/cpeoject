import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filteredAction } from '../../../Reducers/BlogReducer/BlogArtRed';

const BlogTags = () => {
    const { artData } = useSelector(state => state.BlogArtRed);
    const dispatch = useDispatch();


    const handleClick = (tag) => {
        let filtData = [];
        filtData = artData.filter((item) => item?.tags === tag);
        dispatch(filteredAction(filtData))
    }

    return (
        <>
            <h3 className="sidebar-title"><i className="fa-solid fa-tag"></i> Tags</h3>
            <div className="sidebar-item tags">
                <ul>
                    <li><button onClick={() => dispatch(filteredAction(artData))} className='btn btn-light m-1'>All Tags</button></li>


                    <li><button onClick={() => handleClick("javascript")} className='btn btn-light m-1'>javascript</button></li>
                    <li><button onClick={() => handleClick("react")} className='btn btn-light m-1'>react</button></li>
                    <li><button onClick={() => handleClick("angular")} className='btn btn-light m-1'>angular</button></li>
                    <li><button onClick={() => handleClick("python")} className='btn btn-light m-1'>python</button></li>
                    <li><button onClick={() => handleClick("node")} className='btn btn-light m-1'>node</button></li>
                    <li><button onClick={() => handleClick("laravel")} className='btn btn-light m-1'>laravel</button></li>

                </ul>
            </div>

        </>
    )
}

export default BlogTags
