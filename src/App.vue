<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <div class="container">
        <router-view />
    </div>
</template>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav {
    text-align: center;
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.container {
    width: 1200px;
    max-width: 100%;
    padding: 0 15px;
    margin: 0 auto;
}

.tips {
    border-left: 4px solid #1abc9c;
    background: #f1f1f1;
    padding: 10px;
}
</style>
