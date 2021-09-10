export const state = () => ({
    allreport: [],
    reportId: null
})

export const mutations = {
    SET_REPORT(state, payload) {
        state.allreport = payload;
    },
    SET_REPORTBYID(state, payload) {
        // console.log("reportIDDD", payload);
        state.reportId = payload;
    },
}
export const actions = {
    getallreport(state, payload) {
        // console.log("report", payload);
        this.$axios.$get(`/api/ops/report/${payload}`).then(res => {
            console.log(res);
            state.commit("SET_REPORT", res)
        }).catch(error => {
            console.log(error);
        })
    },
    reportByIdFromApi(state, payload) {
        const param = {
            report_id: payload.opsid,
            line_user_id: payload.line_id
        }
        this.$axios.$get(`api/ops/report/`, { params: param }).then(res => {
            // console.log("reportByIdFromApi", res);
            state.commit("SET_REPORTBYID", res)
        }).catch(error => {
            console.log(error);
        })
    },
    getjobFromApi(state, payload) {
        console.log(payload);
        this.$axios.$put(`api/ops/worksheet/${payload.opsid}`, { line_user_id: payload.line_id }).then(res => {
            console.log("get job", res);
            // state.commit("SET_REPORTBYID", res)
        }).catch(error => {
            console.log(error);
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
}

export const getters = {
    gettersReport: (state) => state.allreport,
    gettersReportById: (state) => state.reportId,
}