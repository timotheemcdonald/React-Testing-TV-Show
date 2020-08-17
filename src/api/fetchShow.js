import axios from 'axios'

const fetchShow = () => {
    return axios
    .get('https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes')
    .then(res => {
        console.log(res, 'this is the res from axios fetch')
        return res;
    })
    .catch(error => {
        console.log(error, 'this error is from axios fetch request')
        return error;
    })
}

export default fetchShow;