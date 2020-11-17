<template>
    <div id="app">
        <img alt="Vue logo" :src="imgsrc">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    computed: {
        imgsrc () {
            return require('./assets/logo.png');
        }
    }
}
</script>

<style lang="css">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        background: url("./assets/logo.png") no-repeat left top;
        background-size: 100px 100px;
    }
</style>
