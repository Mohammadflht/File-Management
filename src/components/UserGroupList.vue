<template>
    <div id="group-page">
        <ButtonComponent :showDialog="showDialog" :buttonName="buttonName" @show-dialog="showDialog = $event" />
        <AddNewGroup :showDialog="showDialog" :adminColor="adminColor" :userGroups="groupData" :usersData="usersData"
            @add-group="addRow" @cancel-add-group="addRowCancle" />
        <GroupsList :adminColor="adminColor" :groupData="groupData" :usersData="usersData" :showHeader="showHeader"
            @edit-row="editRow" @save-row="saveRow" @remove-row="removeRow" />
    </div>
</template>

<script>
import ButtonComponent from '@/components/User Group/GroupButtonComponent.vue';
import AddNewGroup from '@/components/User Group/AddGroupComponent.vue';
import GroupsList from '@/components/User Group/GroupListComponent.vue';

export default {
    components: {
        ButtonComponent,
        AddNewGroup,
        GroupsList,
    },
    data() {
        return {
            showDialog: false,
        }
    },
    computed: {
        usersData() {
            return this.$store.state.usersData;
        },
        groupData() {
            return this.$store.state.groupData;
        },
        adminColor() {
            return this.$store.state.adminColor;
        },
    },
    methods: {
        editRow(index) {
            this.$store.commit('editGroup', index);
        },
        saveRow(index) {
            this.$store.commit('saveGroup', { index: index, username: this.$store.state.userUsername });
        },
        addRow(newUser) {
            this.$store.commit('addGroup', newUser);
            this.showDialog = false;
            let GroupList = document.querySelector(".user-table");
            GroupList.style.filter = "blur(0px)";
        },
        addRowCancle() {
            let usersList = document.querySelector(".user-table");
            usersList.style.filter = "blur(0px)";
            this.showDialog = false;
        },
        removeRow(index) {
            this.$store.commit('removeGroup', index);
        },
        showDialogs() {
            let usersList = document.querySelector(".user-table");
            this.showDialog = true;
            usersList.style.filter = "blur(6px)";
            usersList.style.transition = "all 0.5s";
        },
    },
    created() {
        if (localStorage.getItem('usersData')) {
            this.$store.commit('setUsersData', JSON.parse(localStorage.getItem('usersData')));
        }
    }

}
</script>

<style media="screen">
#group-page {
    display: block;
    width: 87%;
    background: #080710;
    margin: 0 auto;
    padding: 12px 17px;
    box-shadow: 2px 2px 3px -1px rgba(0, 0, 0, 0.35);
    position: absolute;
    right: 0;
    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;
}

::-webkit-scrollbar {
    visibility: hidden;
    width: 8px;
    height: 8px;
    background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 12px;
}

::-webkit-scrollbar-thumb:hover {
    background-color: #c3c3c3;
    border-radius: 12px;
}</style>