<template>
  <div class="h-screen container_bg2">
    <div class="h-full flex justify-center items-center">
      <!-- Login Fom -->
      <div class="box_login shadow border rounded-lg bg-white">
        <div class="flex justify-center py-8">
          <h1 class="heading-primary sm:w-1/2">Login</h1>
        </div>

        <!-- Validate -->
        <ValidationObserver ref="form">
          <!-- Input Username -->
          <ValidationProvider
            v-slot="{ errors }"
            rules="username"
            name="username"
          >
            <div class="flex justify-center">
              <vs-input label-placeholder="Username" v-model="user.username" />
            </div>
            <div
              v-if="errors && errors.length > 0"
              class="text-xs mt-2 text-red-500 flex justify-center"
            >
              <label>{{ errors[0] }}</label>
            </div>
          </ValidationProvider>
          <!-- Input Password -->
          <ValidationProvider
            v-slot="{ errors }"
            name="password"
            rules="password"
          >
            <div class="flex justify-center mt-5 mb-2">
              <vs-input
                type="password"
                v-model="user.password"
                label-placeholder="Password"
                :visiblePassword="hasVisiblePassword"
                icon-after
                @click-icon="hasVisiblePassword = !hasVisiblePassword"
                @keypress.enter="login()"
              >
                <template #icon>
                  <i v-if="!hasVisiblePassword" class="bx bx-show-alt"></i>
                  <i v-else class="bx bx-hide"></i>
                </template>
              </vs-input>
            </div>

            <div
              v-if="errors && errors.length > 0"
              class="flex text-xs justify-center text-red-500"
            >
              <label>{{ errors[0] }}</label>
            </div>
          </ValidationProvider>

          <div class="flex justify-center my-4">
            <div class="p-2">
              <vs-button gradient type="submit" @click="login()">
                Login
              </vs-button>
            </div>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import "material-icons/iconfont/material-icons.css";
export default {
  // middleware: "unAuth",
  // layout: "default",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      dataprofile: {
        userId: "",
        displayName: "",
        statusMessage: "",
        pictureUrl: "",
        email: "",
      },
      hasVisiblePassword: false,
      lineid: "",
    };
  },

  computed: {
    isAccess() {
      return this.$store.getters["login/gettersIsAccess"];
    },
    isAccessops() {
      return this.$store.getters["login/gettersIsAccessOps"];
    },
    getUid() {
      return this.$store.getters["account_operator/gettersUId"];
    },
  },
  watch: {
    isAccess(data) {
      if (data) {
        this.$router.go("/");
      }
    },
    isAccessops(data) {
      if (data) {
        this.$router.go("/");
      }
    },

    async getUid(data) {
      this.lineid = data;
    },
  },

  created() {
    liff.init(
      { liffId: "1656385614-lv5MKNZj" },
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

    this.lineid = this.getUid;
    if (this.getUid) {
      this.getreport();
    }
    ƒ;
  },

  methods: {
    async login() {
      // const sus = await this.$refs.form.validate();
      // if (!sus) {
      //   // alert("Username or password Incorrect");
      // }
      await this.$store
        .dispatch("login/loginOperator", {
          username: this.user.username,
          password: this.user.password,
          lineid: this.lineid,
        })
        .then(() => {
          alert("Login Success");
          liff.closeWindow();
        })
        .catch((err) => {
          alert(err.message);
        });
      // this.$router.push("/");
    },
  },
};
</script>

<style>
.container_bg2 {
  background: linear-gradient(rgb(45, 52, 153), white);
}
.heading-primary {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  background-image: linear-gradient(to right bottom, white, #9a9ada);
  -webkit-background-clip: text;
  color: rgb(45, 52, 153);
  text-transform: uppercase;
}
.box_login {
  width: 100%;
  height: 100%;
}
.in_user {
  /* width: 70%; */
}
.vs-input {
  border: 2px solid transparent;
  background: rgba(var(--vs-gray-2), 1);
  color: rgba(var(--vs-text), 1);
  padding: 7px 13px;
  border-radius: inherit;
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  padding-left: 10px;
  width: 100%;
}
</style>
