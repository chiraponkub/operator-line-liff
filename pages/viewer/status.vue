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
            <div class="title ml-4">รายงานสถานะ</div>
          </div>
        </div>
      </div>
    </nav>

    <!-- แจ้ง 1  -->
    <div class="p-6">
      <div>
        <h2>แจ้ง 1 : เก้าอี้โยก</h2>
        <h6>หมายเลขทะเบียน : 4120-001-0002</h6>
      </div>

      <div class="p-6">
        <ul role="list" class="-mb-8">
          <li>
            <div class="relative pb-8">
              <span
                class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
              ></span>
              <div class="relative flex space-x-3">
                <div>
                  <span
                    class="
                      h-8
                      w-8
                      rounded-full
                      bg-blue-500
                      flex
                      items-center
                      justify-center
                      ring-8 ring-white
                    "
                  >
                  </span>
                </div>
                <div
                  class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                >
                  <div>
                    <p class="font-medium text-blue-500">รอดำเนินการ</p>
                  </div>
                  <div
                    class="text-right text-sm whitespace-nowrap text-gray-500"
                  >
                    <time datetime="2021-09-20">2021-09-20</time>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="relative pb-8">
              <span
                class="absolute top-4 left-4 -ml-px h-32 w-0.5 bg-gray-200"
                aria-hidden="true"
              ></span>
              <div class="relative flex space-x-3">
                <div>
                  <span
                    class="
                      h-8
                      w-8
                      rounded-full
                      bg-yellow-500
                      flex
                      items-center
                      justify-center
                      ring-8 ring-white
                    "
                  >
                  </span>
                </div>
                <div
                  class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                >
                  <div>
                    <p class="font-medium text-yellow-500">
                      กำลังดำเดินการ
                      <br />
                      <a href="#" class="text-sm text-gray-500"
                        ><a class="text-sm">เจ้าหน้าที่รับเรื่องแล้ว </a><br />
                        <a>กำลังดำเดินการแก้ไข</a>
                      </a>
                    </p>
                  </div>
                  <div
                    class="text-right text-sm whitespace-nowrap text-gray-500"
                  >
                    <time datetime="2021-09-22">2021-09-20</time>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="relative pb-8">
              <div class="relative flex space-x-3">
                <div>
                  <span
                    class="
                      h-8
                      w-8
                      rounded-full
                      bg-green-500
                      flex
                      items-center
                      justify-center
                      ring-8 ring-white
                    "
                  >
                  </span>
                </div>
                <div
                  class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                >
                  <div>
                    <p class="font-medium text-blue-500">
                      เสร็จสิ้น
                      <br />
                      <a href="#" class="text-sm text-gray-500"
                        ><a class="text-sm">เจ้าหน้าที่ได้ทำงานซ่อมบำรุง </a
                        ><br />
                        <a>และพร้อมใช้งานแล้ว</a>
                      </a>
                    </p>
                  </div>
                  <div
                    class="text-right text-sm whitespace-nowrap text-gray-500"
                  >
                    <time datetime="2021-09-28">2021-09-20</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- แจ้ง 2  -->
    <div class="p-6">
      <div>
        <h2>แจ้ง 2 : เก้าอี้โยก</h2>
        <h6>หมายเลขทะเบียน : 4120-001-0002</h6>
      </div>

      <div class="p-6">
        <ul role="list" class="-mb-8">
          <li>
            <div class="relative pb-8">
              <span
                class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
              ></span>
              <div class="relative flex space-x-3">
                <div>
                  <span
                    class="
                      h-8
                      w-8
                      rounded-full
                      bg-blue-500
                      flex
                      items-center
                      justify-center
                      ring-8 ring-white
                    "
                  >
                  </span>
                </div>
                <div
                  class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                >
                  <div>
                    <p class="font-medium text-blue-500">รอดำเนินการ</p>
                  </div>
                  <div
                    class="text-right text-sm whitespace-nowrap text-gray-500"
                  >
                    <time datetime="2021-09-20">2021-09-20</time>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="relative pb-8">
              <span
                class="absolute top-4 left-4 -ml-px h-32 w-0.5 bg-gray-200"
                aria-hidden="true"
              ></span>
              <div class="relative flex space-x-3">
                <div>
                  <span
                    class="
                      h-8
                      w-8
                      rounded-full
                      bg-yellow-500
                      flex
                      items-center
                      justify-center
                      ring-8 ring-white
                    "
                  >
                  </span>
                </div>
                <div
                  class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                >
                  <div>
                    <p class="font-medium text-yellow-500">
                      กำลังดำเดินการ
                      <br />
                      <a href="#" class="text-sm text-gray-500"
                        ><a class="text-sm">เจ้าหน้าที่รับเรื่องแล้ว </a><br />
                        <a>กำลังดำเดินการแก้ไข</a>
                      </a>
                    </p>
                  </div>
                  <div
                    class="text-right text-sm whitespace-nowrap text-gray-500"
                  >
                    <time datetime="2021-09-22">2021-09-20</time>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div class="relative pb-8">
              <div class="relative flex space-x-3">
                <div>
                  <span
                    class="
                      h-8
                      w-8
                      rounded-full
                      bg-red-500
                      flex
                      items-center
                      justify-center
                      ring-8 ring-white
                    "
                  >
                  </span>
                </div>
                <div
                  class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                >
                  <div>
                    <p class="font-medium text-blue-500">
                      ยกเลิกการดำเดินการ
                      <br />
                      <a href="#" class="text-sm text-gray-500"
                        ><a
                          >เจ้าหน้าที่ยกเลิกการดำเดินการ
                        </a>
                      </a>
                    </p>
                  </div>
                  <div
                    class="text-right text-sm whitespace-nowrap text-gray-500"
                  >
                    <time datetime="2021-09-28">2021-09-20</time>
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
  data: () => ({}),

  computed: {
    templatelist() {
      return this.$store.getters["generate_qr/gettersTemplates"];
    },
  },

  watch: {},

  async created() {
    // await this.getTemplate();
  },

  methods: {
    backtohome() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push("/");
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
</style>