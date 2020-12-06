import api from "@/services/api";

export default {
    actions: {
        async loginUser({},params) {
            try {
                return await api().post('/users/auth',params);
            } catch (e) {
                throw e
            }
        },
        async getContent({d}) {
            try{
                return await api().get('/')
            } catch (e) {
                throw e
            }
        },
        async updateContent({},params) {
            try {
                return await api().put(`/${params.id}`,params)
            } catch (e) {
                throw e
            }
        },
        async getUserId({},params) {
            try {
               return await api().get(`/${params.id}`,params)
            } catch (e) {
                throw e
            }
        },
        async registerUser({},params) {
            try {
                return await api().post('/users/register',params);
            } catch (e) {
                throw e
            }
        },
        logOutUser({}) {
            try {
                return api().post('/login');
            } catch (e) {
                throw e
            }
        }
        }
}
