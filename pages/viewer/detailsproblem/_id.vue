<template>
  <div>
    <nav class="bg_titlee">
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
            <div class="title ml-4">รายละเอียดแจ้งปัญหา</div>
          </div>
        </div>
      </div>
    </nav>

    <div class="p-7">
      <!-- Test -->
      <!-- <div>
        <ul>
          <li v-for="(item, index) in data" :key="index">
            <input
              type="radio"
              v-model="checked"
              :value="item.type_worksheet"
            />
            {{ item.type_worksheet }}
          </li>
          {{
            checked
          }}
        </ul>
      </div> -->

      <div v-for="(type, index) in type_report" :key="index">
        <input type="radio" v-model="checked" :value="type.type_worksheet" />
        {{ type.type_worksheet }}

        <!-- <div class="textdetail mt-2">
          <label for="name" class="block text-xs font-medium text-gray-900 mb-2"
            >รายละเอียดปัญหา</label
          >
          <label>ปัญหา : {{ datatext.text }}</label>

          <div class="flex justify-end">
            <button class="cencel" @click="opencencel()">ยกเลิกการซ่อม</button>
          </div>
        </div> -->

        <!-- <div v-if="checked == type.type_worksheet" class="textdetail mt-2">
          <label for="name" class="block text-xs font-medium text-gray-900">{{
            type.type_worksheet
          }}</label>
          <label>ปัญหา : {{ detaildata.text }}</label>
          <div class="flex justify-end">
            <vs-button @click="sendproblem(detaildata.text)">ส่ง</vs-button>
          </div>
        </div> -->

        <div class="textdetail mt-2" v-if="checked == type.type_worksheet">
          <label
            for="name"
            class="block text-xs font-medium text-gray-900 mb-2"
            >{{ type.type_worksheet }}</label
          >
          <label>ปัญหา : <input type="text" v-model="detaildata.text" /></label>
          <div class="flex justify-end">
            <vs-button @click="sendproblem(detaildata.text, checked)"
              >ส่ง</vs-button
            >
          </div>
        </div>
      </div>

      <!-- input Area 1 -->
      <!-- <div class="textdetail mt-2" v-if="picked == '1'">
        <label for="name" class="block text-xs font-medium text-gray-900 mb-2"
          >แจ้งปัญหา</label
        >
        <label>ปัญหา : <input type="text" v-model="detaildata.text" /></label>
        <div class="flex justify-end">
          <vs-button @click="sendproblem()">ส่ง</vs-button>
        </div>
      </div> -->

      <!-- input Area 2 -->
      <!-- <div v-if="picked == '2'" class="mt-4">
        <label for="name" class="block text-xs font-medium text-gray-900"
          >รายละเอียดแจ้งซ่อม</label
        >
        <textarea v-model="dataproblem"> </textarea>
        <div class="flex justify-end">
          <vs-button @click="sendrepair()">ส่ง</vs-button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    picked: null,
    dataproblem: "",

    type_report: [],

    detaildata: {
      text: "",
      type: "",
    },

    data: [
      {
        type_worksheet: "แจ้งซ่อม",
      },
      {
        type_worksheet: "แจ้งปัญหา",
      },
    ],
    checked: "",
  }),

  computed: {
    typeReport() {
      return this.$store.getters["reportops/gettersTypeReport"];
    },
    getallreport() {
      return this.$store.getters["reportops/gettersReport"];
    },
  },

  watch: {
    typeReport(data) {
      console.log("Type", data);
      this.type_report = JSON.parse(JSON.stringify(data));
    },
  },

  async created() {
    await this.gettypeReport();
    // await this.viewdataqrcode();
  },

  methods: {
    backtohome() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push(
        `/viewer/equipment_v/${this.$route.params.id}`
      );
    },

    // sendproblem() {
    //   console.log("Send problem");
    //   const loading = this.$vs.loading();
    //   setTimeout(() => {
    //     loading.close();
    //   }, 1000);
    //   this.$router.push(
    //     `/viewer/status/${this.$route.params.id}`
    //   );
    // },

    // sendrepair() {
    //   console.log("Send repair");
    //   const loading = this.$vs.loading();
    //   setTimeout(() => {
    //     loading.close();
    //   }, 1000);
    //   this.$router.push("/viewer/status");
    // },

    // async viewdataqrcode() {
    //   await this.$store.dispatch("generate_qr/getDataQrCodeJson2");
    // },

    async gettypeReport() {
      await this.$store.dispatch("reportops/gettypeReportFormApi");
    },

    async sendproblem(data, checked) {
      console.log("Text", data);
      console.log("checked", checked);
      await this.$store.dispatch("reportops/postjobFromApi", {
        qrcodeid: this.$route.params.id,
        text: data,
        type: checked,
      });
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push(`/viewer/status/${this.$route.params.id}`);
    },
  },
};
</script>

<style >
.title {
  color: aliceblue;
  font-size: 24px;
}
.bg_titlee {
  background-color: rgb(255, 69, 0);
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
}
</style>