<template>
  <div>
    <div class="w-full block justify-between">
      <div>
        <nav class="bg_titleb">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <svg
                    @click="backtohome()"
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
                </div>
                <div class="title ml-4">ตรวจสอบครุภัณฑ์</div>
              </div>
            </div>
          </div>
        </nav>

        <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 p-2">
          <!-- History -->
          <!-- <div class="bg-white shadow sm:rounded-lg oldinfo">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Old Information
              </h3>
            </div>
            <div class="h-96 overflow-y-scroll">
              <div
                class="border-t border-gray-200 px-4 py-5 sm:px-6"
                v-for="(item, index) in history_info"
                :key="index"
              >
                <dl class="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-2">
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      <b>UpdatedAt :</b>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{
                        item.UpdatedAt != ""
                          ? $moment(item.UpdatedAt).format(
                              "DD/MM/YYYY HH:mm:ss"
                            )
                          : "-"
                      }}
                    </dd>
                  </div>

                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      ProductCode :
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.ProductCode }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      ProductName :
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.ProductName }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      ProductType :
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.ProductType }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Department :
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.Department }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      EmployeeID :
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.EmployeeID }}
                    </dd>
                  </div>

                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      ProductUser :
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.ProductUser }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      ProductDetails :
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.ProductDetails }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      SerialNumber :
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.SerialNumber }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div> -->

          <!-- Information -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6 grid grid-cols-2 gap-x-3 gap-y-3">
              <h3 class="text-lg font-medium text-gray-900">Information</h3>
            </div>

            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl class="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-2">
                <div
                  class="sm:col-span-1"
                  v-for="(item, index) in data_info"
                  :key="index"
                >
                  <dt class="text-sm font-medium text-gray-500">{{ index }}</dt>
                  <dd class="mt-1 text-sm text-gray-900">{{ item }}</dd>
                </div>
              </dl>
            </div>
          </div>

          <!-- Operator -->
          <!-- <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Operator
              </h3>
            </div>
            <div class="h-96 overflow-y-scroll">
              <div
                class="border-t border-gray-200 px-4 py-5 sm:px-6"
                v-for="(item, index) in operator"
                :key="index"
              >
                <dl class="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2">
                  
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      <p>UpdatedAt :</p>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{
                        item.UpdatedAt != ""
                          ? $moment(item.UpdatedAt).format(
                              "DD/MM/YYYY HH:mm:ss"
                            )
                          : "-"
                      }}
                    </dd>
                  </div>

                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      <p>Text :</p>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.Ops.text }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      <p>Type :</p>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.Ops.type }}
                    </dd>
                  </div>

                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      <p>Status :</p>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.Ops.status_worksheet_1 }}
                    </dd>
                  </div>

                </dl>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  // layout: "admin",
  // middleware: "isAuth",
  data: () => ({
    getterallqrcode: [],
    insertdata: {},
    showModal: false,

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
      ProductInsurance: "",
      PurchaseDate: "",
      StartUsingTheProduct: "",
      EndUsingTheProduct: "",
    },
    history_info: [],

    operator: [],
    ops: {
      text: "",
      type: "",
      qr_code_id: "",
      // status_worksheet_1: {
      //   status: "",
      //   update_at: "",
      // },
    },
  }),

  computed: {
    showgetallqrcode() {
      return this.$store.getters["generate_qr/gettersGetAllQrCode"];
    },
    showgetdata() {
      return this.$store.getters["generate_qr/gettersGetDATABYID"];
    },
    gatQrId() {
      return this.$store.getters["account_operator/gettersQRcodeId"];
    },
    urlPath() {
      return window.location.href;
    },
  },

  watch: {
    showgetallqrcode(data) {
      this.getterallqrcode = JSON.parse(JSON.stringify(data));
    },
    showgetdata(data) {
      // console.log("DATA", data);
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
        // Note: this.insertdata.info.Note,
      };

      this.history_info = this.insertdata.history_info;
      this.operator = this.insertdata.ops;
      // console.log("this.data_info", this.operator);
    },
  },
  async created() {
    // await this.getqrcodelist();
    await this.viewdataqrcode();
  },

  methods: {
    backtohome() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
        this.$router.push({
          path: "/",
          query: { qr_id: this.$route.params.id },
        });
      }, 1000);
      // console.log("QUERY", this.$route.query.qr_id);
      // this.$router.push(`/?liff.state=%3Fqr_id%3D${this.$route.params.id}`);
    },

    // logout() {
    //   localStorage.clear();
    //   this.$router.go("/login");
    // },

    // insertpage() {
    //   const loading = this.$vs.loading();
    //   setTimeout(() => {
    //     loading.close();
    //   }, 1000);
    //   this.$router.push("/insertdata");
    // },
    // updatepage() {
    //   const loading = this.$vs.loading();
    //   setTimeout(() => {
    //     loading.close();
    //   }, 1000);
    //   this.$router.push("/updatedata");
    // },

    async viewdataqrcode() {
      await this.$store
        .dispatch(`generate_qr/getDataQrCodeJson`, this.$route.params.id)
        .catch((err) => {
          const position = "top-center";
          const color = "danger";
          const duration = 6000;
          this.$vs.notification({
            position,
            color,
            duration,
            progress: "auto",
            title: "พบข้อผิดพลาด",
            text: err,
          });
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
.bg_titleb {
  background-color: rgb(25, 91, 255);
}
</style>