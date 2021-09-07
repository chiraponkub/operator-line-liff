<template>
  <!-- <Tutorial/> -->
  <!-- <div>
    <h1 class="flex justify-center">Index Page</h1>
    <div class="p-3 mt-5">
      <p></p>
    </div>
    <vs-button @click="logout()">Logout</vs-button>
  </div> -->

  <div class="p-4 bg-white">
    <div class="w-full block justify-between p-2">
      <div>
        <!-- <h4>OwnerName : {{ showgetdata.owner_name }}</h4>
        <h5>TemplateName : {{ showgetdata.template_name }}</h5>
        <h6>CodeName : {{ showgetdata.code_name }}</h6> -->
        <hr />
        <!-- {{ getterallqrcode }} -->

        <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 p-2">
          <!-- History -->
          <div class="bg-white shadow sm:rounded-lg oldinfo">
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
                <dl class="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2">
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
                    <dt class="text-sm font-medium text-gray-500">cpu :</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.cpu }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">ram :</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.ram }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">case :</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.case }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      hard_disk :
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.hard_disk }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Main Boar :
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.main_boar }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      Graphic Card :
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.HistoryInfo.graphic_card }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <!-- Information -->
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Information
              </h3>
            </div>

            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl class="grid grid-cols-1 gap-x-3 gap-y-3 sm:grid-cols-2">
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
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
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
                      <p>CPU :</p>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.Ops.cpu }} -> {{ data_info.cpu }}
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      <p>RAM :</p>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.Ops.ram }} -> {{ data_info.ram }}
                    </dd>
                  </div>

                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      <p>Case :</p>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.Ops.case }} -> {{ data_info.case }}
                    </dd>
                  </div>

                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      <p>Hard Disk :</p>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.Ops.hard_disk }} -> {{ data_info.hard_disk }}
                    </dd>
                  </div>

                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                      <p>Main Boar :</p>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.Ops.main_boar }} -> {{ data_info.main_boar }}
                    </dd>
                  </div>

                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-500">
                      <p>Graphic Card :</p>
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      {{ item.Ops.graphic_card }} ->
                      {{ data_info.graphic_card }}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  // layout: "admin",
  middleware: "isAuth",
  data: () => ({
    getterallqrcode: [],
    insertdata: {},
    showModal: false,

    data_info: {
      case: "",
      power_supply: "",
      main_boar: "",
      cpu: "",
      ram: "",
      graphic_card: "",
      hard_disk: "",
    },
    history_info: [],

    operator: [],
  }),

  computed: {
    showgetallqrcode() {
      return this.$store.getters["generate_qr/gettersGetAllQrCode"];
    },
    showgetdata() {
      return this.$store.getters["generate_qr/gettersGetDATABYID"];
    },
  },

  watch: {
    showgetallqrcode(data) {
      this.getterallqrcode = JSON.parse(JSON.stringify(data));
    },
    showgetdata(data) {
      console.log("DAta", data);
      this.insertdata = JSON.parse(JSON.stringify(data));

      this.data_info = {
        cpu: this.insertdata.info.cpu,
        ram: this.insertdata.info.ram,
        case: this.insertdata.info.case,
        hard_disk: this.insertdata.info.hard_disk,
        main_boar: this.insertdata.info.main_boar,
        graphic_card: this.insertdata.info.graphic_card,
        power_supply: this.insertdata.info.power_supply,
      };
      this.history_info = this.insertdata.history_info;
      this.operator = this.insertdata.ops;
    },
  },
  async created() {
    await this.getqrcodelist();
    await this.viewdataqrcode();
  },

  methods: {
    logout() {
      localStorage.clear();
      this.$router.go("/login");
    },

    async getqrcodelist() {
      await this.$store.dispatch("generate_qr/getAllQRCodefromApi");
    },

    async viewdataqrcode() {
      await this.$store.dispatch(
        "generate_qr/getDateQrById",
      );
    },
  },
};
</script>
