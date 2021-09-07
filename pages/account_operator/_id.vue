<template>
  <div class="p-4 bg-white">
    <div class="w-full flex justify-between p-2">
      <div>
        <h4>Operator</h4>
      </div>
      <vs-button @click="regisOperator()"> Create </vs-button>
    </div>
    <div>
      <vs-table>
        <template #thead>
          <vs-tr>
            <vs-th> Created At</vs-th>
            <vs-th> Updated At</vs-th>
            <vs-th> Number </vs-th>
            <vs-th> User Name </vs-th>
            <vs-th> First Name </vs-th>
            <vs-th> Last Name </vs-th>
            <vs-th> PhoneNumber </vs-th>
            <vs-th> Line ID </vs-th>
            <vs-th> Action </vs-th>
          </vs-tr>
        </template>

        <template #tbody>
          <vs-tr
            v-for="(user, index) in $vs.getPage(userslist, page, max)"
            :key="index"
          >
            <vs-td>
              {{
                user.create_at != ""
                  ? $moment(user.created_at).format("DD/MM/YYYY HH:mm:ss")
                  : "-"
              }}
            </vs-td>
            <vs-td>
              {{
                user.create_at != ""
                  ? $moment(user.updated_at).format("DD/MM/YYYY HH:mm:ss")
                  : "-"
              }}
            </vs-td>
            <vs-td>
              {{ user.operator_id }}
            </vs-td>
            <vs-td>
              {{ user.operator_user_name }}
            </vs-td>
            <vs-td>
              {{ user.operator_first_name }}
            </vs-td>
            <vs-td>
              {{ user.operator_last_name }}
            </vs-td>
            <vs-td>
              {{ user.operator_phone_number }}
            </vs-td>
            <vs-td>
              {{ user.operator_line_id }}
            </vs-td>
            <vs-td>
              <div class="flex">
                <vs-button @click="toggleModal(user)"> Edit </vs-button>
                <vs-button danger @click="deleteAccount(user.operator_id)">
                  Delete
                </vs-button>
              </div>
            </vs-td>
          </vs-tr>
        </template>

        <template #footer>
          <vs-pagination
            v-model="page"
            :length="$vs.getLength(userslist, max)"
          />
        </template>
      </vs-table>

      <!-- Popup -->
      <div>
        <div
          v-if="showModal"
          class="
            overflow-x-hidden overflow-y-auto
            fixed
            inset-0
            z-50
            outline-none
            focus:outline-none
            justify-center
            items-center
            flex
            w-full
          "
        >
          <div class="relative w-2/6 my-6 mx-auto max-w-6xl">
            <!--content-->
            <div
              class="
                relative
                flex flex-col
                rounded-md
                w-full
                bg-white
                outline-none
                focus:outline-none
              "
            >
              <!--header-->
              <div
                class="
                  flex
                  items-start
                  justify-between
                  p-5
                  border-b border-solid border-blueGray-200
                  rounded-t
                "
              >
                <h3 class="text-3xl font-semibold">Update Account</h3>
                <button
                  class="
                    p-1
                    ml-auto
                    bg-transparent
                    border-0
                    text-black
                    opacity-5
                    float-right
                    text-3xl
                    leading-none
                    font-semibold
                    outline-none
                    focus:outline-none
                  "
                  @click="updateAccount()"
                >
                  <span
                    class="
                      bg-transparent
                      text-black
                      opacity-5
                      h-6
                      w-6
                      text-2xl
                      block
                      outline-none
                      focus:outline-none
                    "
                  >
                    ×
                  </span>
                </button>
              </div>
              <!--body-->
              <ValidationProvider
                v-slot="{ errors }"
                rules="regex-username"
                name="Firstname"
              >
                <div class="relative p-6 flex-auto">
                  <vs-input
                    label-placeholder="Firstname"
                    type="text"
                    v-model="update.firstname"
                  />
                </div>
                <div
                  v-if="errors && errors.length > 0"
                  class="flex justify-center text-red-400"
                >
                  <li>{{ errors[0] }}</li>
                </div>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                rules="regex-username"
                name="Lastname"
              >
                <div class="relative p-6 flex-auto">
                  <vs-input
                    label-placeholder="Lastname"
                    type="text"
                    v-model="update.lastname"
                  />
                </div>
                <div
                  v-if="errors && errors.length > 0"
                  class="flex justify-center text-red-400"
                >
                  <li>{{ errors[0] }}</li>
                </div>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                rules="tel"
                name="phonenumber"
              >
                <div class="relative p-6 flex-auto">
                  <vs-input
                    label-placeholder="PhoneNumber"
                    type="text"
                    v-model="update.phonenumber"
                  />
                </div>
                <div
                  v-if="errors && errors.length > 0"
                  class="flex justify-center text-red-400 px-3 mb-2"
                >
                  <li>{{ errors[0] }}</li>
                </div>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                rules="required"
                name="LineID"
              >
                <div class="relative p-6 flex-auto">
                  <vs-input
                    label-placeholder="Line ID"
                    type="text"
                    v-model="update.lineid"
                  />
                </div>
                <div
                  v-if="errors && errors.length > 0"
                  class="flex justify-center text-red-400 mb-4"
                >
                  <li>{{ errors[0] }}</li>
                </div>
              </ValidationProvider>

              <!--footer-->
              <div
                class="
                  flex
                  items-center
                  justify-end
                  p-6
                  border-t border-solid border-blueGray-200
                  rounded-b
                "
              >
                <vs-button danger type="button" @click="showModal = !showModal">
                  Close
                </vs-button>
                <vs-button @click="updateAccount(update)">
                  Save Changes
                </vs-button>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="showModal"
          class="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
      </div>

      <!-- Popup View-->
      <div>
        <div
          v-if="showModalview"
          class="
            overflow-x-hidden overflow-y-auto
            fixed
            inset-0
            z-50
            outline-none
            focus:outline-none
            justify-center
            items-center
            flex
            w-full
          "
        >
          <div class="relative w-2/6 my-6 mx-auto max-w-6xl">
            <!--content-->
            <div
              class="
                relative
                flex flex-col
                rounded-md
                w-full
                bg-white
                outline-none
                focus:outline-none
              "
            >
              <!--header-->
              <div
                class="
                  flex
                  items-start
                  justify-between
                  p-5
                  border-b border-solid border-blueGray-200
                  rounded-t
                "
              >
                <h2 class="text-3xl font-semibold">
                  {{ insertdata.template_name }}
                </h2>
                <button
                  class="
                    p-1
                    ml-auto
                    bg-transparent
                    border-0
                    text-black
                    opacity-5
                    float-right
                    text-3xl
                    leading-none
                    font-semibold
                    outline-none
                    focus:outline-none
                  "
                  @click="viewdataqrcode()"
                >
                  <span
                    class="
                      bg-transparent
                      text-black
                      opacity-5
                      h-6
                      w-6
                      text-2xl
                      block
                      outline-none
                      focus:outline-none
                    "
                  >
                    ×
                  </span>
                </button>
              </div>
              <!--body-->
              <div
                v-if="insertdata.template_name === 'computer'"
                class="row g-3 p-4"
              >
                <div class="col">
                  <label for="inputEmail4" class="form-label">Case :</label>
                  <label class="form-control" for="floatingInputValue">{{
                    dataQrById2.case
                  }}</label>

                  <label for="inputEmail4" class="form-label mt-2"
                    >Power Supply :</label
                  >
                  <label class="form-control" for="floatingInputValue">{{
                    dataQrById2.power_supply
                  }}</label>

                  <label for="inputEmail4" class="form-label mt-2"
                    >Main Boar :</label
                  >
                  <label class="form-control" for="floatingInputValue">{{
                    dataQrById2.main_boar
                  }}</label>
                </div>
                <div class="col">
                  <label for="inputEmail4" class="form-label">CPU :</label>
                  <label class="form-control" for="floatingInputValue">{{
                    dataQrById2.cpu
                  }}</label>
                  <label for="inputEmail4" class="form-label mt-2">RAM :</label>
                  <label class="form-control" for="floatingInputValue">{{
                    dataQrById2.ram
                  }}</label>
                  <label for="inputEmail4" class="form-label mt-2"
                    >Graphic Card:</label
                  >
                  <label class="form-control" for="floatingInputValue">{{
                    dataQrById2.graphic_card
                  }}</label>
                </div>
              </div>

              <!--footer-->
              <div
                class="
                  flex
                  items-center
                  justify-end
                  p-6
                  border-t border-solid border-blueGray-200
                  rounded-b
                "
              >
                <vs-button
                  danger
                  border
                  type="button"
                  @click="showModalview = !showModalview"
                >
                  Close
                </vs-button>
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="showModalview"
          class="opacity-25 fixed inset-0 z-40 bg-black"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",
  data: () => ({
    page: 1,
    max: 7,
    showModal: false,
    showModalview: false,

    update: {
      id: "",
      firstname: "",
      lastname: "",
      phonenumber: "",
      lineid: "",
    },
    insertdata: {},

    userid: null,
    getdatabyid: null,

    getqrcodelists: [],
  }),

  computed: {
    userslist() {
      return this.$store.getters["account_operator/gettersOperator"];
    },
    // showgetallqrcode() {
    //   return this.$store.getters["generate_qr/gettersGetAllQrCode"];
    // },
    showgetallqrcode() {
      return this.$store.getters["generate_qr/gettersGetAllQrCode"];
    },
    sunownerlist() {
      return this.$store.getters["account_operator/gettersSubOwner"];
    },
    // userById() {
    //   return this.$store.getters["account_owner/gettersUserById"];
    // },
  },
  watch: {
    userById(data) {
      console.log("DATABYID_Operator", data);
    },
    showgetallqrcode(data) {
      this.getqrcodelist = JSON.parse(JSON.stringify(data));
    },
  },

  async created() {
    await this.getAccountOperator();
    await this.getqrcodelist();
  },

  methods: {
    async getAccountOperator() {
      await this.$store.dispatch("account_operator/getAccountOperator");
    },

    async getqrcodelist() {
      await this.$store.dispatch("generate_qr/getAllQRCodefromApi");
    },

    // async getSubOwner() {
    //   await this.$store.dispatch(
    //     `account_operator/getSubOwner`,
    //     this.$route.params.id
    //   );
    // },

    async regisOperator() {
      // await this.$router.push(`/register_operator/${this.$route.params.id}`);
      await this.$router.push(`/register_operator`);
    },

    async toggleModal(user_update) {
      this.userid = user_update.operator_id;

      await this.$store
        .dispatch(
          "account_owner/toggleModalOperatorAccountFormApi",
          user_update
        )
        .then(() => {
          const databyid = JSON.parse(
            JSON.stringify(this.$store.getters["account_owner/gettersUserById"])
          );
          this.update = {
            id: databyid.id,
            firstname: databyid.firstname,
            lastname: databyid.lastname,
            phonenumber: databyid.phonenumber,
            lineid: databyid.lineid,
          };
          this.showModal = !this.showModal;
        });
    },

    async updateAccount(updateinput) {
      this.showModal = !this.showModal;

      const conFirm = confirm("Are you sure to update?");
      if (conFirm === true) {
        await this.$store
          .dispatch("account_operator/updateAccountFormApi", {
            data: updateinput,
            usersid: this.userid,
          })
          .then((res) => {
            this.userid = null;
            this.update = {
              firstname: null,
              lastname: null,
              phonenumber: null,
              lineid: null,
            };
            this.getAccountOperator();
            // this.getSubOwner();
          });
      }
      alert("Update Successfully");
    },

    async deleteAccount(userid) {
      const conFirm = confirm("Are you sure to delete?");
      if (conFirm === true) {
        await this.$store
          .dispatch("account_operator/deleteAccountFormApi", userid)
          .then((res) => {
            this.getAccountOperator();
            // this.getSubOwner();
          });
        alert("Delete Successfully");
      }
    },

    allqrcode(user_operator) {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 1000);
      this.$router.push(`/allqrcode/${user_operator.operator_id}`);
    },

    async viewdataqrcode(dateqr) {
      console.log("getqrcodelist", dateqr);
      await this.$store.dispatch("generate_qr/getDateQrById", dateqr);
      this.showModalview = !this.showModalview;
    },
  },
};
</script>

<style >
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
        