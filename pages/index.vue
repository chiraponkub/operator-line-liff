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
    // lineid: "ss",
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
    getOriginPathFull() {
      return this.$store.getters["account_operator/gettersUId"];
    },
    urlPath() {
      return window.location.href;
    },
  },

  watch: {
    async getUid(data) {
      this.lineid = data;
      // console.log("this.lineid1", this.lineid);
    },
    gatdataJson(data) {
      this.qr_code_id = data.qr_code_id;
    },
  },

  async created() {
    await liff.init(
      { liffId: "1656385614-YE6rXz2M" },
      () => {
        if (liff.isLoggedIn()) {
          liff
            .getProfile()
            .then((profile) => {
              this.userId = profile.userId;
              this.displayName = profile.displayName;
              this.statusMessage = profile.statusMessage;
              this.pictureUrl = profile.pictureUrl;
              this.email = liff.getDecodedIDToken().email;
              this.$store.dispatch(
                "account_operator/getAccountlineId",
                profile.userId
              );
            })
            .catch((err) => console.error(err));
        } else {
          liff.login();
        }
      },
      (err) => console.error(err.code, error.message)
    );

    await this.viewdataqrcode();
    this.lineid = this.getUid;
  },

  methods: {
    equipmentpage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
        this.$router.push(`/ops/equipment/${this.qr_code_id}`);
      }, 1000);
    },

    repairpage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
        this.$router.push(`/ops/repair/${this.qr_code_id}`);
      }, 1000);
    },

    updatepage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
        this.$router.push(`/ops/updateInsert/${this.$route.query.qr_id}`);
      }, 1000);
    },

    async getaccountOps() {
      console.log("11 kub");
      await this.$store.dispatch("account_operator/getAccountOps", {
        // lindeid: this.getUid,
        lindeid: this.lineid,
        qr_id: this.$route.query.qr_id,
      });
    },

    async viewdataqrcode() {

      // console.log(this.$route); //ดู route
      let qr_id = 0;
      // const queryQR = `${this.$route.query["liff.state"]}`;
      // const qrID = new URLSearchParams(queryQR);
      // const params = Object.fromEntries(qrID.entries());
      // qr_id = params.qr_id;
      qr_id = this.$route.query.qr_id;

      console.log("qr_id", qr_id);

      // this.$store.dispatch("account_operator/getQrCodeId", qr_id);

      await this.$store
        .dispatch("account_operator/getDataQrCodeJson", qr_id)
        .then((result) => {
          this.data_info = result.info;
          this.template_name = result.template_name;
          this.qr_code_id = result.qr_code_id;
          this.code_name = result.code_name;
          if (this.template_name === "") {
            console.log("Comming route", `${qr_id}`);

            // this.$router.push(`/insertdata/${qr_id}`);
            this.$router.push(`/insertdata/${qr_id}`);
            if (this.gataccountops == "") {
              // viewer error
              this.$router.push("/errorpage");
            }
          }else{
             this.getaccountOps();
          }

          if (this.template_name != "" && this.info != ''){
            this.getaccountOps();
          }
        })
        .catch((err) => {
          console.log("error Kub", err);
          const position = "top-center";
          const color = "danger";
          const duration = 6000;
          this.$vs.notification({
            position,
            color,
            duration,
            progress: "auto",
            title: "พบข้อผิดพลาด",
            text: err,
          });
        });
      // const loading = this.$vs.loading();
      // setTimeout(() => {
      //   loading.close();
      //   // this.getaccountOps();
      // }, 5000);
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
