<template>
    <div>
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
                    <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.username">
                    </td>
                    <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.firstName">
                    </td>
                    <td><input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.lastName">
                    </td>
                    <td class="user-type-select">
                        <!-- <input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.type"> -->
                        <label class="user-type-lable" for="admin">admin</label>
                        <input type="radio" name="usertype" id="user-type-input" v-model.trim="newRecord.type"
                            value="admin">
                        <label class="user-type-lable" for="user">user</label>
                        <input type="radio" name="usertype" id="user-type-input" v-model.trim="newRecord.type" value="user">

                    </td>
                    <td class="select-td">
                        <!-- <input class="create-user-input" placeholder="New" type="text" v-model.trim="newRecord.usergroup"> -->

                        <div class="form-group">
                            <select id="usergroup" v-model="newRecord.usergroup">
                                <option value="">Select Group</option>
                                <option v-for="group in userGroups" :value="group.groupname" :key="group">{{ group.groupname
                                }}</option>
                            </select>
                        </div>
                    </td>
                    <td class="user-table-data">
                        <font-awesome-icon @click="addRow()" class="user-records-add-icon user-records-icons"
                            icon="fas fa-plus" title="Add" />
                        <font-awesome-icon @click="addRowCancle()" class="user-records-cancle-add-icon user-records-icons"
                            icon="fas fa-remove" title="Cancle" />
                    </td>
                    <!-- <td class="user-table-data"></td> -->
                </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

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
            newRecord: { username: '', firstName: '', lastName: '', type: '', usergroup: '' },
        }
    },
    methods: {
        addRow() {
            const existingRecord = this.usersData.find(record => record.username === this.newRecord.username);
            if(this.newRecord.username == '') {
                toast.fire({
                    title: "Username can't be empty",
                    icon:'error',
                })
            }
            else if (existingRecord) {
                toast.fire({
                    title: 'This user is already defined',
                    icon:'error',
                })
                return;
            } else if (this.newRecord.username.length < 5) {
                toast.fire({
                    title: 'Username must at least 5 characters',
                    icon:'error',
                })
            } else if (this.newRecord.type !== 'admin' && this.newRecord.type !== 'user') {
                toast.fire({
                    title: 'Type should be Admin or User',
                    icon:'error',
                })
            }
            if (this.newRecord.username && this.newRecord.username.length >= 5 && this.newRecord.type && (this.newRecord.type === 'admin' || this.newRecord.type === 'user') && (this.newRecord.firstName || this.newRecord.lastName || this.newRecord.usergroup || true)) {
                const timeStamp = new Date();
                const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
                const newUser = { username: this.newRecord.username, firstName: this.newRecord.firstName, lastName: this.newRecord.lastName, type: this.newRecord.type, usergroup: this.newRecord.usergroup, editing: false, color: 'color1', creationTime: timeStamp.toLocaleTimeString([], options), creator: this.$store.state.userUsername, lastModificationTime: '', lastModifier: '' };
                this.$emit('add-user', newUser);
                this.newRecord = { username: '', firstName: '', lastName: '', type: '', usergroup: '' };
            }
        },
        addRowCancle() {
            this.newRecord = { username: '', firstName: '', lastName: '', type: '', usergroup: '' };
            this.$emit('cancel-add-user');
        },
    },
}
const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false,
    customClass: {
        title: 'toast-title',
        timerProgressBar: 'error-pbar'
    }
})
</script>
<style>
.create-user-input {
    width: 160px;
    height: 50px;
    text-align: center;
    padding: 15px 10px;
    border: 1px solid #d2cca12c;
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
.error-pbar {
    background-color: red;
}

</style>