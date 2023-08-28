<template>
    <div id="wrapper">

        <table id="keywords" cellspacing="0" cellpadding="0">
    <thead>
    <tr>
        <th>Username</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Type</th>
        <th>User group</th>
        <th>Add</th>
    </tr>
    </thead>
    <tbody class="user-records-table-body">
    <tr>
        <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.username"></td>
        <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.firstName"></td>
        <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.lastName"></td>
        <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.type"></td>
        <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.usergroup"></td>
        <td class="user-table-data">
            <font-awesome-icon @click="addRow()" class="user-records-add-icon user-records-icons" icon="fas fa-plus"/>
        </td>
        <!-- <td class="user-table-data"></td> -->
    </tr>

    </tbody>
</table>




    <table id="keywords" cellspacing="0" cellpadding="0">
    <thead>
    <tr>
        <th>Username</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Type</th>
        <th>User group</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody class="user-records-table-body users-list">
    <tr v-for="(row, index) in usersData" :key="index" class="user-table-row">

        <td class="user-table-data">{{row.username}}</td>

        <td v-if="!row.editing" class="user-table-data">{{ row.firstName }}</td>
        <td v-else><input type="text" v-model="row.firstName" class="user-table-data"></td>

        <td v-if="!row.editing" class="user-table-data">{{ row.lastName }}</td>
        <td v-else><input type="text" v-model="row.lastName" class="user-table-data"></td>

        <td v-if="!row.editing" class="user-table-data">{{ row.type }}</td>
        <td v-else><input type="text" v-model="row.type" class="user-table-data"></td>

        <td v-if="!row.editing" class="user-table-data">{{ row.usergroup }}</td>
        <td v-else><input type="text" v-model="row.usergroup" class="user-table-data"></td>

        <td class="user-table-data">
            <font-awesome-icon class="user-records-edit-icon user-records-icons" icon="fas fa-edit" @click="editRow(index)" v-if="!row.editing" title="Edit"/>
            <font-awesome-icon class="user-records-save-icon user-records-icons" icon="fas fa-save" @click="saveRow(index)" v-else title="Save"/>
            <font-awesome-icon class="user-records-remove-icon user-records-icons" icon="fas fa-trash" @click="removeRow(index)" title="Delete"/>
        </td>
        <!-- <td class="user-table-data"></td> -->
    </tr>

    </tbody>
</table>
</div> 

</template>

<script>

export default {
    components: {
        // panelHeader,
    },
    data() {
    return {
        username: 'mohammadflht',
        newRecord: { username: '', firstName: '', lastName: '', type: '', usergroup: ''},
    }
    },
    computed: {
        // ...mapState(['usersData'])
        usersData() {
            return this.$store.state.usersData;
        }
    },
    methods: {
        // ...mapMutations(['editRow', 'saveRow', 'addRow'])
        editRow(index) {
            this.$store.commit('editUser', index);
        },
        saveRow(index) {
            this.$store.commit('saveUser', index);
        },
        addRow() {
        if (this.newRecord.username && this.newRecord.username.length >= 5 && (this.newRecord.firstName || this.newRecord.lastName || this.newRecord.type || this.newRecord.usergroup || true)) {
            const newUser = { ...this.newRecord, editing: false };
            this.$store.commit('addUser', newUser);
            this.newRecord.username = '';
            this.newRecord.firstName = '';
            this.newRecord.lastName = '';
            this.newRecord.type = '';
            this.newRecord.usergroup = '';
        }
    },
    removeRow(index) {
            this.$store.commit('removeUser', index);
    }
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
    padding: 10px 17px;
    box-shadow: 2px 2px 3px -1px rgba(0,0,0,0.35);
    position: absolute;
    right: 0;
}
.create-user-input {
    width: 160px;
    height: 50px;
    text-align: center;
    padding: 15px 10px;
    border: 1px solid #d2cca12c;
}
.user-records-add-icon {
    color: #d2cca1e8;
    font-size: 16px;
}
#keywords {
    margin: 0 auto;
    font-size: 1.2em;
    margin-top: 45px;
}
#keywords thead {
    background: #d2cca1e8;
}
#keywords thead tr th {
    padding: 12px 30px;
    padding-left: 42px;
    text-align: center;
}
.user-records-table-body input {
    margin: 0;
    background-color: #1d1d1faa;
    color: #d2cca1b2;
    outline: none;
}
.users-list input {
    background-color: #080710;
    border: 1px solid #d2cca180;
}
.user-table-row{
    color: #d2cca1b2;
    width: 100%;
}
.user-table-data{
    width: 160px;
    height: 50px;
    text-align: center;
    padding: 15px 10px;
    border: 1px solid #d2cca12c;
}
.user-records-remove-icon {
    /* color: #ed2929; */
    margin-left: 8px;
}
.user-records-icons {
    cursor: pointer;
}
th, td {
    font-size: 16px;
}
</style>