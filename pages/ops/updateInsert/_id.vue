<template>
  <div>
    <nav class="bg_title">
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
            <div class="title ml-4">อัพเดทข้อมูล</div>
          </div>
        </div>
      </div>
    </nav>
    <div>
      <!--body-->
      <ValidationObserver ref="form">
        <!-- Select Templates -->
        <!-- <ValidationProvider>
                  <div class="flex justify-center mt-4 mb-4">
                    <vs-select
                      v-if="templatelist.length > 0"
                      label-placeholder="Templates Name"
                      v-model="dataQrById.template_name"
                    >
                      <vs-option
                        v-for="(template, index) in templatelist"
                        :key="index"
                        :label="template.templates_name"
                        :value="template.templates_name"
                        >{{ template.templates_name }}</vs-option
                      >
                    </vs-select>
                  </div>
                </ValidationProvider> -->

        <!-- computer -->
        <!-- v-if="dataQrById.template_name === 'computer'" -->
        <div class="p-3 items-center">
          <!-- ProductCode -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="ProductCode"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="ProductCode"
                type="text"
                v-model="updateinformation.info.ProductCode"
              />
            </div>
            <label class="flex justify-center h-5">
              <div
                v-if="errors && errors.length > 0"
                class="text-red-400 texterror text-xs text-xs"
              >
                <label>{{ errors[0] }}</label>
              </div>
            </label>
          </ValidationProvider>

          <!-- ProductName-->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="ProductName"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="ProductName"
                type="text"
                v-model="updateinformation.info.ProductName"
              />
            </div>
            <label class="flex justify-center h-5">
              <div
                v-if="errors && errors.length > 0"
                class="flex justify-center text-red-400 texterror text-xs"
              >
                <label>{{ errors[0] }}</label>
              </div>
            </label>
          </ValidationProvider>
          <!-- ProductType -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="ProductType"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="ProductType"
                type="text"
                v-model="updateinformation.info.ProductType"
              />
            </div>
            <label class="flex justify-center h-5">
              <div
                v-if="errors && errors.length > 0"
                class="flex justify-center text-red-400 texterror text-xs"
              >
                <label>{{ errors[0] }}</label>
              </div>
            </label>
          </ValidationProvider>
          <!-- Department -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="Department"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="Department"
                type="text"
                v-model="updateinformation.info.Department"
              />
            </div>
            <label class="flex justify-center h-5">
              <div
                v-if="errors && errors.length > 0"
                class="flex justify-center text-red-400 texterror text-xs"
              >
                <label>{{ errors[0] }}</label>
              </div>
            </label>
          </ValidationProvider>
          <!-- EmployeeID -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="EmployeeID"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="EmployeeID"
                type="text"
                v-model="updateinformation.info.EmployeeID"
              />
            </div>
            <label class="flex justify-center h-5">
              <div
                v-if="errors && errors.length > 0"
                class="flex justify-center text-red-400 texterror text-xs"
              >
                <label>{{ errors[0] }}</label>
              </div>
            </label>
          </ValidationProvider>
          <!-- ProductUser -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="ProductUser"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="ProductUser"
                type="text"
                v-model="updateinformation.info.ProductUser"
              />
            </div>
            <label class="flex justify-center h-5">
              <div
                v-if="errors && errors.length > 0"
                class="flex justify-center text-red-400 texterror text-xs"
              >
                <label>{{ errors[0] }}</label>
              </div>
            </label>
          </ValidationProvider>
          <!-- ProductDetails -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="ProductDetails"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-cent p-2 mx-2"
                label-placeholder="ProductDetails"
                type="text"
                v-model="updateinformation.info.ProductDetails"
              />
            </div>
            <label class="flex justify-center h-5 mb-2">
              <div
                v-if="errors && errors.length > 0"
                class="flex justify-center text-red-400 texterror text-xs"
              >
                <label>{{ errors[0] }}</label>
              </div>
            </label>
          </ValidationProvider>
          <!-- SerialNumber -->
          <ValidationProvider v-slot="{ errors }" rules="required" name="Note">
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-cent p-2 mx-2"
                label-placeholder="SerialNumber"
                type="text"
                v-model="updateinformation.info.SerialNumber"
              />
            </div>
            <label class="flex justify-center h-5 mb-2">
              <div
                v-if="errors && errors.length > 0"
                class="flex justify-center text-red-400 texterror text-xs"
              >
                <label>{{ errors[0] }}</label>
              </div>
            </label>
          </ValidationProvider>
        </div>

        <!-- officeEquipment -->
        <div
          v-if="updateinformation.template_name === 'officeEquipment'"
          class="justify-center"
        >
          <!-- Power Case -->
          <!-- <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Case"
                  >
                    <div class="relative flex-auto">
                      <vs-input
                        class="flex justify-center p-2"
                        label-placeholder="Case"
                        type="text"
                        v-model="dataQrById.info.case"
                      />
                    </div>
                    <div
                      v-if="errors && errors.length > 0"
                      class="flex justify-center text-red-400"
                    >
                      <li>{{ errors[0] }}</li>
                    </div>
                  </ValidationProvider> -->
          <!-- Power Supply -->
          <!-- <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Power Supply"
                  >
                    <div class="relative flex-auto">
                      <vs-input
                        class="flex justify-center p-2"
                        label-placeholder="Power Supply"
                        type="text"
                        v-model="dataQrById.info.power_supply"
                      />
                    </div>
                    <div
                      v-if="errors && errors.length > 0"
                      class="flex justify-center text-red-400"
                    >
                      <li>{{ errors[0] }}</li>
                    </div>
                  </ValidationProvider> -->
          <!-- Main Boar -->
          <!-- <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="Main Boar"
                  >
                    <div class="relative flex-auto">
                      <vs-input
                        class="flex justify-center p-2"
                        label-placeholder="Main Boar"
                        type="text"
                        v-model="dataQrById.info.main_boar"
                      />
                    </div>
                    <div
                      v-if="errors && errors.length > 0"
                      class="flex justify-center text-red-400 px-3 mb-2"
                    >
                      <li>{{ errors[0] }}</li>
                    </div>
                  </ValidationProvider> -->
          <!-- CPU -->
          <!-- <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="CPU"
                  >
                    <div class="relative flex-auto">
                      <vs-input
                        class="flex justify-center p-2"
                        label-placeholder="CPU"
                        type="text"
                        v-model="dataQrById.info.cpu"
                      />
                    </div>
                    <div
                      v-if="errors && errors.length > 0"
                      class="flex justify-center text-red-400"
                    >
                      <li>{{ errors[0] }}</li>
                    </div>
                  </ValidationProvider> -->
          <!-- RAM -->
          <!-- <ValidationProvider
                    v-slot="{ errors }"
                    rules="required"
                    name="RAM"
                  >
                    <div class="relative flex-auto">
                      <vs-input
                        class="flex justify-center p-2"
                        label-placeholder="RAM"
                        type="text"
                        v-model="dataQrById.info.ram"
                      />
                    </div>
                    <div
                      v-if="errors && errors.length > 0"
                      class="flex justify-center text-red-400"
                    >
                      <li>{{ errors[0] }}</li>
                    </div>
                  </ValidationProvider> -->
        </div>
      </ValidationObserver>

      <!--footer-->
      <div
        class="
          flex
          items-center
          justify-end
          p-3
          border-t border-solid border-blueGray-200
          rounded-b
        "
      >
        <vs-button danger border type="button" @click="backtohome()">
          Close
        </vs-button>
        <vs-button border @click="updateData(updateinformation)">
          Update
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: 1,
    limit: 5,
    showModal: false,
    showModalInsert: false,
    lineid: "U47d218c860e35342a979a0224b92ff60",

    update: {
      id: "",
      firstname: "",
      lastname: "",
      phonenumber: "",
      lineid: "",
    },
    search: "",

    getdatallqrcode: {
      owner_id: null,
      owner_username: null,
      created_at: null,
      updated_at: null,
      template_name: null,
      qr_code_id: null,
      code_name: null,
      url: null,
      active: false,
    },

    data_historyQrById: {
      history_info: {},
      owner_id: null,
    },
    data_infoQrById: {
      info: {},
      ops: {},
      owner_id: null,
    },

    updateinformation: {
      info: {},
      qr_code_id: null,
      line_user_id: null,
      owner_id: null,
    },

    opsdata: {},

    getdataqrcode: null,
    getdataownerid: null,

    getterallqrcode: [],

    getdatabyid: null,
    getownerid: null,
  }),

  computed: {
    showgetdata() {
      return this.$store.getters["generate_qr/gettersGetDATABYID"];
    },
    getUid() {
      return this.$store.getters["account_operator/gettersUId"];
    },
  },

  watch: {
    showgetdata(data) {
      //   console.log("DATAByJSon", data);
      this.insertdata = JSON.parse(JSON.stringify(data));
      this.updateinformation.info = this.insertdata.info;
    },
  },

  async created() {
    await this.getdatajson();
    
    this.lineid = this.getUid;
    if (this.getUid) {
      this.getreport();
    }
  },

  methods: {
    backtohome() {
      console.log("this.$route.params.id", this.$route.params.id);
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
        this.$router.push({
          path: "/",
          query: { qr_id: this.$route.params.id },
        });
      }, 1000);
      // this.$router.push(`/?qr_id=${this.$route.params.id}`);
    },

    async getdatajson() {
      await this.$store.dispatch(
        `generate_qr/getDataQrCodeJson`,
        this.$route.params.id
      );
    },

    async updateData(updateinfo) {
      await this.$store
        .dispatch("generate_qr/updateDataQrCode", {
          dataupdate: updateinfo.info,
          line_user_id: this.lineid,
          qrcodeid: this.$route.params.id,
          owner_id: this.insertdata.owner_id,
        })
        .then(() => {
          const loading = this.$vs.loading();
          setTimeout(() => {
            loading.close();
            this.$router.push(`/ops/equipment/${this.$route.params.id}`);
          }, 1000);
        })
        .catch((error) => {
          const position = "top-center";
          const color = "danger";
          const duration = 6000;
          this.$vs.notification({
            position,
            color,
            duration,
            progress: "auto",
            title: "พบข้อผิดพลาด",
            text: error,
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
.bg_title {
  background-color: rgb(255, 186, 0);
}
</style>
