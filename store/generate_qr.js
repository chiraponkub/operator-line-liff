// const accessToken = localStorage.getItem('accessToken')

export const state = () => ({
    templates: [],
    allqrcode: [],
    getqrcodelist: [],
    getdataqrcodebyidowner: {},
    getdataqrcodebyid: {},
    databyid: {}
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
    GETDATAQRCODEBYID(state, payload) {
        state.databyid = payload
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
    // getAllQRCodefromApi(state) {
    //     this.$axios.$get('/owner/getQrCode').then(res => {
    //         // console.log("getAllQRCodefromApi", res);
    //         state.commit("GET_QRCODELIST", res)
    //     }).catch(error => {
    //         console.log(error);
    //         console.log("Incorrect information");
    //     })
    // },

    async getDataQrCodeJson(state, payload) {
        // 55391398-5dd1-49c2-adfb-a84d78516c16
        await this.$axios.$get(`api/qr-api/getDataQrCodeJson/9473c2a1-ae0b-4d17-9d24-0c24fe83498d`).then(res => {
            // console.log("json", res);
            state.commit("GETDATAQRCODEBYID", res)
        }).catch(error => {
            console.log(error);
            console.log("Incorrect information");
        })
    },

    async insertDataQrCodeFormApi(state, payload) {
        // console.log("insertData", payload);
        await this.$axios.$post("/api/ops/insertDataQrCode", {
            owner_id: payload.ownerids,
            line_user_id: payload.lineid,
            qr_code_id: payload.qrcodeid,
            info: payload.data,
            template_name: payload.templatename
        }).then(res => {
            // console.log("DataQrCodeByid", res);
            // state.commit("GET_INSERTDATAQRCODEBYIDOWNER", res)
        }).catch(error => {
            console.log(error);
            console.log("Insert information");
            alert("")
        })
    },

    async insertDataQrCodeByidOwner(state, payload) {
        await this.$axios.$get(`/qr-api/getDataQrCodeJson/${payload.qr_code_id}`).then(res => {
            console.log("DataQrCodeByid", res);
            state.commit("GET_INSERTDATAQRCODEBYIDOWNER", res)
        }).catch(error => {
            console.log(error);
            console.log("Incorrect information");
        })
    },

    async updateDataQrCode(state, payload) {
        await this.$axios.$put("/api/ops/updateDataQrCode", {
            owner_id: payload.owner_id,
            line_user_id: payload.line_user_id,
            qr_code_id: payload.qrcodeid,
            info: payload.dataupdate,
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
    gettersGetDATABYID: (state) => state.databyid
}