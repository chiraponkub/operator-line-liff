// const accessToken = localStorage.getItem('accessToken')

export const state = () => ({
    users: [],
    userops: {},
    subowner: [],
    userid: ''
})

export const mutations = {
    SET_ACCOUNT(state, payload) {
        if (payload !== null) {
            state.users = payload;
        }
    },
    SET_ACCOUNTOPS(state, payload) {
        console.log("Dataform API =", payload);
        if (payload !== null) {
            state.userops = payload;
            console.log("state.userops", state.userops);
        }
    },
    GETSUB_OWNER(state, payload) {
        // console.log("OperatorList", payload.user_account_operator);
        if (payload.user_account_operator !== null) {
            state.subowner = payload.user_account_operator
        }
    },
    SET_ERROR(state, payload) {
        state.error.push(payload)
    },

    SET_UID(state, data) {
        state.userid = data
    }
}
export const actions = {
    getAccountOperator(state, payload) {
        this.$axios.$get('/api/ops/getAccount').then(res => {
            state.commit("SET_ACCOUNT", res)
        }).catch(error => {
            console.log(error);
        })
    },

    getAccountOps(state, payload) {
        console.log("LineId", payload);
        state.commit("SET_UID", payload)
        this.$axios.$get(`/api/ops/getAccount/${payload}`).then(res => {
            if (res !== "") {
                this.$router.push("/"); /// Viewver
            } else {
                this.$router.push("/login");
            }
            state.commit("SET_ACCOUNTOPS", res)
        }).catch((error) => {
            console.log("ERROR", error);
            liff.closeWindow()
        })
    },

    getSubOwner(state, payload) {
        this.$axios.$get(`/admin/getSubOwner/${payload}`).then(res => {
            state.commit("GETSUB_OWNER", res)

        }).catch(error => {
            console.log(error);
        })
    },

    updateAccountFormApi(state, payload) {
        // console.log("DATA, USERS", payload);

        this.$axios.$put(`/owner/updateProfile/${payload.usersid}`, payload.data).then(res => {
            console.log("Result_Update", res);
        }).catch(error => {
            alert("Error")
        })
    },

    deleteAccountFormApi(state, payload) {
        console.log("ID", payload);
        this.$axios.$delete("/owner/deleteAccount/" + payload).then(res => {
            console.log("Result", res);
        })
    }
}

export const getters = {
    gettersOperator: (state) => state.users,
    gettersSubOwner: (state) => state.subowner,
    gettersUId: (state) => state.userid,
}