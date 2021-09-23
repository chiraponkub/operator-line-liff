export const state = () => ({
    allreport: [],
    reportId: null,
    status_current: [],
    type_report: [],
    data_update: {}
})

export const mutations = {
    SET_REPORT(state, payload) {
        state.allreport = payload;


    },
    SET_REPORTBYID(state, payload) {
        state.reportId = payload;
    },

    SET_STATUSUPDATE(state, payload) {
        state.statusupdate = payload;
    },

    SET_GETTYPEREPORT(state, payload) {
        state.type_report = payload.data
    },

    GET_DATAUPDATE(state, payload) {
        state.data_update = payload
    }

}
export const actions = {
    getallreport(state, payload) {
        console.log("report", payload);
        this.$axios.$get(`/api/ops/report/${payload}`).then(res => {
            state.commit("SET_REPORT", res)
        }).catch(error => {
            console.log(error);
        })
    },

    reportByIdFromApi(state, payload) {
        console.log("ReportID , Linde", payload);
        const param = {
            report_id: payload.opsid,
            line_user_id: payload.line_id
        }
        this.$axios.$get(`api/ops/report/`, { params: param }).then(res => {
            state.commit("SET_REPORTBYID", res)
        }).catch(error => {
            console.log(error);
        })
    },


    postjobFromApi(state, payload) {
        this.$axios.$post("api/ops/report", {
            line_user_id: payload.line_id,
            qr_code_id: payload.qrcodeid,
            text: payload.text,
            type: payload.type
        }).then(res => {
            // state.commit("SET_STATUSUPDATE", payload.satatus)
        }).catch(error => {
            alert("Text or Type required")
            console.log(error);
        })
    },

    getjobFromApi(state, payload) {
        console.log(payload);
        this.$axios.$put(`api/ops/worksheet/${payload.opsid}`, {
            line_user_id: payload.line_id
        }).then(res => {
            console.log("get job", res);
            state.commit("SET_STATUSUPDATE", payload.satatus)
        }).catch(error => {
            console.log(error);
            alert("มีช่างซ่อมรับงานนี้ไปแล้ว");
        })
    },

    confirmJobFromApi(state, payload) {
        console.log("ConfirmJob", payload);
        this.$axios.$put(`api/ops/report/${payload.opsid}`, {
            line_user_id: payload.line_id,
            text: payload.text_data,
            // equipments: [],
        }).then(res => {
            // state.commit("SET_STATUSUPDATE", payload.satatus)
        }).catch(error => {
            console.log(error);
            alert("มีช่างซ่อมรับงานนี้ไปแล้ว");
        })
    },

    deletejobFromApi(state, payload) {
        console.log("deleteAPI", payload);
        this.$axios.$delete(`api/ops/report/${payload.opsid}`, {
            data: {
                line_user_id: payload.line_id,
                text: payload.text_data
            }
        }).then(res => {
            console.log("Delete job", res);
            // state.commit("SET_REPORTBYID", res)
        }).catch(error => {
            console.log(error);
        })
    },

    gettypeReportFormApi(state, payload) {
        this.$axios.$get("api/ops/typeReport").then((res) => {
            state.commit("SET_GETTYPEREPORT", res)
        })
    },

    getDataUpdateFormApi(state, payload) {
        this.$axios.$get(`api/ops/getDataUpdate/${payload}`)
            .then((res) => {
                state.commit('GET_DATAUPDATE', res)
            })
    }

}

export const getters = {
    gettersReport: (state) => state.allreport,
    gettersReportById: (state) => state.reportId,
    gettersUpdateStatus: (state) => state.statusupdate,
    gettersTypeReport: (state) => state.type_report,
    gettersUpdateData: (state) => state.data_update,
}
