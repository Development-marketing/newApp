<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
::-webkit-scrollbar {width: 10px;}
::-webkit-scrollbar-track {background-color: white;}
::-webkit-scrollbar-thumb {background-color: rgba(0, 0, 0, 0.2);
border-top-left-radius:20px;border-top-right-radius:20px;
border-bottom-left-radius:20px;border-bottom-right-radius:20px;
}
</style>
