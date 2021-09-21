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
            <div class="title ml-4">รายงานสถานะ</div>
          </div>
        </div>
      </div>
    </nav>

    <!-- แจ้ง 1  -->
    <div class="p-6" v-for="(data, index) in getallData.ops" :key="index">
      <div>
        <h2>{{ data.Ops.type }} : {{ data.Ops.text }}</h2>
        <!-- <h6>หมายเลขทะเบียน : 4120-001-0002</h6> -->
      </div>

      <div
        v-for="(statusupdate, index) in data.Ops.status_worksheet"
        :key="index"
      >
        <ul role="list" class="-mb-8 p-3" v-if="statusupdate.status != ''">
          <li>
            <div class="relative pb-6">
              <!-- line status -->
              <div
                v-if="statusupdate.status != data.Ops.status_worksheet.length"
              >
                <span
                  class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
              </div>

              <div class="relative flex space-x-3">
                <div>
                  <span
                    :class="`h-8
                      w-8
                      rounded-full
                      flex
                      items-center
                      justify-center
                      ring-8 ring-white ${
                        fomatStatusToDetail(statusupdate.status).color
                      }`"
                  >
                  </span>
                </div>
                <div
                  class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                >
                  <div>
                    
                    <p
                      :class="`font-medium ${
                        fomatStatusToDetail(statusupdate.status).text
                      }`"
                    >
                      <!-- {{statusupdate}} -->
                      {{ statusupdate.status }}
                    </p>
                    <br />
                    <a href="#" class="text-sm text-gray-500">
                      <a class="text-sm"
                        >{{
                          fomatStatusToDetail(statusupdate.status).detail
                        }} </a
                      ><br />
                      <!-- <a>กำลังดำเนินการแก้ไข</a> -->
                    </a>
                  </div>
                  <div
                    class="text-right text-sm whitespace-nowrap text-gray-500"
                  >
                    <time>{{
                      statusupdate.update_at != ""
                        ? $moment(statusupdate.update_at).format("DD-MM-YYYY")
                        : "-"
                    }}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    getstatus: {},
  }),

  computed: {
    getallData() {
      return this.$store.getters["generate_qr/gettersGetDATABYID2"];
    },
    getDataStatus() {
      return this.$store.getters["reportops/gettersUpdateData"];
    },
  },

  watch: {},

  async created() {
    // await this.getDataupdate();
    await this.viewdataqrcode();
  },

  methods: {
    backtohome() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push(`/viewer/equipment_v/${this.$route.params.id}`);
    },

    // async getDataupdate() {
    //   await this.$store.dispatch("reportops/getDataUpdateFormApi");
    // },

    // async viewdataqrcode() {
    //   await this.$store.dispatch(`generate_qr/getDataQrCodeJson`,this.qr_code_id);
    // },

    async viewdataqrcode() {
      await this.$store.dispatch(
        `generate_qr/getDataQrCodeJson2`,
        this.$route.params.id
      );
    },

    fomatStatusToDetail(status) {
      //  console.log(status);
      if (status == "รอดำเนิดการ") {
        return {
          text: "text-blue-500",
          color: "bg-blue-500",
        };
      } else if (status == "กำลังดำเนินการ") {
        return {
          detail: "เจ้าหน้าที่รับเรื่องแล้ว กำลังดำเนินการแก้ไข",
          text: "text-yellow-500",
          color: "bg-yellow-500",
        };
      } else if (status == "ดำเนินการเสร็จสิ้น") {
        return {
          detail: "เจ้าหน้าที่ได้ทำงานซ่อมบำรุง และพร้อมใช้งานแล้ว",
          text: "text-green-500",
          color: "bg-green-500",
        };
      } else {
        return {
          detail: "เจ้าหน้าที่ยกเลิกการดำเดินการ",
          text: "text-red-500",
          color: "bg-red-500",
        };
      }
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
h6 {
  font-size: 12px;
}
p {
  color: white;
}
</style>