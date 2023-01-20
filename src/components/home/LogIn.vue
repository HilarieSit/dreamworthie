<template>
  <div id="login">
    <section class="forms">
        <form class="login" @submit.prevent="login">
            <h2>Login</h2>
            <input 
                type="email" 
                placeholder="Email address" 
                v-model="login_form.email"/>
            <input 
                type="password" 
                placeholder="Password" 
                v-model="login_form.password"/>
            <input 
                type="submit" 
                value="Login"/>
        </form>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup () {
        const login_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);
        }

        return {
            login_form,
            login
        }
    }

}
</script>

<style scoped>
h1{
    color: white;
}
.light-mode form{
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0 14px 40px;
    color: black;
}
form{
    width: 280px;
    padding: 40px;
    margin: 60px auto 0;
    border-radius: 20px;
    background-color: #000;
    box-shadow: 0 14px 40px #000;
    color: white;
}
button,
  input {
    display: block;
    margin: 10px 0;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }

  #alert {
    color: red;
    margin-bottom: 10px;
  }

#login-btn{
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    background-color: rgb(210, 223, 231);
    margin: 10px auto 0;
}
</style>