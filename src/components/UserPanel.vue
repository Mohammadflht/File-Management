<template>
    <div id="admin-panel">\
        <userNavBar></userNavBar>
        <!-- <panelHeader></panelHeader> -->
    </div>
</template>

<script>
// import panelHeader from './panel-header.vue';
import userNavBar from './user-nav-bar.vue';
export default {
    components: {
        // panelHeader,
        userNavBar,
    },
    data() {
    return {
        username: 'mohammadflht'
    }
    }
}
</script>

<style media="screen">

#admin-panel {
    width: 100%;
    height: 100vh;
    background-color: #080710;
    display: flex;
    position: relative;
}
</style>