<template>
    <div>
        <table id="keywords" class="user-table" cellspacing="0" cellpadding="0">
            <thead v-if="showHeader">
                <tr :class="adminColor">
                    <th>Group name</th>
                    <th>Group users</th>
                    <th>Creator</th>
                    <th>Creation time</th>
                    <th>Last Modifier</th>
                    <th>Last Modification time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody class="user-records-table-body users-list">
                <tr v-for="(row, index) in groupData" :key="index" class="user-table-row" :class="adminColor">
                    <td v-if="!row.editing" class="user-table-data">{{ row.groupname }}</td>
                    <td v-else><input type="text" v-model="row.groupname" class="user-table-data"></td>
                    <td v-if="!row.editing" class="user-table-data">{{ row.groupuser }}</td>
                    <td v-else>
                        <div class="form-group">
                            <select id="groupuser" v-model="row.groupuser">
                                <option value="">Select User</option>
                                <option v-for="user in usersData" :value="user.username" :key="user">{{ user.username }}</option>
                            </select>
                        </div>
                    </td>
                    <td class="user-table-data">{{row.creator}}</td>
                    <td class="user-table-data">{{row.creationTime}}</td>
                    <td class="user-table-data">{{row.lastModifier }}</td>
                    <td class="user-table-data">{{row.lastModificationTime}}</td>
                    <td class="user-table-data">
                        <font-awesome-icon class="user-records-edit-icon user-records-icons" icon="fas fa-edit" @click="editRow(index)" v-if="!row.editing" title="Edit"/>
                        <font-awesome-icon class="user-records-save-icon user-records-icons" icon="fas fa-save" @click="saveRow(index)" v-else title="Save"/>
                        <font-awesome-icon class="user-records-remove-icon user-records-icons" icon="fas fa-trash" @click="removeRow(index)" title="Delete"/>
                    </td>
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
        groupData: {
            type: Array,
            required: true
        },
    },
    computed: {
        showHeader(){
            return this.groupData.length > 0;
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

</style>