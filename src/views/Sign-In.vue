<!-- 
	This is the sign in page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
  <div class="sign-in">

    <a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle">

      <!-- Sign In Form Column -->
      <a-col :span="24" :md="12" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}" class="col-form">
        <h1 class="mb-15">Sign In</h1>
        <h5 class="font-regular text-muted">Enter your email and password to sign in</h5>

        <!-- Sign In Form -->
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"

        >
          <a-form-item class="mb-10" label="Email" :colon="false">
            <a-input
                v-decorator="[
						'email',
						{ rules: [{ required: true, message: 'Please input your email!' }] },
						]" placeholder="Email"/>
          </a-form-item>
          <a-form-item class="mb-5" label="Password" :colon="false">
            <a-input
                v-decorator="[
						'password',
						{ rules: [{ required: true, message: 'Please input your password!' }] },
						]" type="password" placeholder="Password"/>
          </a-form-item>

          <a-form-item>
            <a-button  :loading="loading"  type="primary" block html-type="submit" class="login-form-button">
              {{ loading ? 'Loading' : 'SIGN IN' }}
            </a-button>
          </a-form-item>
        </a-form>
        <!-- / Sign In Form -->


      </a-col>
      <!-- / Sign In Form Column -->

      <!-- Sign In Image Column -->
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
        <img src="images/logo.png" alt="">
      </a-col>
      <!-- Sign In Image Column -->

    </a-row>

  </div>
</template>

<script>
import Swal from "sweetalert2";
export default ({

  data() {
    return {

      rememberMe: true,
      loading:false,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'normal_login'});
  },
created() {
},
  methods: {


    handleSubmit(e) {
      e.preventDefault();

      this.form.validateFields(async (err, values) => {
        this.loading=true;
        await this.$store.dispatch("login", values);
        values.password=''
        const error = this.$store.getters.getError;
        console.log(error)
        if (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
          this.loading=false;
        }
        else {
          this.loading=false;
          this.$router.push('/')
        }
      });

    },
  },
})

</script>

<style lang="scss">
body {
  background-color: #ffffff;
}
</style>