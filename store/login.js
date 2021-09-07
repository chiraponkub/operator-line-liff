const accessToken = localStorage.getItem('accessToken')

export const state = () => ({
    username: {},
    access_token: "",
    is_access: '',
    is_accessops: ''
})

export const mutations = {

    SET_ACCESS(state, data) {
        state.is_access = data
    },
    SET_ACCESSOPS(state, data) {
        state.is_accessops = data
    },

    SET_TOKEN(state, data) {
        state.access_token = data
    }
}

export const actions = {
    async loginCustomer(state, payload) {
        await this.$axios.$post("api/owner/login", {
                username: payload.username,
                password: payload.password
            }, )
            .then(res => {
                if (res) {
                    console.log("DATA", res);
                    localStorage.setItem("accessToken", res.message)
                    state.commit("SET_ACCESS", true)
                }
            }).catch(error => {
                console.log(error);
                alert("Username or password Incorrect")
            })
    },
    setToken(state) {
        const accessToken = localStorage.getItem('accessToken');
        state.commit('SET_TOKEN', accessToken)
    },

    async changePasswordFormApi(state, payload) {
        console.log("PASSWORD", payload);
        await this.$axios.$put(`api/owner/ChangePasswordOwner`, {
            old_password: payload.data.oldpassword,
            new_password: payload.data.password
        }, ).then((res) => {
            console.log("2ChangePassword", res);
        }).catch(error => {
            console.log(error);
            console.log("Incorrect information");
        })
    },

    async loginOperator(state, payload) {
        console.log("OPSLogin", payload);
        await this.$axios.$post("api/ops/login", {
                username: payload.username,
                password: payload.password,
                uid: payload.datauserid
            }, )
            .then(res => {
                if (res) {
                    localStorage.setItem("accessToken", res.message)
                    state.commit("SET_ACCESSOPS", true)
                }
            }).catch(error => {
                console.log(error);
                alert("Username or password Incorrect")
            })
    },
    setToken(state) {
        const accessToken = localStorage.getItem('accessToken');
        state.commit('SET_TOKEN', accessToken)
    },

    async changePasswordOpsFormApi(state, payload) {
        console.log("PASSWORD", payload);
        await this.$axios.$put(`api/ops/ChangePasswordOperator`, {
            old_password: payload.data.oldpassword,
            new_password: payload.data.password
        }, ).then((res) => {
            console.log("OPSChangePassword", res);
        }).catch(error => {
            console.log(error);
            console.log("Incorrect information");
        })
    },
}

export const getters = {
    gettersToken: state => state.access_token,
    gettersIsAccess: state => state.is_access,
    gettersIsAccessOps: state => state.is_accessops,
}