import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer nrp2Y_4IKLe8KtX_mrofRhvOvk8tgWt-fXcGYH_2RlwOV71jDIPgNTB6AxZ6y_1bkWW3s-p6eFxSrgw-RYpH8zBb18lpRTWm_OA6o36YZL2vygKCiukBQEMTwmWjYnYx'
    }
})