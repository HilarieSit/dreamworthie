<template>
  <div id="login">
    <form>
     <h1> Sign in </h1>
      <label>
        Email or username
        <input type="text" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button id="login-btn" type="submit">Log in</button>
    </form>
  </div>
</template>

<script>
export default {

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