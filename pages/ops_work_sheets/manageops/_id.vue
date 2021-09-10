<template>
  <div>
    <div class="w-full block justify-between">
      <div>
        <nav class="bg_titlen">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0"></div>
                <Nuxt-Link to="/ops_work_sheets/notification">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-left-circle text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                    />
                  </svg>
                </Nuxt-Link>
                <div class="title ml-4">Work Sheets</div>
              </div>
            </div>
          </div>
        </nav>

        <div class="p-4">
          <div class="p-1 mb-2">
            Code Name :
            {{ showgetdata.code_name }}
          </div>
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl class="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-2">
                <div
                  class="sm:col-span-1"
                  v-for="(item, index) in data_info"
                  :key="index"
                >
                  <dt class="text-sm font-medium text-gray-500">
                    {{ index }}
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">{{ item }}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div class="flex justify-end mt-3">
            <vs-button color="medium" @click="getjob()">รับงาน</vs-button>
          </div>

          <!-- input Area -->
          <div class="textdetail mt-2">
            <label
              for="name"
              class="block text-xs font-medium text-gray-900 mb-2"
              >รายละเอียดปัญหา</label
            >
            <label>ปัญหา : {{ datatext.text }}</label>
            <div v-if="textdelete === true">
              เหตุผลที่ยกเลิก :
              <input
                v-on-clickaway="opencencel"
                v-model="textdata"
                type="text"
                class="border rounded-md p-1"
                @keypress.enter="cenceljob(textdata)"
              />
            </div>

            <div class="flex justify-end">
              <button class="cencel" @click="opencencel()">
                ยกเลิกการซ่อม
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data: () => ({
    lineid: "line1",
    textdelete: false,
    textdata: "",

    data_info: {
      ProductCode: "",
      ProductName: "",
      ProductType: "",
      Department: " ",
      EmployeeID: "",
      ProductUser: "",
      ProductDetails: "",
      SerialNumber: "",
      Note: "",
    },
    datatext: {},
  }),

  computed: {
    showgetdata() {
      return this.$store.getters["generate_qr/gettersGetDATABYID"];
    },
    getreportByid() {
      return this.$store.getters["reportops/gettersReportById"];
    },
  },

  watch: {
    showgetdata(data) {
      this.insertdata = JSON.parse(JSON.stringify(data));

      this.data_info = {
        ProductCode: this.insertdata.info.ProductCode,
        ProductName: this.insertdata.info.ProductName,
        ProductType: this.insertdata.info.ProductType,
        Department: this.insertdata.info.Department,
        EmployeeID: this.insertdata.info.EmployeeID,
        ProductUser: this.insertdata.info.ProductUser,
        ProductDetails: this.insertdata.info.ProductDetails,
        SerialNumber: this.insertdata.info.SerialNumber,
        Note: this.insertdata.info.Note,
      };
      this.history_info = this.insertdata.history_info;
      this.operator = this.insertdata.ops;
    },
    getreportByid(data) {
      this.datatext = JSON.parse(JSON.stringify(data));
    },
  },

  async created() {
    await this.viewdataqrcode();
    await this.reportByid();
  },

  methods: {
    insertpage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push("/insertdata");
    },

    async viewdataqrcode() {
      await this.$store.dispatch("generate_qr/getDataQrCodeJson");
    },

    async reportByid() {
      await this.$store.dispatch("reportops/reportByIdFromApi", {
        opsid: this.$route.params.id,
        line_id: this.lineid,
      });
    },

    async getjob() {
      await this.$store.dispatch("reportops/getjobFromApi", {
        opsid: this.$route.params.id,
        line_id: this.lineid,
      });
    },

    async opencencel() {
      this.textdelete = true;
    },
    async cenceljob(cenceldata) {
      console.log(cenceldata);
      await this.$store.dispatch("reportops/deletejobFromApi", {
        opsid: this.$route.params.id,
        line_id: this.lineid,
        text_data: cenceldata,
      });
    },
  },
};
</script>

<style >
.title {
  color: aliceblue;
  font-size: 24px;
}
.bg_titlen {
  background-color: rgb(2, 184, 117);
}
.textdetail {
  width: 100%;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: inherit;
  padding: 10px;
}
.cencel {
  font-size: 12px;
  color: gray;
  margin-top: 5px;
}
</style>