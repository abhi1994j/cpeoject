import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CourceDetailsModal = ({ open, setOpen }) => {

    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    return (
        <>

            <div>
                <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h5" color="#ab003c" component="h2">
                            You have not login
                        </Typography><hr />
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                            Please login to apply for our courses
                        </Typography>


                        <div className='mt-3 d-flex justify-content-center'>
                            <button className='btn btn-secondary m-2' onClick={() => setOpen(false)}>close</button>

                            <button className='btn btn-primary m-2' onClick={() => navigate('/registration')}>Register</button>

                            <button className='btn btn-success m-2' onClick={() => navigate('/login')}>Login</button>
                        </div>

                    </Box>
                </Modal>
            </div>

        </>
    )
}

export default CourceDetailsModal
