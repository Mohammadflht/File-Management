<template>
    <div id="user-management">
        <navBar1></navBar1>
        <userLists></userLists>

        <!-- <panelHeader></panelHeader> -->
    </div>
</template>

<script>
// import panelHeader from './panel-header.vue';
import navBar1 from './nav-bar1.vue';
import userLists from './UserManagementList.vue';
export default {
    components: {
        // panelHeader,
        navBar1,
        userLists,
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