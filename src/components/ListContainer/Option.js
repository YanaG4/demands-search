import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { useRadioGroup } from '@mui/material/RadioGroup';

import './Option.css'

export default function Option({ value }) {
    const [checked, setChecked] = useState(false);
    // useEffect({
    //     if(radioGroup) {
    //         setChecked(radioGroup.value === props.value)
    //     }
    // }, [radioGroup])

    const StyledFormControlLabel = styled((props) => (
        <FormControlLabel {...props} />
    ))(({ theme, checked }) => ({
        ".MuiFormControlLabel-label": checked && {
            color: theme.palette.primary.main
        }
    }));



    function MyFormControlLabel(props) {
        const radioGroup = useRadioGroup();
        // MUI UseRadio Group
        let checked = false;
        if (radioGroup) {
            checked = radioGroup.value === props.value;
        }

        return <StyledFormControlLabel checked={checked} {...props} />;
    }

    return (
        <div className="option-container">
            <MyFormControlLabel
                value={value}
                control={<Radio
                />}
                sx={{
                    whiteSpace: 'nowrap'
                }}
                label={value}
            />
            <p className={(useRadioGroup().value === value) ? 'option-text option-text-bold' : 'option-text option-text-thin'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
        </div>
    )
}
