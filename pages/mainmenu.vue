<template>
  <div>
    <div class="menu grid grid-cols-2 gap-x-3 gap-y-3 p-4">
      <vs-button color="messenger" @click="equipmentpage()"
        ><p>ตรวจสอบครุภัณฑ์</p>
      </vs-button>
      <vs-button color="tumblr" @click="repairpage()"
        ><p>รับซ่อม</p>
      </vs-button>
      <vs-button warn gradient class="text-center" @click="updatepage()"
        ><p>อัพเดทข้อมูล</p>
      </vs-button>
    </div>
  </div>
</template>

<script >
export default {
  // layout: "default",
  data: () => ({
    // lineid: "U47d218c860e35342a979a0224b92ff60",
    lineid: "",
    data_info: "",
    template_name: "",
    qr_code_id: "",
    code_name: "",
  }),

  computed: {
    gataccountops() {
      return this.$store.getters["account_operator/gettersOps"];
    },
    gatdataJson() {
      return this.$store.getters["account_operator/gettersGetDATAQRJSON"];
    },

    getUid() {
      return this.$store.getters["account_operator/gettersUId"];
    },
  },

  watch: {
    gatdataJson(data) {
      this.data_info = data.info;
      this.template_name = data.template_name;
      this.qr_code_id = data.qr_code_id;
      this.code_name = data.code_name;
    },
    // getUid(data) {
    //   this.lineid = data;
    //   console.log("this.lineid1", this.lineid);
    // },
  },

  async created() {
    await this.viewdataqrcode();
    await this.getaccountOps();
  },

  methods: {
    equipmentpage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push(`/ops/equipment/${this.qr_code_id}`);
    },

    repairpage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push(`/ops/repair/${this.qr_code_id}`);
    },

    updatepage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push(`/ops/updateInsert/${this.qr_code_id}`);
    },

    async getaccountOps() {
      // this.lineid = this.$store.getters["account_operator/gettersUId"];
      console.log("4");
      await this.$store.dispatch("account_operator/getAccountOps", {
        // lindeid: this.lineid,
        lindeid: this.getUid,
        qr_id: this.qr_code_id,
      });
    },

    async viewdataqrcode() {
      let qr_id = 0;
      const queryQR = `${this.$route.query["liff.state"]}`;
      const qrID = new URLSearchParams(queryQR);
      const params = Object.fromEntries(qrID.entries());
      qr_id = params.qr_id;
      console.log("5");
      console.log("qr_id", qr_id);

      // this.$store.dispatch("account_operator/getQrCodeId", qr_id);

      await this.$axios
        .$get(`/api/qr-api/getDataQrCodeJson/${qr_id}`)
        .then((result) => {
          console.log("result", result);
          this.data_info = result.info;
          this.template_name = result.template_name;
          this.qr_code_id = result.qr_code_id;
          this.code_name = result.code_name;
          console.log("this.qr_code_id", this.qr_code_id);

          if (this.template_name == "") {
            this.$router.push(`/insertdata/${qr_id}`);
            if (this.gataccountops == "") {
              // viewer error
              this.$router.push("/errorpage");
            }
          }
          // if (res == "") {
          //   this.$router.push(`/viewer/equipment_v/${payload.qr_id}`);  Viewver
          // } else if (res != "") {
          //   this.$router.push(`/?liff.state=%3Fqr_id%3D/${payload.qr_id}`);
          // } else {
          //   this.$router.push("/login");
          // }
        })
        .catch((err) => {
          console.log("Error");
        });
    },
  },
};
</script>

<style scoped>
.menu {
  text-align: center;
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
}
p {
  font-size: 16px;
}
</style>
