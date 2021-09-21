// const accessToken = localStorage.getItem('accessToken')

export const state = () => ({
    templates: [],
    allqrcode: [],
    getqrcodelist: [],
    getdataqrcodebyidowner: {},
    getdataqrcodebyid: {},
    databyid: {},
    databyid2: {}
})

export const mutations = {
    GET_TEMPLATE(state, payload) {
        if (payload.data !== null) {
            state.templates = payload.data
                // console.log('state_templates', state.templates);
        }
    },

    GET_QRCODELIST(state, payload) {
        if (payload !== null) {
            state.getqrcodelist = payload
        } else {
            state.getqrcodelist = []
        }
    },
    ///// set Qr_ID
    GETDATAQRCODEBYID(state, payload) {
        state.databyid = payload
    },
    GETDATAQRCODEBYID2(state, payload) {
        state.databyid2 = payload
    },

    GET_INSERTDATAQRCODEBYIDOWNER(state, payload) {
        state.getdataqrcodebyidowner = payload
    },
    GET_INSERTDATAQRCODEBYID(state, payload) {
        state.getdataqrcodebyid = payload
    },
}

export const actions = {
    getTemplateFromApi(state) {
        this.$axios.$get("/api/ops/getTemplate").then(res => {
            state.commit("GET_TEMPLATE", res)
        })
    },

    async getDataQrCodeJson(state, payload) {
        console.log("DATA3", payload);
        return new Promise(async(resolve, reject) => {
            await this.$axios.$get(`api/qr-api/getDataQrCodeJson/${payload}`).then(res => {
                state.commit("GETDATAQRCODEBYID", res)
                resolve(res)
            }).catch(error => {
                reject(error)
                console.log(error);
                console.log("Incorrect information");
            })
        })


    },
    async getDataQrCodeJson2(state, payload) {
        console.log("DATA4", payload);
        await this.$axios.$get(`api/qr-api/getDataQrCodeJson/${payload}`).then(res => {
            state.commit("GETDATAQRCODEBYID2", res)
        }).catch(error => {
            alert(error)
            console.log(error);
            console.log("Incorrect information");
        })
    },

    async insertDataQrCodeFormApi(state, payload) {
        // console.log("insertData", payload);
        return new Promise(async(resolve, reject) => {
            await this.$axios.$post("/api/ops/insertDataQrCode", {
                owner_id: payload.ownerids,
                line_user_id: payload.lineid,
                qr_code_id: payload.qrcodeid,
                info: payload.data,
                template_name: payload.templatename
            }).then(res => {
                resolve(res)
                    // console.log("DataQrCodeByid", res);
                    // state.commit("GET_INSERTDATAQRCODEBYIDOWNER", res)
            }).catch(error => {
                reject(res)
                console.log(error);
                console.log("Insert information");
                alert("error")
            })
        })

    },

    async insertDataQrCodeByidOwner(state, payload) {
        await this.$axios.$get(`/qr-api/getDataQrCodeJson/${payload.qr_code_id}`).then(res => {
            console.log("DataQrCodeByid", res);
            state.commit("GET_INSERTDATAQRCODEBYIDOWNER", res)
        }).catch(error => {
            console.log(error);
            console.log("Incorrect information");
            alert("error")
        })
    },

    async updateDataQrCode(state, payload) {
        return new Promise(async(resolve, reject) => {
            await this.$axios.$put("/api/ops/updateDataQrCode", {
                owner_id: payload.owner_id,
                line_user_id: payload.line_user_id,
                qr_code_id: payload.qrcodeid,
                info: payload.dataupdate,
            }).then((res) => {
                resolve(res)
            }).catch(error => {
                reject(error)
                console.log(error);
                console.log("Incorrect information");
            })
        })
    },

    deleteQrCode(state, payload) {
        console.log("DATA", payload);
        const delqr = {
            qr_code_id: [
                payload
            ]
        }
        this.$axios.$delete("/admin/delQrCode", { data: delqr }).then((res) => {
            console.log("Delete", res);
        })
    }
}

export const getters = {
    gettersTemplates: (state) => state.templates,
    gettersAllQrCodeByOwner: (state) => state.allqrcode,
    gettersGetAllQrCode: (state) => state.getqrcodelist,
    gettersGetDataQrCodeByidOwner: (state) => state.getdataqrcodebyidowner,
    gettersGetDataQrCodeByid: (state) => state.getdataqrcodebyid,
    gettersGetDATABYID: (state) => state.databyid,
    gettersGetDATABYID2: (state) => state.databyid2
}