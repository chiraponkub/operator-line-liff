<template>
  <div class="h-screen flex overflow-hidden">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->

    <div
      v-if="isOpen != isClose"
      class="fixed inset-0 flex z-40 md:hidden open_close"
      role="dialog"
      aria-modal="true"
    >
      <transition
        enter-active-class="transition-opacity ease-linear duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity ease-linear duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        ><div
          class="fixed inset-0 bg-gray-600 bg-opacity-75"
          aria-hidden="true"
        ></div>
      </transition>

      <transition
        enter-active-class="transition ease-in-out duration-300 transform"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition ease-in-out duration-300 transform"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          class="
            relative
            flex-1 flex flex-col
            max-w-xs
            w-full
            pt-5
            pb-4
            bg-indigo-700
          "
        >
          <transition
            enter-active-class="ease-in-out duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="ease-in-out duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                @click="isClose = !isClose"
                type="button"
                class="
                  ml-1
                  flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-full
                  focus:outline-none
                  focus:ring-2 focus:ring-inset focus:ring-white
                "
              >
                <span class="sr-only">Close sidebar</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </transition>

          <div class="flex items-center flex-shrink-0 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 flex-shrink-0 text-blue-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <p class="h-8 w-auto text-white font-medium text-2xl px-3">MENU</p>
          </div>

          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="px-2 space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->
              <div @click="isShow = !isShow">
                <a
                  href="#"
                  class="
                    text-indigo-100
                    hover:bg-indigo-200
                    group
                    flex
                    items-center
                    px-2
                    py-2
                    text-sm
                    font-medium
                    rounded-md
                  "
                >
                  <!-- Heroicon name: outline/person -->
                  <svg
                    class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Manage Customer
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-chevron-down ml-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>

                <transition name="slide">
                  <ul class="child" v-if="isShow">
                    <li>
                      <NuxtLink to="/account_operator">
                        <a
                          href="#"
                          class="
                            text-indigo-100
                            hover:bg-indigo-200
                            group
                            flex
                            items-center
                            px-2
                            py-2
                            text-sm
                            font-medium
                            rounded-md
                          "
                          @click="openLoading"
                        >
                          <!-- Heroicon name: outline/users -->
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>
                          Operator List
                        </a>
                      </NuxtLink>
                    </li>
                  </ul>
                </transition>
              </div>

              <NuxtLink to="/generate_qrcode">
                <a
                  href="#"
                  class="
                    text-indigo-100
                    hover:bg-indigo-200
                    group
                    flex
                    items-center
                    px-2
                    py-2
                    text-sm
                    font-medium
                    rounded-md
                  "
                >
                  <!-- Heroicon name: outline/chart-bar -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                  QR Code
                </a>
              </NuxtLink>
            </nav>
          </div>
        </div>
      </transition>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden bg-indigo-700 md:flex md:flex-shrink-0">
      <div class="flex flex-col w-56">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 flex-shrink-0 text-blue-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <p class="h-8 w-auto text-white font-medium text-2xl px-3">MENU</p>
          </div>
          <div class="mt-5 flex-1 flex flex-col">
            <nav class="flex-1 px-2 space-y-1">
              <!-- Current: "bg-indigo-800 text-white", Default: "text-indigo-100 hover:bg-indigo-600" -->

              <!-- Menu Sidebar -->
              <div @click="isShow = !isShow">
                <a
                  href="#"
                  class="
                    text-indigo-100
                    hover:bg-indigo-200
                    group
                    flex
                    items-center
                    px-2
                    py-2
                    text-sm
                    font-extrabold
                    rounded-md
                  "
                >
                  <!-- Heroicon name: outline/person -->
                  <svg
                    class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  Customer
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    class="bi bi-chevron-down ml-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </a>

                <transition name="slide">
                  <ul class="child" v-if="isShow">
                    <li>
                      <NuxtLink to="/account_operator">
                        <a
                          href="#"
                          class="
                            text-indigo-100
                            hover:bg-indigo-200
                            group
                            flex
                            items-center
                            px-2
                            py-2
                            text-sm
                            font-medium
                            rounded-md
                          "
                          @click="openLoading"
                        >
                          <!-- Heroicon name: outline/users -->
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                            />
                          </svg>
                          Operator List
                        </a>
                      </NuxtLink>
                    </li>
                  </ul>
                </transition>
              </div>

              <NuxtLink to="/generate_qrcode">
                <a
                  href="#"
                  class="
                    text-indigo-100
                    hover:bg-indigo-200
                    group
                    flex
                    items-center
                    px-2
                    py-2
                    text-sm
                    font-medium
                    rounded-md
                  "
                  @click="openLoading"
                >
                  <!-- Heroicon name: outline/chart-bar -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                  QR Code
                </a>
              </NuxtLink>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="
            px-4
            border-r border-gray-200
            text-gray-500
            focus:outline-none
            focus:ring-2 focus:ring-inset focus:ring-indigo-500
            md:hidden
          "
        >
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: outline/menu-alt-2 -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>

        <div class="flex-1 px-4 flex justify-between border">
          <!-- Search -->
          <div class="flex-1 flex">
            <!-- <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="
                    absolute
                    inset-y-0
                    left-0
                    flex
                    items-center
                    pointer-events-none
                  "
                >
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search-field"
                  class="
                    block
                    w-full
                    h-full
                    pl-8
                    pr-3
                    py-2
                    border-transparent
                    text-gray-900
                    placeholder-gray-500
                    focus:outline-none
                    focus:placeholder-gray-400
                    focus:ring-0
                    focus:border-transparent
                    sm:text-sm
                  "
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form> -->
          </div>

          <div class="ml-4 flex items-center md:ml-6">
            <!-- Profile dropdown -->
            <div
              v-on-clickaway="closeDropdown"
              class="ml-3 relative flex-shrink-0"
            >
              <div>
                <button
                  class="
                    max-w-xs
                    bg-white
                    flex
                    items-center
                    text-sm
                    rounded-full
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  "
                  @click="isProfileDropdownOpen = !isProfileDropdownOpen"
                >
                  <span class="sr-only">Open user menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </button>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div
                  v-show="isProfileDropdownOpen"
                  class="
                    z-30
                    origin-top-right
                    absolute
                    right-0
                    mt-2
                    w-48
                    rounded-md
                    shadow-lg
                    py-1
                    bg-white
                    ring-1 ring-black ring-opacity-5
                    divide-y divide-gray-100
                  "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <div class="py-2">
                    <p class="text-xs px-4 text-gray-400">Login by</p>
                    <p class="text-sm px-4 font-medium">
                      {{ operatorlist.firstname }}
                    </p>
                  </div>
                  <!-- Change Password -->
                  <NuxtLink to="/change_password">
                    <div>
                      <button
                        class="text-xs px-4 text-gray-400"
                        @click="changePassword()"
                      >
                        Change Password
                      </button>
                    </div>
                  </NuxtLink>

                  <div
                    class="
                      block
                      px-4
                      py-2
                      text-sm text-red-600
                      hover:bg-gray-100
                      cursor-pointer
                    "
                    @click="logout()"
                  >
                    ออกจากระบบ
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  // middleware: "isAuth",
  data() {
    return {
      isProfileDropdownOpen: false,
      userFullname: "Admin",
      isShow: false,
      isClose: false,
      isOpen: false,
    };
  },

  computed: {
    operatorlist() {
      return this.$store.getters["account_operator/gettersOperator"];
    },
    isAccess() {
      return this.$store.getters["login/gettersIsAccess"];
    },
  },
  watch: {
    isAccess(data) {
      if (!data) {
        this.$router.go("/login");
      }
    },
  },
  async created() {
    // await this.getAccountOwner();
    await this.getAccountOperator();
  },

  methods: {
    // async getAccountOwner() {
    //   await this.$store.dispatch("account_owner/getAccount");
    // },
    async getAccountOperator() {
      await this.$store.dispatch("account_operator/getAccountOperator");
    },

    closeDropdown() {
      this.isProfileDropdownOpen = false;
    },
    logout() {
      localStorage.clear();
      this.$router.go("/login");
    },
    changePassword() {
      this.isProfileDropdownOpen = false;
    },
    openLoading() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
    },
  },
};
</script>

<style>
ul {
  cursor: pointer;
}

.slide-enter-active {
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  -o-transition-duration: 0.4s;
  transition-duration: 0.4s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>