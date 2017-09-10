import * as constants from './constants';

export const updateSport = sport => ({
    type: constants.UPDATE_SPORT,
    sport,
});

export const updateStartDate = startDate => ({
    type: constants.UPDATE_START_DATE,
    startDate,
});

export const updateStartTime = startTime => ({
    type: constants.UPDATE_START_TIME,
    startTime,
});

export const updateDuration = duration => ({
    type: constants.UPDATE_DURATION,
    duration,
});

export const updateTitle = title => ({
    type: constants.UPDATE_TITLE,
    title,
});

export const updateDescription = description => ({
    type: constants.UPDATE_DESCRIPTION,
    description,
});

export const updateLocation = location => ({
    type: constants.UPDATE_LOCATION,
    location,
});

export const updateSeats = seats => ({
    type: constants.UPDATE_SEATS,
    seats,
});

export const redirect = () => ({type: constants.REDIRECT});