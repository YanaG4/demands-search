import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function StepsContainer() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="steps"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: 'var(--sky-blue)',
                        color: 'var(--sky-blue)'
                    }
                }}
            >
                <Tab label="1. Product" />
                <Tab label="2. Addresses" disabled />
                <Tab label="3. Overview" disabled />
            </Tabs>
        </>
    )
}
