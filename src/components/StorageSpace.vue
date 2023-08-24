<template>
    <div id="user-management">\
        <navBar3></navBar3>
        <!-- <panelHeader></panelHeader> -->
    </div>
</template>

<script>
// import panelHeader from './panel-header.vue';
import navBar3 from './nav-bar3.vue';
export default {
    components: {
        // panelHeader,
        navBar3,
    },
    data() {
    return {
        username: 'mohammadflht'
    }
    }
}
</script>

<style media="screen">

#user-management {
    width: 100%;
    height: 100vh;
    background-color: #080710;
    display: flex;
    position: relative;
}
</style>