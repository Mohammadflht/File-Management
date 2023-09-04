<template>
    <div id="wrapper">

        <button class="add-user-btn" @click="showDialogs()">Add User</button>

        <label>
            <input type="checkbox" class="alertCheckbox" autocomplete="off" />
            <div class="alert add-user-error">
                <span class="alertText"><br class="clear"/></span>
            </div>
        </label>

            <table v-if="showDialog" id="keywords" cellspacing="0" cellpadding="0">
    <thead>
    <tr :class="adminColor">
        <th>Username</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Type</th>
        <th>User group</th>
        <th>Add</th>
    </tr>
    </thead>
    <tbody class="user-records-table-body">
    <tr :class="adminColor">
        <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.username"></td>
        <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.firstName"></td>
        <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.lastName"></td>
        <td class="user-type-select">
            <!-- <input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.type"> -->
                <label class="user-type-lable" for="admin">admin</label>
                <input type="radio" name="usertype" id="user-type-input" v-model.trim="newRecord.type" value="admin">
                <label class="user-type-lable" for="user">user</label>
                <input type="radio" name="usertype" id="user-type-input" v-model.trim="newRecord.type" value="user">

        </td>
        <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.usergroup"></td>
        <td class="user-table-data">
            <font-awesome-icon @click="addRow()" class="user-records-add-icon user-records-icons" icon="fas fa-plus" title="Add"/>
            <font-awesome-icon @click="addRowCancle()" class="user-records-cancle-add-icon user-records-icons" icon="fas fa-remove" title="Cancle"/>
        </td>
        <!-- <td class="user-table-data"></td> -->
    </tr>

    </tbody>
    </table>

    <section class="audition-info">

    </section>


    <table id="keywords" class="user-table" cellspacing="0" cellpadding="0">
    <thead v-if="showHeader">
    <tr :class="adminColor">
        <th>Username</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Type</th>
        <th>User group</th>
        <th>Creator</th>
        <th>Creation time</th>
        <th>Last Modifier</th>
        <th>Last Modification time</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody class="user-records-table-body users-list">
    <tr v-for="(row, index) in usersData" :key="index" class="user-table-row" :class="adminColor">

        <td class="user-table-data">{{row.username}}</td>

        <td v-if="!row.editing" class="user-table-data">{{ row.firstName }}</td>
        <td v-else><input type="text" v-model="row.firstName" class="user-table-data"></td>

        <td v-if="!row.editing" class="user-table-data">{{ row.lastName }}</td>
        <td v-else><input type="text" v-model="row.lastName" class="user-table-data"></td>

        <td v-if="!row.editing" class="user-table-data">{{ row.type }}</td>
        <td v-else>
            <!-- <input type="text" v-model="row.type" class="user-table-data"> -->
            <div class="edit-type">
                <label class="user-type-lable" for="admin">admin</label>
                <input type="radio" name="usertype" id="user-type-input" v-model="row.type" value="admin">
                <label class="user-type-lable" for="user">user</label>
                <input type="radio" name="usertype" id="user-type-input" v-model="row.type" value="user">
            </div>
        </td>

        <td v-if="!row.editing" class="user-table-data">{{ row.usergroup }}</td>
        <td v-else><input type="text" v-model="row.usergroup" class="user-table-data"></td>

        <td class="user-table-data">{{row.creator}}</td>
        <td class="user-table-data">{{row.creationTime}}</td>
        <td class="user-table-data">{{row.lastModifier }}</td>
        <td class="user-table-data">{{row.lastModificationTime}}</td>

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
        showDialog: false,
    }
    },
    computed: {
        // ...mapState(['usersData'])
        usersData() {
            return this.$store.state.usersData;
        },
        showHeader(){
            return this.usersData.length > 0;
        },
        adminColor() {
            return this.$store.state.adminColor;
        },
    },
    methods: {
        // ...mapMutations(['editRow', 'saveRow', 'addRow'])
        editRow(index) {
            this.$store.commit('editUser', index);
        },
        saveRow(index) {
            // this.$store.commit('saveUser', index);
            this.$store.commit('saveUser', {index: index, username: this.$store.state.userUsername});
        },
        addRow() {
        const existingRecord = this.usersData.find(record => record.username === this.newRecord.username);
        if (existingRecord) {
            let errorMessage = document.querySelector('.alert');
            errorMessage.style.display = 'flex';
            errorMessage.innerHTML = 'This user is already defined';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
            return;
        }else if(this.newRecord.username.length < 5) {
            let errorMessage = document.querySelector('.alert');
            errorMessage.innerHTML = "Username must at least 5 characters "
            errorMessage.style.display = 'flex';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }else if(this.newRecord.type !== 'admin' && this.newRecord.type !== 'user') {
            let errorMessage = document.querySelector('.alert');
            errorMessage.innerHTML = "Type should be Admin or User"
            errorMessage.style.display = 'flex';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
        if (this.newRecord.username && this.newRecord.username.length >= 5 && this.newRecord.type && (this.newRecord.type === 'admin' || this.newRecord.type === 'user') && (this.newRecord.firstName || this.newRecord.lastName || this.newRecord.usergroup || true)) {
            // const newUser = { ...this.newRecord, editing: false, color: 'color1' };
            // this.$store.commit('addUser', newUser);
            // this.newRecord = { username: '', firstName: '', lastName: '', type: '', usergroup: ''};
            // this.showDialog = false;
            // let usersList = document.querySelector(".user-table");
            // usersList.style.filter = "blur(0px)";
            const now = new Date();
            const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
            const newUser = { ...this.newRecord, editing: false, color: 'color1', creationTime: now.toLocaleTimeString([], options), creator: this.$store.state.userUsername, lastModificationTime: now.toLocaleTimeString([], options), lastModifier: this.$store.state.userUsername };
            this.$store.commit('addUser', newUser);
            this.newRecord = { username: '', firstName: '', lastName: '', type: '', usergroup: ''};
            this.showDialog = false;
            let usersList = document.querySelector(".user-table");
            usersList.style.filter = "blur(0px)";
        }
    },
    addRowCancle() {
        let usersList = document.querySelector(".user-table");
        usersList.style.filter = "blur(0px)";
        this.showDialog = false;
        this.newRecord = { username: '', firstName: '', lastName: '', type: '', usergroup: ''};
    },
    removeRow(index) {
        this.$store.commit('removeUser', index);
    },
    showDialogs() {
        let usersList = document.querySelector(".user-table");
        this.showDialog = true;
        usersList.style.filter = "blur(6px)";
        usersList.style.transition = "all 0.5s";

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
}
.add-user-btn {
    width: 120px;
    height: 50px;
    /* border: 2px solid #00ffd5; */
    border: none;
    outline: none;
    color: #fff;
    background: #080710;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: rgba(255, 255, 255, 0.25) 0px 5px 25px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 3px 6px, rgba(255, 255, 255, 0.17) 0px 1px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px;
}
.add-user-btn::before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}
.add-user-btn:active {
    color: #000
}
.add-user-btn:active:after {
    background: transparent;
}

.add-user-btn:hover:before {
    opacity: 1;
}

.add-user-btn:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #080710;
    left: 0;
    top: 0;
    border-radius: 10px;
}
@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
.alert {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 60px;
    padding: 10px;
    margin: 10px;
    line-height: 1.8;
    border-radius: 5px;
    font-family: sans-serif;
    font-weight: 400;
    background-color: rgba(255, 143, 143, 0.879);
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
}
.alert::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 0;
    background-color: rgba(255, 8, 8, 0.879);
    animation: fill-line 3s linear forwards;
}
@keyframes fill-line {
    from {
    width: 0;
    }
    to {
    width: 100%;
    }
}
.alertCheckbox {
    display: none;
}
:checked + .alert {
    display: none;
}
.alertText {
    display: table;
    margin: 0 auto;
    font-size: 16px;
}
.clear {
    clear: both;
}
.add-user-.error {
    background-color: #FEE;
    border: 1px solid #EDD;
    color: #A66;
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
.user-records-cancle-add-icon {
    color: #d2cca1e8;
    font-size: 16px;
    margin-left: 12px;
}
#keywords {
    /* width: 50%; */
    margin: 0 auto;
    font-size: 1.2em;
    margin-top: 45px;
    /* overflow: scroll; */
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
.user-type-select {
    background-color: #1d1d1faa;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid #d2cca123;
    padding: 0 12px;
}
#user-type-input{
    width: 20px;
    margin: 0 4px;
    accent-color: red;
}
.user-type-lable {
    color: #efefef;
    font-size: 14px;
    margin: auto;
}
.edit-type {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d2cca180;
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
    height: 100%;
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