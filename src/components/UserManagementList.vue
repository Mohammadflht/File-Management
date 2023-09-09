<template>
    <div id="wrapper">
        <ButtonComponent :showDialog="showDialog"  @show-dialog="showDialog = $event" />
        <AddNewUser :showDialog="showDialog" :adminColor="$store.state.adminColor" :userGroups="$store.state.groupData" :usersData="usersData" @add-user="addRow" @cancel-add-user="addRowCancle" />
        <UsersList :adminColor="adminColor" :userGroups="userGroups" :usersData="usersData" :showHeader="showHeader" @edit-row="editRow" @save-row="saveRow" @remove-row="removeRow" />
    </div>
</template>

<script>
    import ButtonComponent from '@/components/User Management/ButtonComponent.vue';
    import AddNewUser from '@/components/User Management/AddUserComponent.vue';
    import UsersList from '@/components/User Management/UsersListComponent.vue';

export default {
    components: {
        ButtonComponent,
        AddNewUser,
        UsersList,
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
        adminColor() {
            return this.$store.state.adminColor;
        },
        userGroups() {
            return this.$store.state.groupData;
        },
    },
    watch: {
        'userGroups': function() {
        // Update select options when userGroups changes
            const select = document.getElementById('usergroup');
            const options = select.options;
            for (let i = options.length - 1; i >= 0; i--) {
                const option = options[i];
                if (!this.userGroups.includes(option.value)) {
                    select.removeChild(option);
                }
            }
            for (let i = 0; i < this.userGroups.length; i++) {
                const group = this.userGroups[i];
                if (!options.namedItem(group)) {
                    const option = document.createElement('option');
                    option.value = group;
                    option.text = group;
                    select.add(option);
                }
            }
        },
    },
    methods: {
        editRow(index) {
            this.$store.commit('editUser', index);
        },
        saveRow(index) {
            this.$store.commit('saveUser', {index: index, username: this.$store.state.userUsername});
        },
        addRow(newUser) {
        this.$store.commit('addUser', newUser);
        this.showDialog = false;
        let usersList = document.querySelector(".user-table");
        usersList.style.filter = "blur(0px)";
        },
        addRowCancle() {
        this.showDialog = false;
        let usersList = document.querySelector(".user-table");
        usersList.style.filter = "blur(0px)";
        },
        removeRow(index) {
        this.$store.commit('removeUser', index);
        },
        },
        created() {
        if(localStorage.getItem('usersData')) {
            this.$store.commit('setUsersData', JSON.parse(localStorage.getItem('usersData')));
        }
        }

}
</script>

<style media="screen">
#wrapper {
    display: block;
    width: 87%;
    background: #080710;
    margin: 0 auto;
    padding: 12px 17px;
    box-shadow: 2px 2px 3px -1px rgba(0,0,0,0.35);
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
}
</style>