export default function({ $axios }) {
    $axios.setHeader('Content-Type', 'application/json')
    $axios.setHeader('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)
    $axios.onError((error) => {
        if (error.response.status === 401) {
            // || error.response.status >= 500
        }
    })
}