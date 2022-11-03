import React from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchField() {
    return (
        <Paper
            component="form"
            variant="outlined"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100', height: 50 }}
        >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search" size="large " >
                <SearchIcon fontSize="inherit" />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="I’m looking for..."
                inputProps={{ 'aria-label': 'search demand' }}
            />
        </Paper>
    )
}
