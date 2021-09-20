<template>
  <div>
    <div class="w-full block justify-between">
      <div>
        <nav class="bg_titler">
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
                <div class="title ml-4">รับซ่อม</div>
              </div>
            </div>
          </div>
        </nav>

        <div class="p-4">
          <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 p-2">
            <!-- Information -->
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
          </div>

          <!-- Check ยืนยัน ถ้ามีการกด edit ให้ส่งค่านั้นมา เช็คเงื่อนไขให้ปุ่มหาย v-if="add_newdata.worksheet != null"-->
          <div class="flex justify-end mt-3">
            <vs-button
              success
              icon
              color="tumblr"
              @click="confirmjobOps(add_newdata)"
            >
              <i class="bx bx-select-multiple mr-2"></i>ยืนยันซ่อม</vs-button
            >
          </div>
          <!-- <div v-if="add_newdata != ''">
            <a>No repair notice</a>
          </div> -->

          <!-- input Area -->
          <div v-for="(data, index) in add_newdata" :key="index">
            <div class="textdetail mt-2">
              <label
                for="name"
                class="block text-xs font-medium text-gray-900 mb-2"
                >รายละเอียดปัญหา</label
              >
              <div class="grid grid-cols-2 p-2">
                <label>ปัญหา : {{ data.text }}</label>

                <div class="iconsdown">
                  <svg
                    @click="isMenuExpand(data.id)"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    class="bi bi-arrow-down-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                    />
                  </svg>
                </div>
              </div>
              <!-- input Cencel -->
              <div v-if="data.is_opencencel === true" class="p-2">
                เหตุผลที่ยกเลิก :
                <input
                  v-model="data.textcencel"
                  type="text"
                  class="border rounded-md w-3/5 p-1"
                  @keypress.enter="cenceljob(data)"
                />
              </div>
              <!-- button Cencel -->
              <div class="flex justify-end p-2">
                <button class="cencel" @click="isCencleExpand(data.id)">
                  ยกเลิกการซ่อม
                </button>
              </div>
            </div>

            <div
              class="textdetail2 mt-2 grid grid-cols-1 p-2"
              v-if="data.is_open == true"
            >
              การดำเนินการ :
              <div class="grid grid-cols-1 gap-x-4 items-center">
                <input
                  v-model="data.input_proceed"
                  type="text"
                  class="border rounded-md p-1 mb-2"
                  @keypress.enter="confirmjobOps()"
                />
                <div>
                  <label> อุปกรณ์ที่ใช้ : </label>
                  <div class="grid grid-cols-2 gap-x-4 items-center">
                    <input
                      v-model="data.equipments"
                      type="text"
                      class="border rounded-md p-1"
                    />
                    <button @click="add_equipments(count)">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        class="bi bi-plus-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                        />
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
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
  data: () => ({
    getterallqrcode: [],
    lineid: "demo3",
    insertdata: {},
    showModal: false,
    textdelete: false,
    textcencel: "",

    add_newdata: [],
    is_open: false,

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
      //   ProductInsurance: "",
      //   PurchaseDate: "",
      //   StartUsingTheProduct: "",
      //   EndUsingTheProduct: "",
    },
    history_info: [],
    operator: [],

    count: 0,
  }),

  computed: {
    showgetallqrcode() {
      return this.$store.getters["generate_qr/gettersGetAllQrCode"];
    },
    showgetdata() {
      return this.$store.getters["generate_qr/gettersGetDATABYID"];
    },
    getDataStatus() {
      return this.$store.getters["reportops/gettersUpdateData"];
    },
    gatQrId() {
      return this.$store.getters["account_operator/gettersQRcodeId"];
    },
  },

  watch: {
    showgetallqrcode(data) {
      this.getterallqrcode = JSON.parse(JSON.stringify(data));
    },
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
        // ProductInsurance: this.insertdata.info.ProductInsurance,
        // PurchaseDate: this.insertdata.info.PurchaseDate,
        // StartUsingTheProduct: this.insertdata.info.StartUsingTheProduct,
        // EndUsingTheProduct: this.insertdata.info.EndUsingTheProduct,
      };
      this.history_info = this.insertdata.history_info;
      this.operator = this.insertdata.ops;
    },

    getDataStatus(data) {
      if (data.worksheet != null) {
        this.add_newdata = data.worksheet.map((items) => {
          return {
            id: items.id,
            qr_code_id: items.qr_code_id,
            text: items.text,
            type: items.type,
            ops: items.ops,
            status_worksheet: items.status_worksheet,
            is_open: false,
            is_opencencel: false,
            input_proceed: "",
            textcencel: "",
          };
        });
        console.log("this.add_newdata", this.add_newdata);
      } else {
        this.openNotification();
      }
    },
  },

  async created() {
    await this.viewdataqrcode();
    await this.getDataupdate();
  },

  methods: {
    backtohome() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push(`/?liff.state=%3Fqr_id%3D${this.$route.params.id}`);
    },

    insertpage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push("/insertdata");
    },
    updatepage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push("/updatedata");
    },

    async viewdataqrcode() {
      console.log("QR_ID", this.gatQrId);
      await this.$store.dispatch(
        "account_operator/getDataQrCodeJson",
        this.gatQrId
      );
    },
    // async viewdataqrcode() {
    //   console.log("QR_ID", this.gatQrId);
    //   await this.$store.dispatch(
    //     "account_operator/getDataQrCodeJson",
    //     this.gatQrId
    //   );
    // },

    async viewdataqrcode() {
      await this.$store.dispatch(
        `generate_qr/getDataQrCodeJson`,
        this.$route.params.id
      );
    },

    // Doing Today
    async confirmjobOps(arraydata) {
      console.log("Con", arraydata);
      for (let index in arraydata) {
        if (arraydata[index].input_proceed != "") {
          if (arraydata[index].equipments != "") {
            console.log("input_proceed", arraydata[index].input_proceed);
            await this.$store.dispatch("reportops/confirmJobFromApi", {
              opsid: arraydata[index].id,
              line_id: this.lineid,
              text_data: arraydata[index].input_proceed,
              equipments_data: arraydata[index].equipments,
            });
          }
          this.confirmNotification();
        }
      }
    },

    isMenuExpand(index) {
      const newArr = this.add_newdata;
      newArr.forEach((element) => {
        if (element.id === index) {
          if (!element.is_open) {
            element.is_open = true;
          } else {
            element.is_open = false;
          }
        } else {
          element.is_open = false;
        }
      });

      this.add_newdata = [...newArr];
    },

    isCencleExpand(index) {
      const conFirm = confirm("คุณแน่ใจหรือไหมที่จะยกเลิกการซ่อม?");
      if (conFirm === true) {
        const newArr2 = this.add_newdata;
        newArr2.forEach((element) => {
          if (element.id === index) {
            if (!element.is_opencencel) {
              element.is_opencencel = true;
            } else {
              element.is_opencencel = false;
            }
          } else {
            element.is_opencencel = false;
          }
        });

        this.add_newdata = [...newArr2];
      }
    },

    // ----------------- ยกเลิกการซ่อม -------------
    // want
    async opencencel() {
      const conFirm = confirm("คุณแน่ใจหรือไหมที่จะยกเลิกการซ่อม?");
      if (conFirm === true) {
        this.textdelete = true;
      }
    },
    async cenceljob(item) {
      const conFirm = confirm("คุณแน่ใจหรือไหมที่จะยกเลิกการดำเนินการ?");
      if (conFirm === true) {
        await this.$store.dispatch("reportops/deletejobFromApi", {
          opsid: item.id,
          line_id: this.lineid,
          text_data: item.textcencel,
        });
        alert("รับงานเรียบร้อยแล้ว");
      }
    },

    async getDataupdate() {
      await this.$store.dispatch("reportops/getDataUpdateFormApi");
    },

    openNotification(position = "top-center", color = "warn", duration = 6000) {
      const noti = this.$vs.notification({
        position,
        color,
        duration,
        progress: "auto",
        title: "ไม่พบข้แมูลการแจ้งซ่อม",
        text: `การดำเนินการเสร็จสิ้น,
            หรือถูกยกเลิกการดำเนินการไปแล้ว`,
      });
    },
    confirmNotification(
      position = "button-center",
      color = "success",
      duration = 4000
    ) {
      const noti = this.$vs.notification({
        progress: "auto",
        color,
        position,
        duration,
        title: "ยืนยันการซ่อมเสร็จสิ้น",
      });
    },

    add_equipments(countplus) {
      countplus = this.count++;
      console.log(countplus);
    },
  },
};
</script>

<style >
.title {
  color: aliceblue;
  font-size: 24px;
}
.bg_titler {
  background-color: rgb(54, 70, 93);
}
.textdetail {
  width: 100%;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: inherit;
  padding: 10px;
}
.textdetail2 {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: inherit;
  padding: 10px;
}
.cencel {
  font-size: 12px;
  color: gray;
}
a {
  text-decoration: none;
}

.expandables {
  background: #fff;
  overflow: hidden;
  color: #000;
  line-height: 50px;

  transition: all 0.5s ease-in-out;
  transform-origin: left top;
  transform: scaleY(0);
}
.expandable:target {
  transform: scaleY(1);
}
.iconsdown {
  /* margin-left: 70%; */
  display: flex;
  place-content: flex-end;
}

.vs-button {
  margin: 10px;
}
</style>

