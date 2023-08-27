<template>
    <div id="wrapper">
        <div class="adding-row">
        <input placeholder="Username" type="text" v-model.trim="newRecord.username">
        <input placeholder="Firstname" type="text" v-model.trim="newRecord.firstName">
        <input placeholder="Lastname" type="text" v-model.trim="newRecord.lastName">
        <input placeholder="Type" type="text" v-model.trim="newRecord.type">
        <input placeholder="Usergroup" type="text" v-model.trim="newRecord.usergroup">
        <button @click="addRow()"><font-awesome-icon class="user-records-edit-icon user-records-icons" icon="fas fa-plus"/></button>
    </div>
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
    <tbody class="user-records-table-body">
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
// import panelHeader from './panel-header.vue';
// import {mapState, mapMutations} from "vuex";
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
        if (this.newRecord.username && this.newRecord.firstName && this.newRecord.lastName && this.newRecord.type && this.newRecord.usergroup) {
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

/* Adding rows */
.adding-row {
    width: 70%;
    height: auto;
    background-color: transparent;
    margin: 20px auto;
}
.adding-row input {
    width: 14.28%;
    display: inline-block;
    margin: 0 12px;
    border: 1px solid #d2cca159;
    outline: none;
    background-color: #080710;
    color: #d2cca1;
}
.adding-row input::placeholder {
    color: #d2cca17d;
}
.adding-row input:focus {
    background-color: #101007;
}
.adding-row button {
    width: 25px;
    height: 25px;
    color: #d2cca1;
    background-color: #080710;
    border: 2px solid #d2cca1;
    border-radius: 50%;
    font-size: 14px;
    margin-left: 12px;
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
#keywords thead tr th.headerSortUp, #keywords thead tr th.headerSortDown {
    background: #acc8dd;
}

#keywords thead tr th.headerSortUp span {
    background-image: url('https://i.imgur.com/SP99ZPJ.png');
}
#keywords thead tr th.headerSortDown span {
    background-image: url('https://i.imgur.com/RkA9MBo.png');
}
.user-records-table-body input {
    margin: 0;
    background-color: #1d1d1f;
    color: #d2cca1b2;
    outline: none;
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