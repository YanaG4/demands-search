import React from 'react'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { useRadioGroup } from '@mui/material/RadioGroup';

import './Option.css'

export default function Option({ value }) {
    const StyledFormControlLabel = styled((props) => (
        <FormControlLabel {...props} />
    ))(({ theme, checked }) => ({
        ".MuiFormControlLabel-label": checked && {
            color: theme.palette.primary.main
        }
    }));
    function OptionFormControlLabel(props) {
        const radioGroup = useRadioGroup();
        let checked = false;
        if (radioGroup) {
            checked = radioGroup.value === props.value;
        }
        return <StyledFormControlLabel checked={checked} {...props} />;
    }
    return (
        <div className="option-container">
            <OptionFormControlLabel
                value={value.name}
                control={<Radio
                />}
                sx={{
                    whiteSpace: 'nowrap'
                }}
                label={value.name}
            />
            <p className={(useRadioGroup().value === value.name) ? 'option-text option-text-bold' : 'option-text option-text-thin'}>{value.description?.length ? value.description : ""}</p>
        </div>
    )
}
