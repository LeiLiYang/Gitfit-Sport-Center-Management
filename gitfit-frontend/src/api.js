import axios from 'axios'

const frontendUrl = 'http://' + import.meta.env.VITE_APP_FRONTEND_HOST + ':' + import.meta.env.VITE_APP_FRONTEND_PORT;
const backendUrl = 'http://' + import.meta.env.VITE_APP_BACKEND_HOST + ':' + import.meta.env.VITE_APP_BACKEND_PORT + '/api';

const AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
});

export function fetchFitnessClasses() {
    return AXIOS.get('/fitnessclasses');

}

export function fetchInstructors() {
    return AXIOS.get('/instructors/');
}

export function deleteInstructor(username) {
    return AXIOS.delete('/instructor/', { data: { username: username }, headers: { 'Content-Type': 'application/json' }});
}

export function fetchSportCenter() {
    return AXIOS.get('/sportcenter');
}

export function updateSportCenterName(name) {
    return AXIOS.put('/sportcenter/name', { name });
}

export function updateSportCenterMaxCapacity(maxCapacity) {
    return AXIOS.put('/sportcenter/maxCapacity', { maxCapacity });
}

export function updateSportCenterHours(hours) {
    return AXIOS.put('/sportcenter/hours', { hours });
}
