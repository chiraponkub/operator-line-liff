<template>
  <div>
    <nav class="bg_titlee">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <Nuxt-Link to="/viewer/equipment_v">
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
            </div>
            <div class="title ml-4">รายละเอียดแจ้งปัญหา</div>
          </div>
        </div>
      </div>
    </nav>

    <div class="p-7">
      <vs-radio v-model="picked" val="1"> แจ้งปัญหา </vs-radio>
      <vs-radio v-model="picked" val="2"> แจ้งซ่อม </vs-radio>

      <!-- input Area 1 -->
      <div v-if="picked == '1'" class="mt-6">
        <label for="name" class="block text-xs font-medium text-gray-900"
          >แจ้งปัญหา</label
        >
        <textarea v-model="dataproblem"> </textarea>
        <div class="flex justify-end">
          <vs-button @click="sendproblem()">ส่ง</vs-button>
        </div>
      </div>

      <!-- input Area 2 -->
      <div v-if="picked == '2'" class="mt-4">
        <label for="name" class="block text-xs font-medium text-gray-900"
          >รายละเอียดแจ้งซ่อม</label
        >
        <textarea v-model="dataproblem"> </textarea>
        <div class="flex justify-end">
          <vs-button @click="sendrepair()">ส่ง</vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    picked: null,
    dataproblem: "",
  }),

  computed: {},

  watch: {},

  created() {},

  methods: {

    // backtohome() {
    //   const loading = this.$vs.loading();
    //   setTimeout(() => {
    //     loading.close();
    //   }, 1000);
    //   this.$router.push("/");
    // },

    sendproblem() {
      console.log("Send problem");
    },
    sendrepair() {
      console.log("Send repair");
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
textarea {
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