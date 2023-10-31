<template>
    <div>
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

                    <td class="user-table-data">{{ row.username }}</td>

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
                    <td v-else class="select-td">
                        <!-- <input type="text" v-model="row.usergroup" class="user-table-data"> -->
                        <div class="form-group">
                            <select id="usergroup" v-model="row.usergroup">
                                <option value="">Select Group</option>
                                <option v-for="group in userGroups" :value="group.groupname" :key="group">{{ group.groupname
                                }}</option>
                            </select>
                        </div>
                    </td>

                    <td class="user-table-data">{{ row.creator }}</td>
                    <td class="user-table-data">{{ row.creationTime }}</td>
                    <td class="user-table-data">{{ row.lastModifier }}</td>
                    <td class="user-table-data">{{ row.lastModificationTime }}</td>

                    <td class="user-table-data">
                        <font-awesome-icon class="user-records-edit-icon user-records-icons" icon="fas fa-edit"
                            @click="editRow(index)" v-if="!row.editing" title="Edit" />
                        <font-awesome-icon class="user-records-save-icon user-records-icons" icon="fas fa-save"
                            @click="saveRow(index)" v-else title="Save" />
                        <font-awesome-icon class="user-records-remove-icon user-records-icons" icon="fas fa-trash"
                            @click="removeRow(index)" title="Delete" />
                    </td>
                    <!-- <td class="user-table-data"></td> -->
                </tr>

            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    props: {
        adminColor: {
            type: String,
            required: true
        },
        usersData: {
            type: Array,
            required: true
        },
        userGroups: {
            type: Array,
            required: true
        },
    },
    computed: {
        showHeader() {
            return this.usersData.length > 0;
        }
    },
    methods: {
        editRow(index) {
            this.$emit('edit-row', index);
        },
        saveRow(index) {
            this.$emit('save-row', index);
        },
        removeRow(index) {
            this.$emit('remove-row', index);
        }
    }
}
</script>

<style>
.user-records-table-body input {
    margin: 0;
    background-color: #1d1d1faa;
    color: #d2cca1b2;
    outline: none;
}

#user-type-input {
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

.user-table-row {
    color: #d2cca1b2;
    width: 100%;
}

.user-table-data {
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

th,
td {
    font-size: 16px;
}

.form-group {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.form-group select {
    background-color: #080710;
    outline: none;
    border: 1px solid #efefef;
    border-radius: 4px;
    color: #efefef;
    padding: 4px;
}

.select-td {
    border-bottom: 1px solid #d2cca12c;
}</style>
