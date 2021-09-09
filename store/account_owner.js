// const accessToken = localStorage.getItem('accessToken')

export const state = () => ({
    users: {},
    user_by_id: {},
    error: []
})

export const mutations = {

    SET_ACCOUNT(state, payload) {
        state.users = payload;
    },
    SET_ACCOUNTBYID(state, payload) {
        state.user_by_id = payload
            // console.log("STATEUSER", state.user_by_id);
    },
    SET_ERROR(state, payload) {
        state.error.push(payload)
    },

}
export const actions = {
    getAccount(state, payload) {
        this.$axios.$get('api/owner/getAccount').then(res => {
            // console.log("GetAcc", res);
            state.commit("SET_ACCOUNT", res)
        }).catch(error => {
            state.commit("SET_ERROR", error)
        })
    },


    getSubOwner(state, payload) {
        this.$axios.$get(`/admin/getSubOwner/${payload.id}`).then(res => {
            console.log("getSubOwner", res);
        }).catch(error => {
            console.log(error);
        })
    },

    async toggleModalAccountFormApi(state, payload) {
        await this.$axios.$get(`/admin/getAccountById/${payload.id}`).then(res => {
            state.commit("SET_ACCOUNTBYID", res)
        })
    },
    async toggleModalOperatorAccountFormApi(state, payload) {
        await this.$axios.$get(`api/owner/getOperatorById/${payload.operator_id}`).then(res => {
            state.commit("SET_ACCOUNTBYID", res)
        })
    },

    updateAccountFormApi(state, payload) {
        this.$axios.$put(`/admin/updateProfile/${payload.usersid}`, payload.data).then(res => {
            // console.log("Result_Update", res);
        }).catch(error => {
            console.log("ERROR", error.message);

        })
    },

    deleteAccountFormApi(state, payload) {
        console.log("ID", payload);
        this.$axios.$delete("/admin/deleteAccount/" + payload)
    }
}

export const getters = {
    gettersUser: (state) => state.users,
    gettersUserById: (state) => state.user_by_id,
    gettersError: (state) => state.error
}