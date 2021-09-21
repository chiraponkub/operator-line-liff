<template>
  <div>
    <nav class="bg_title">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0"></div>
            <div class="title ml-4">เลือกประเภท QR code</div>
          </div>
        </div>
      </div>
    </nav>

    <div>
      <!--body-->
      <ValidationObserver ref="form">
        <!-- Select Templates -->
        <ValidationProvider>
          <div class="flex justify-center mt-6 mb-4">
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
        </ValidationProvider>

        <!-- computer -->
        <div
          v-if="dataQrById.template_name === 'computer'"
          class="p-3 items-center"
        >
          <!-- Case -->
          <ValidationProvider v-slot="{ errors }" rules="required" name="Case">
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="Case"
                type="text"
                v-model="dataQrById.info.case"
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
          <!-- Power Supply -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="Power Supply"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="Power Supply"
                type="text"
                v-model="dataQrById.info.power_supply"
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
          <!-- Main Boar -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="Main Boar"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="Main Boar"
                type="text"
                v-model="dataQrById.info.main_boar"
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
          <!-- CPU -->
          <ValidationProvider v-slot="{ errors }" rules="required" name="CPU">
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="CPU"
                type="text"
                v-model="dataQrById.info.cpu"
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
          <!-- RAM -->
          <ValidationProvider v-slot="{ errors }" rules="required" name="RAM">
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="RAM"
                type="text"
                v-model="dataQrById.info.ram"
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
          <!-- Graphic Card -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="Graphic Card"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-center p-2 mx-2"
                label-placeholder="Graphic Card"
                type="text"
                v-model="dataQrById.info.graphic_card"
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
          <!-- Hard Disk -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="Hard Disk"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-cent p-2 mx-2"
                label-placeholder="Hard Disk"
                type="text"
                v-model="dataQrById.info.hard_disk"
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
          v-if="dataQrById.template_name === 'officeEquipment'"
          class="justify-center"
        >
          <!-- ProductCode-->
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
                v-model="dataQrById.info.ProductCode"
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
                v-model="dataQrById.info.ProductName"
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
                v-model="dataQrById.info.ProductType"
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
                v-model="dataQrById.info.Department"
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
                v-model="dataQrById.info.EmployeeID"
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
                v-model="dataQrById.info.ProductUser"
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
          <!-- Note -->
          <ValidationProvider v-slot="{ errors }" rules="required" name="Note">
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-cent p-2 mx-2"
                label-placeholder="Note"
                type="text"
                v-model="dataQrById.info.Note"
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
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="SerialNumber"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-cent p-2 mx-2"
                label-placeholder="SerialNumber"
                type="text"
                v-model="dataQrById.info.SerialNumber"
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
                v-model="dataQrById.info.ProductDetails"
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
          <!-- ProductInsurance -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="ProductInsurance"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-cent p-2 mx-2"
                label-placeholder="ProductInsurance"
                type="text"
                v-model="dataQrById.info.ProductInsurance"
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
          <!-- EndUsingTheProduct -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="EndUsingTheProduct"
          >
            <div class="relative flex-auto">
              <vs-input
                class="flex justify-cent p-2 mx-2"
                label-placeholder="EndUsingTheProduct"
                type="text"
                v-model="dataQrById.info.EndUsingTheProduct"
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
        <vs-button border @click="insertDataOps(dataQrById)">
          Save Changes
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

    lineid: "demo3",

    update: {
      id: "",
      firstname: "",
      lastname: "",
      phonenumber: "",
      lineid: "",
    },
    search: "",

    dataQrById: {
      info: {},
      ops: null,
      history_info: null,
      owner_id: null,
      template_name: "",
      code_name: "",
    },

    getdatabyid: null,
    getownerid: null,
  }),

  computed: {
    templatelist() {
      return this.$store.getters["generate_qr/gettersTemplates"];
    },
    showgetdata() {
      return this.$store.getters["generate_qr/gettersGetDATABYID"];
    },
  },

  async created() {
    await this.getTemplate();
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
    },

    async getTemplate() {
      await this.$store.dispatch("generate_qr/getTemplateFromApi").then(() => {
        this.templatels = this.$store.getters["generate_qr/gettersTemplates"];
      });
    },

    async viewdataqrcode() {
      var id = this.$route.params.id;
      await this.$store.dispatch(`generate_qr/getDataQrCodeJson`, id);
    },

    // async insertDataOps(datainsert) {
    //   console.log("template_name", this.showgetdata.qr_code_id);
    //   await this.$store.dispatch("generate_qr/insertDataQrCodeFormApi", {
    //     data: datainsert.info,
    //     lineid: this.lineid,
    //     templatename: datainsert.template_name,
    //     qrcodeid: this.showgetdata.qr_code_id,
    //     ownerids: this.showgetdata.owner_id,
    //   });
    //   console.log("ID : ", this.showgetdata.qr_code_id);
    //   const loading = this.$vs.loading();
    //   setTimeout(() => {
    //     loading.close();
    //     this.$router.push(
    //       `/?liff.state=%3Fqr_id%3D${this.showgetdata.qr_code_id}`
    //     );
    //   }, 1000);
    // },

    async insertDataOps(datainsert) {
      console.log("template_name", this.showgetdata.qr_code_id);
      await this.$store.dispatch("generate_qr/insertDataQrCodeFormApi", {
        data: datainsert.info,
        lineid: this.lineid,
        templatename: datainsert.template_name,
        qrcodeid: this.showgetdata.qr_code_id,
        ownerids: this.showgetdata.owner_id,
      });
      console.log("ID : ", this.showgetdata.qr_code_id);
      
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
        this.$router.push({
          path: "/",
          query: { qr_id: this.$route.params.id },
        });
        // this.$router.push(
        //   `/?liff.state=%3Fqr_id%3D${this.showgetdata.qr_code_id}`
        // );
      }, 1000);
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
  background-color: rgb(59, 222, 200);
}
</style>