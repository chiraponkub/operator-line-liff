<template>
  <div class="w-full h-screen">
    <Nuxt />
  </div>
</template>

<script>
export default {
  created() {
    liff.init(
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
              console.log("profile", profile);
              console.log("userId", this.userId);
              this.getAccount();
            })
            .catch((err) => console.error(err));
        } else {
          liff.login();
        }
      },
      (err) => console.error(err.code, error.message)
    );
    console.log("LIFF", liff);
  },

  methods: {
    async getAccount() {
      await this.$store.dispatch("account_operator/getAccountOps", this.userId)
    },
  },
};
</script>
