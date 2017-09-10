import * as constants from './constants';

export const retrieveMe = me => ({
    type: constants.RETRIEVE_ME,
    me,
});

export const login = () => ({type: constants.LOGIN});
