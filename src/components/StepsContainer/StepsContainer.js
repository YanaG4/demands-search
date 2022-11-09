import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function StepsContainer() {
    //this part isn't currently used, because we have only one step of the workflow. 
    //so it's here for the future use
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    //end of the unused part
    return (
        <>
            <Tabs
                value={value}
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
