<template>
    <div id="user-management">\
        <navBar2></navBar2>
        <!-- <panelHeader></panelHeader> -->
    </div>
</template>

<script>
// import panelHeader from './panel-header.vue';
import navBar2 from './nav-bar2.vue';
export default {
    components: {
        // panelHeader,
        navBar2,
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