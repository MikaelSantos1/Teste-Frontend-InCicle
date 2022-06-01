import React, { ReactEventHandler, useEffect, useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ButtonFilter, MenuList } from "./styles";
import Arrow from '../../assets/arrow.png'

import Fade from '@mui/material/Fade';

interface FilterButtonProps {
    title: string;
    labelEventCheckBox: string;
    labelPublicationCheckBox: string;
    labelreleaseBox: string;
    filterData: (type: string) => void;
}

export function FilterButton({
    title,
    labelEventCheckBox,
    labelPublicationCheckBox,
    labelreleaseBox,
    filterData,

}: FilterButtonProps) {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [eventCheckbox, setEventCheckbox] = useState(false);
    const [publicationCheckbox, setPublicationCheckbox] = useState(false);
    const [releaseCheckbox, setReleaseCheckbox] = useState(false);

    useEffect(() => {
        if (!!eventCheckbox) {
            filterData('event')
            console.log('teste')
        }
        else if (!!publicationCheckbox) {
            filterData('publication')
        } else if (!!releaseCheckbox) {
            filterData('release')
        }
        else {
            filterData('all')
        }
    }, [eventCheckbox, publicationCheckbox, releaseCheckbox])
    function handleCheckboxEvent(event: React.ChangeEvent<HTMLInputElement>) {
        setEventCheckbox(event.target.checked);
    }

    return (
        <>
            <ButtonFilter
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {title}
                <img src={Arrow} alt="arrow" />
            </ButtonFilter>
            <MenuList
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <FormControlLabel control={
                    <Checkbox

                        checked={eventCheckbox}
                        onChange={handleCheckboxEvent}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />} label={labelEventCheckBox} />

                <FormControlLabel control={
                    <Checkbox

                        checked={publicationCheckbox}
                        onChange={(e) => setPublicationCheckbox(e.target.checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />} label={labelPublicationCheckBox} />

                <FormControlLabel control={
                    <Checkbox

                        checked={releaseCheckbox}
                        onChange={(e) => setReleaseCheckbox(e.target.checked)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />} label={labelreleaseBox} />




            </MenuList>
        </>
    )
}