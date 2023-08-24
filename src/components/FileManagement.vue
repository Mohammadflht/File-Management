<template>
    <div id="user-management">\
        <navBar4></navBar4>
        <!-- <panelHeader></panelHeader> -->
    </div>
</template>

<script>
// import panelHeader from './panel-header.vue';
import navBar4 from './nav-bar4.vue';
export default {
    components: {
        // panelHeader,
        navBar4,
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