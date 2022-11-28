import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../Reducers/AuthRed';

function LogoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div className='m-5 p-5 d-flex justify-content-center '>
        <div className="card border border-secondary p-2" style={{ width: "18rem" }}>
          <div className="card-body">
            <h3 className="card-title">Are you sure..</h3>
            <h5 className="card-subtitle mb-2 text-muted">Do you want to logout?</h5>
            <button onClick={() => navigate('/')} className="btn btn-secondary m-1">Cancel</button>
            <button className="btn btn-success m-1"
              onClick={() => {
                dispatch(setToken(false));
                navigate('/');
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogoutPage;
