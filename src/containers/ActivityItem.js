import axios from 'axios';
import { connect } from 'react-redux';

import { retrieveActivities } from '../actions/activities';
import { retrieveActivity } from '../actions/activity';
import ActivityItem from '../components/ActivityItem';

const applyActivity = (dispatch, id, get) => {
    axios.post(id + "/apply", {})
        .then(result => {
            axios.get(get)
                .then(result => {
                    const activities = result.data['hydra:member'];
                    dispatch(retrieveActivities(activities));
                })
                .catch();
            axios.get(id)
                .then(result => {
                    const activity = result.data;
                    dispatch(retrieveActivity(activity));
                })
                .catch();
        })
        .catch();
};

const acceptActivity = (dispatch, id, get) => {
    axios.patch(id + "/accept", {})
        .then(result => {
            axios.get(get)
                .then(result => {
                    const activities = result.data['hydra:member'];
                    dispatch(retrieveActivities(activities));
                })
                .catch();
            axios.get(id)
                .then(result => {
                    const activity = result.data;
                    dispatch(retrieveActivity(activity));
                })
                .catch();
        })
        .catch();
};

const refuseActivity = (dispatch, id, get) => {
    axios.patch(id + "/refuse", {})
        .then(result => {
            axios.get(get)
                .then(result => {
                    const activities = result.data['hydra:member'];
                    dispatch(retrieveActivities(activities));
                })
                .catch();
            axios.get(id)
                .then(result => {
                    const activity = result.data;
                    dispatch(retrieveActivity(activity));
                })
                .catch();
        })
        .catch();
};

const cancelActivity = (dispatch, id, get) => {
    axios.delete(id + "/cancel", {})
        .then(result => {
            axios.get(get)
                .then(result => {
                    const activities = result.data['hydra:member'];
                    dispatch(retrieveActivities(activities));
                })
                .catch();
            axios.get(id)
                .then(result => {
                    const activity = result.data;
                    dispatch(retrieveActivity(activity));
                })
                .catch();
        })
        .catch();
};

const deleteActivity = (dispatch, id, get) => {
    axios.delete(id, {})
        .then(result => {
            axios.get(get)
                .then(result => {
                    const activities = result.data['hydra:member'];
                    dispatch(retrieveActivities(activities));
                })
                .catch();
        })
        .catch();
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, props) => ({
    applyActivity: id => applyActivity(dispatch, id, props.get),
    acceptActivity: id => acceptActivity(dispatch, id, props.get),
    refuseActivity: id => refuseActivity(dispatch, id, props.get),
    cancelActivity: id => cancelActivity(dispatch, id, props.get),
    deleteActivity: id => deleteActivity(dispatch, id, props.get),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ActivityItem);
