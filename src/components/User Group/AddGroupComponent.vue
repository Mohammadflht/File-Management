<template>
    <div>
        <table v-if="showDialog" id="keywords" cellspacing="0" cellpadding="0">
            <thead>
                <tr :class="adminColor">
                    <th>Group name</th>
                    <th>Group user</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody class="user-records-table-body">
                <tr :class="adminColor">
                    <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.groupname"></td>
                    <td class="select-td">
                    <div class="form-group">
                        <select id="groupuser" v-model="newRecord.groupuser">
                            <option value="">Select User</option>
                            <option v-for="user in usersData" :value="user.username" :key="user">{{ user.username }}</option>
                        </select>
                    </div>
                    </td>
                    <td class="user-table-data">
                        <font-awesome-icon @click="addRow()" class="user-records-add-icon user-records-icons" icon="fas fa-plus" title="Add"/>
                        <font-awesome-icon @click="addRowCancle()" class="user-records-cancle-add-icon user-records-icons" icon="fas fa-remove" title="Cancle"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        props: {
            showDialog: {
                type: Boolean,
                required: true,
                },
            adminColor: {
                type: String,
                required: true,
                },
            userGroups: {
                type: Array,
                required: true,
                },
            usersData: {
                type: Array,
                required: true,
                },
        },
        data() {
        return {
            newRecord: { groupname: '', groupuser: ''},
            }
        },
        methods: {
            addRow() {
                const existingRecord = this.userGroups.find(record => record.groupname === this.newRecord.groupname);
                if (existingRecord) {
                let errorMessage = document.querySelector('.group-alert');
                errorMessage.style.display = 'flex';
                errorMessage.innerHTML = 'This group is already defined';
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 3000);
                return;
            }
            else if(this.newRecord.groupname.length < 5) {
                let errorMessage = document.querySelector('.group-alert');
                errorMessage.innerHTML = "Group name must at least 5 characters "
                errorMessage.style.display = 'flex';
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 3000);
            }
            if (this.newRecord.groupname && this.newRecord.groupname.length >= 5 && (this.newRecord.groupname)) {
                const now = new Date();
                const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
                const newUser = { ...this.newRecord, editing: false, color: 'color1', creationTime: now.toLocaleTimeString([], options), creator: this.$store.state.userUsername, lastModificationTime: '', lastModifier: ''};
                this.$emit('add-group', newUser);
                this.newRecord = { groupname: '', groupuser: ''};
            }
            },
            addRowCancle() {
                this.newRecord = { groupname: '', groupuser: ''};
                this.$emit('cancel-add-group');
            },
    },
    }
</script>
<style>
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
    margin-left: 8px;
}
.user-records-icons {
    cursor: pointer;
}
th, td {
    font-size: 16px;
}
#groupuser {
    overflow-y: scroll;
}
</style>