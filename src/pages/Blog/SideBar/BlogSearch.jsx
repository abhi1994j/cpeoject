import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtData } from '../../../Reducers/BlogReducer/BlogArtRed';
import { blogSerchAct } from '../../../Reducers/BlogReducer/BlogArtRed';

const BlogSearch = () => {
    const { artData } = useSelector(state => state.BlogArtRed);
    const dispatch = useDispatch();

    // console.log(filteredData);

    const handleChange = (e) => {
        let filteredData=[];
        let p = [];
        p = artData.filter((item) => {
            const lowerData = item.title.toLowerCase();
            if (e.target.value === '') {
                return true;
            } else {
                return lowerData.includes(e.target.value);
            }
        });

        if (!p) {
            filteredData=artData;
        } else {
            filteredData=p;
        }

        dispatch(blogSerchAct(filteredData))
    }

    useEffect(() => {
        dispatch(getArtData())
    }, [])

    return (
        <>
            <h3 className="sidebar-title">Search</h3>
            <div className="sidebar-item search-form">
                <form action="">
                    <input onChange={handleChange} type="text" />
                    <button type="submit"><i className="icofont-search"></i></button>
                </form>

            </div>
        </>
    )
}

export default BlogSearch
