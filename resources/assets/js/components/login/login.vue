<style>
  body {
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #eee;
  }

  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 10px;
  }
  .form-signin .checkbox {
    font-weight: normal;
  }
  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>

<template>
  <div class="container">
    <form class="form-signin" autocomplete="off" v-on:submit.prevent="onSubmit">
      <h2 class="form-signin-heading">Acceso</h2>
      <label class="sr-only">Correo Electrónico</label>
      <input type="email" class="form-control" v-model="email">
      <label class="sr-only">Contraseña</label>
      <input type="password" class="form-control" v-model="password">
      <button class="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        email: 'levieraf@gmail.com',
        password: '123456'
      }
    },
    methods: {
      onSubmit: function() {
        var params = {
          email: this.email,
          password: this.password
        };

        this.$http.post('/api/login', params).then((response) =>{
          this.$route.router.go({ name: 'main' });
        });
      }
    }
  };
</script>