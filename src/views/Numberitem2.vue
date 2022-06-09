<template>
  <div id="hello-vue" class="demo">
    {{ message }}
  </div>
</template>
<script>
export default {
   data() {
    return {
      message: 1
    }
  },
 created(){
    setInterval(() => { this.message ++ }, 6000)
    }
  }

</script>