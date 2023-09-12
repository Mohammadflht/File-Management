<template>
    <div id="file-management">
        <navBar4></navBar4>
        <FilesList></FilesList>
    </div>
</template>

<script>
import navBar4 from './nav-bar4.vue';
import FilesList from './File ManagementList.vue';

export default {
    components: {
        navBar4,
        FilesList,
    },
    data() {
    return {

    }
    }
}
</script>

<style media="screen">

#file-management {
    width: 100%;
    height: 100vh;
    background-color: #080710;
    display: flex;
    position: relative;
}
</style>