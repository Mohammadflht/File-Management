import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        visitedDestinations: new Set(),
        userUsername: 'admin',
        usersData: JSON.parse(localStorage.getItem('usersData')) || [],
        groupData: JSON.parse(localStorage.getItem('groupData')) || [],
        color: 'color1',
        adminColor: 'color1',
        files: JSON.parse(localStorage.getItem("files")) || [],
    },
    mutations: {
        // addFile(state, file) {
        //     state.files.push(file);
        //     localStorage.setItem('files', JSON.stringify(state.files));
        // },
        setFiles(state, files) {
            state.files = files;
            localStorage.setItem('files', JSON.stringify(state.files));
        },        addUser(state, newUser) {
            state.usersData.push(newUser);
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
        },
        addGroup(state, newGroup) {
            state.groupData.push(newGroup);
            localStorage.setItem('groupData', JSON.stringify(state.groupData));
        },
        addFile(state, file) {
            state.files.push(file);
            localStorage.setItem("files", JSON.stringify(state.files));
        },
        removeUser(state, index) {
            state.usersData.splice(index, 1);
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
        },
        removeGroup(state, index) {
            state.groupData.splice(index, 1);
            localStorage.setItem('groupData', JSON.stringify(state.groupData));
        },
        removeFile(state, index) {
            state.files.splice(index, 1);
            localStorage.setItem('files', JSON.stringify(state.files));
        },
        editUser(state, index) {
            state.usersData[index].editing = true;
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
        },
        editGroup(state, index) {
            state.groupData[index].editing = true;
            localStorage.setItem('groupData', JSON.stringify(state.groupData));
        },
        saveUser(state, payload) {
            const now = new Date();
            const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
            state.usersData[payload.index].lastModificationTime = now.toLocaleTimeString([], options);
            state.usersData[payload.index].lastModifier = payload.username;
            state.usersData[payload.index].editing = false;
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
        },
        saveGroup(state, payload) {
            const now = new Date();
            const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
            state.groupData[payload.index].lastModificationTime = now.toLocaleTimeString([], options);
            state.groupData[payload.index].lastModifier = payload.username;
            state.groupData[payload.index].editing = false;
            localStorage.setItem('groupData', JSON.stringify(state.groupData));
        },
        setUsersData(state, data) {
            state.usersData = data;
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
        },
        setUserUsername(state, username) {
            state.userUsername = username;
        },
        setColorTheme(state, color) {
            state.color = color;
            localStorage.setItem('color', color);
        },
        setColorThemeAdmin(state, adminColor) {
            state.adminColor = adminColor;
            localStorage.setItem('adminColor', adminColor);
        },

    },
    actions: {
    getUsersData({ commit }) {
        const data = JSON.parse(localStorage.getItem('usersData')) || [];
        commit('setUsersData', data);
    },
    },
    getters: {
    },
})