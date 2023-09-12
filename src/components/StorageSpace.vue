<template>
    <div id="user-management">
        <navBar3></navBar3>
        <StorageList></StorageList>
    </div>
</template>

<script>
import navBar3 from './nav-bar3.vue';
import StorageList from './StorageSpaceList.vue';
export default {
    components: {
        navBar3,
        StorageList,
    },
    data() {
    return {

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