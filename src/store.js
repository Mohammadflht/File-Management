import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        visitedDestinations: new Set(),
        userUsername: 'admin',
        usersData: JSON.parse(localStorage.getItem('usersData')) || [],
        color: 'color1',
        adminColor: 'color1',
    },
    mutations: {
        addUser(state, newUser) {
            state.usersData.push(newUser);
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
        },
        removeUser(state, index) {
            state.usersData.splice(index, 1);
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
        },
        editUser(state, index) {
            state.usersData[index].editing = true;
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
        },
        saveUser(state, payload) {
            // const now = new Date();
            // state.usersData[index].lastModificationTime = now.toLocaleString();
            // state.usersData[index].lastModifier = this.username;
            // state.usersData[index].editing = false;
            // localStorage.setItem('usersData', JSON.stringify(state.usersData));
            const now = new Date();
            state.usersData[payload.index].lastModificationTime = now.toLocaleString();
            state.usersData[payload.index].lastModifier = payload.username;
            state.usersData[payload.index].editing = false;
            localStorage.setItem('usersData', JSON.stringify(state.usersData));
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