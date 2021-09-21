<template>
  <div>
    <div class="w-full block justify-between">
      <div>
        <nav class="bg_titlen">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0"></div>
                <div class="title ml-4">Work Sheets</div>
              </div>
            </div>
          </div>
        </nav>

        <div class="p-4">
          <div>
            <div v-for="(job, index) in getallreport" :key="index">
              <!-- <Nuxt-Link to="/ops_work_sheets/manageops"> -->
              <div @click="manageopspage(job.id)">
                <ul role="list" class="divide-y divide-gray-200">
                  <li class="py-4">
                    <div class="flex space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-megaphone"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"
                        />
                      </svg>
                      <div class="flex-1 space-y-1">
                        <div class="flex items-center">
                          <h3 class="text-lg font-medium">
                            {{ job.type }}
                          </h3>

                          <div v-if="job.ops != null">
                            <h3 class="text-lg font-medium ml-3">
                              รับงานโดย {{ job.ops }}
                            </h3>
                          </div>
                        </div>
                        <h3 class="text-sm text-gray-500">
                          รายการ : <span>{{ job.text }}</span>

                          <!-- {{job.status_worksheet.length}} -->

                          <!-- Satatus -->
                          <span
                            class="font-bold"
                            v-for="(item, index) in job.status_worksheet"
                            :key="index"
                          >
                            <!-- {{item}}
                          {{index}} -->
                            {{
                              fomatStatusToDetail(
                                item.status,
                                job.status_worksheet.length
                              ).status
                            }}

                            <!-- <span class="ml-2">
                              {{
                                item.update_at != ""
                                  ? $moment(item.update_at).format("DD/MM/YYYY")
                                  : "-"
                              }}
                            </span> -->
                          </span>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <!-- More items... -->
                </ul>
              </div>
              <!-- </Nuxt-Link> -->
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
    // lineid: "demo3",
    lineid: "",
  }),

  computed: {
    showgetdata() {
      return this.$store.getters["generate_qr/gettersGetDATABYID"];
    },
    getallreport() {
      return this.$store.getters["reportops/gettersReport"];
    },
    getUid() {
      return this.$store.getters["account_operator/gettersUId"];
    },
  },

  watch: {
    async getUid(data) {
      this.lineid = data;
      await this.getreport();
    },
  },

  async created() {
    // await this.getreport();
  },

  methods: {
    manageopspage(opsid) {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push(`/ops_work_sheets/manageops/${opsid}`);
    },

    async getreport() {
      await this.$store.dispatch("reportops/getallreport", this.lineid);
    },

    // Status symbol

    fomatStatusToDetail(status, lastindex) {
      // console.log("Last Index", lastindex);
      // console.log("Status", status);

      if (status == lastindex) {
        return {
          status: status.length,
          text: "text-blue-500",
        };
      } else {
        return {
          status: status,
          text: "text-red-500",
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
.bg_titlen {
  background-color: rgb(2, 184, 117);
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