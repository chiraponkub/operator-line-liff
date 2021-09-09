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
  // layout: "admin",
  // middleware: "isAuth",
  data: () => ({}),

  methods: {
    equipmentpage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push("/ops/equipment");
    },

    repairpage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push("/ops/repair");
    },

    updatepage() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push("/ops/update");
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
