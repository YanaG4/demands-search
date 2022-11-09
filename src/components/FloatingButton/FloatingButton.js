import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function FloatingButton() {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const positionStyle = {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        bottom: 32,
        right: '5vw',
        height: '70px',
        width: '70px',
    };

    const colorStyle = {
        color: 'common.white',
        bgcolor: '#545e6b',
        opacity: '50%',
        '&:hover': {
            bgcolor: '#12B8FF',
            opacity: '80%',
        },
    };
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 300 ?
                setIsButtonVisible(true)
                :
                setIsButtonVisible(false)
        });
    }, []);

    return (
        <>
            {isButtonVisible && (
                <Fab sx={{ ...positionStyle, ...colorStyle }} aria-label='top' color='white' onClick={goToTop}>
                    <UpIcon /> TOP
                </Fab>
            )}
        </>
    )
}
