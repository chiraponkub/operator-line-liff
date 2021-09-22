<template>
  <div class="w-full h-screen">
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId : null,
      displayName : null,
      statusMessage : null,
      pictureUrl : null,
      email : null,
    }
  },
  beforeCreate() {
    liff.init(
      { liffId: "1656385614-yJlJEKNL" },
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
              this.$store.dispatch("account_operator/getAccountlineId", profile.userId)
            })
            .catch((err) => console.error(err));
        }else{
          liff.login();
        }
      },
      (err) => console.error(err.code, error.message)
    );
    console.log("LIFF", liff);
    console.log("beforeCreate Test",this.userId);
  },
};
</script>
