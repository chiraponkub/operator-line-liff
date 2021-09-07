const accessToken = localStorage.getItem('accessToken')

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
        console.log("GETDATAQRCODEBYID", payload);
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
    getAllQRCodefromApi(state) {
        this.$axios.$get('/owner/getQrCode').then(res => {
            // console.log("getAllQRCodefromApi", res);
            state.commit("GET_QRCODELIST", res)
        }).catch(error => {
            console.log(error);
            console.log("Incorrect information");
        })
    },

    getDateQrById(state, payload) {
        this.$axios.$get(`api/qr-api/getDataQrCodeJson/b70e40c2-e548-4924-88b6-f5210a73134c`).then(res => {
            state.commit("GETDATAQRCODEBYID", res)
        }).catch(error => {
            console.log(error);
            console.log("Incorrect information");
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

    updateinsertDataQrCode(state, payload) {
        this.$axios.$post("/owner/insertDataQrCode", {
            owner_id: parseInt(payload.ownerids),
            template_name: payload.templatename,
            qr_code_id: payload.qrcodeid,
            info: payload.data,
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