import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArtData } from '../../../Reducers/BlogReducer/BlogArtRed';
import { filteredAction } from '../../../Reducers/BlogReducer/BlogArtRed';

const BlogCatagories = () => {
    const { artData } = useSelector(state => state.BlogArtRed);
    const dispatch = useDispatch();

    // console.log(artData[1]?.catagories);

    const handleClick = (catagory) => {
        let filtData = [];
        filtData = artData.filter((item) => item?.catagories === catagory);
        dispatch(filteredAction(filtData))
    }

    const CatagoryNumber=(catagory)=>{
        let filtData = [];
        filtData = artData.filter((item) => item?.catagories === catagory);
        return filtData.length
    }

    useEffect(() => {
        dispatch(getArtData())
    }, [])

    return (
        <>
            <h3 className="sidebar-title">Categories</h3>
            <div className="sidebar-item categories">
                <ul>
                    <li><button onClick={() => dispatch(filteredAction(artData))} className='btn btn-light'>All Catagory <span> ({artData.length}) </span></button></li>

                    <li><button onClick={() => handleClick("general")} className='btn btn-light'>Software <span>({CatagoryNumber('general')})</span></button></li>

                    <li><button onClick={() => handleClick("placement")} className='btn btn-light'>Hardwarw <span>({CatagoryNumber('placement')})</span></button></li>

                    <li><button onClick={() => handleClick("design")} className='btn btn-light'>Design <span>({CatagoryNumber('design')})</span></button></li>

                    <li><button onClick={() => handleClick("creative")} className='btn btn-light'>Testing <span>({CatagoryNumber('creative')})</span></button></li>

                    <li><button onClick={() => handleClick("education")} className='btn btn-light'>Educaion <span>({CatagoryNumber('education')})</span></button></li>
                </ul>

            </div>

        </>
    )
}

export default BlogCatagories;
