export const state = () => ({
    users: [],
    userops: {},
    subowner: [],
    userid: '',
    qr_id: '',
    datajons: {}
})

export const mutations = {
    SET_ACCOUNT(state, payload) {
        if (payload !== null) {
            state.users = payload;
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
    },

    SET_ACCOUNTOPS(state, data) {
        // if (data !== null) {
        state.userops = data;
        // console.log("Dataform API After =", state.userops);
        // }
    },
    SET_QRCODEID(state, data) {
        state.qr_id = data
    },
    // DATA JSON
    GET_DATAQRJSON(state, data) {
        console.log("JSON", data);
        state.datajons = data
    },
}
export const actions = {

    // async getDataQrCodeJson(state, payload) {
    //     console.log("DATA2", payload);
    //     qe_id
    //     state.commit("SET_QRCODEID", payload)
    //     console.log(payload);
    //     await this.$axios.$get(`/api/qr-api/getDataQrCodeJson/${payload}`).then(res => {
    //         state.commit("GET_DATAQRJSON", res)
    //     }).catch(error => {
    //         console.log(error);
    //         console.log("Incorrect information");
    //     })
    // },
    getDataQrCodeJson(state, payload) {
        return new Promise(async(resolve, reject) => {
            await this.$axios.$get(`/api/qr-api/getDataQrCodeJson/${payload}`).then(res => {
                state.commit("GET_DATAQRJSON", res)
                resolve(res)
            }).catch(error => {
                reject(error)
                console.log(error);
                console.log("Incorrect information");
            })
        })
    },

    async getQrCodeId(state, payload) {
        console.log("QR_ID", payload);
        state.commit("SET_QRCODEID", payload)
            // qe_id
            // state.commit("SET_QRCODEID", payload)
    },

    getAccountOps(state, payload) {
        console.log("line", payload);
        state.commit("SET_UID", payload.lindeid)
        this.$axios.$get(`/api/ops/getAccount/${payload.lindeid}`).then(res => {
            console.log("RES", res);
            if (res == "") {
                console.log("Viewer");
                this.$router.push(`/viewer/equipment_v/${payload.qr_id}`); /// Viewver
            }
            if (res != '')  {
                console.log("Index");
                // this.$router.push(`/?liff.state=%3Fqr_id%3D${payload.qr_id}`); /// Ops
                this.$router.push(`/?qr_id=${payload.qr_id}`); /// Ops
                // this.$router.push(`/mainmenu/${payload.qr_id}`); /// Ops
            }
            state.commit("SET_ACCOUNTOPS", res)
        }).catch((error) => {
            console.log("ERROR", error);
        })
    },

    getAccountlineId(state, payload) {
        // console.log("lineQR", payload);
        state.commit("SET_UID", payload)
    },

    getSubOwner(state, payload) {
        this.$axios.$get(`/admin/getSubOwner/${payload}`).then(res => {
            state.commit("GETSUB_OWNER", res)

        }).catch(error => {
            console.log(error);
        })
    },

    updateAccountFormApi(state, payload) {
        this.$axios.$put(`/owner/updateProfile/${payload.usersid}`, payload.data).then(res => {
            // console.log("Result_Update", res);
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
    gettersOps: (state) => state.userops, // getAccountOps
    gettersSubOwner: (state) => state.subowner,

    gettersUId: (state) => state.userid,
    gettersQRcodeId: (state) => state.qr_id, // getqr_id
    gettersGetDATAQRJSON: (state) => state.datajons
}
