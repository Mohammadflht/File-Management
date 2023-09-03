<template>
    <div id="nav-bar-container" :class="adminColor">
        <div class="user-profile-toggle">
            <font-awesome-icon @click="closeNavigation()" icon="fas fa-times" class="close-nav-bar-icon"/>
            <font-awesome-icon @click="openNavigation()" icon="fas fa-bars" class="open-nav-bar-icon"/>
            <div class="user-profile-picture-division">
                <img class="user-profile-picture" src="../assets/user-profile.png" alt="user-image" draggable="false">
            </div>
            <p class="user-username">{{ userUsername }}</p>
            <div class="logout-division">
                <button @click="logOut()" type="button" class="logout-btn">Log Out</button>
            </div>
        </div>
        <nav class="side-nav">
            <ul class="nav-menu">
                <li  class="nav-item li1 active select-list"><font-awesome-icon class="listIcon1 iconList" icon="fas fa-user-cog"/> User Management</li>
                <li @click="activatedList2()" class="nav-item li2"><font-awesome-icon class="listIcon2 iconList" icon="fas fa-user-group"/> User Group</li>
                <li @click="activatedList3()" class="nav-item li3"><font-awesome-icon class="listIcon3 iconList" icon="fas fa-database"/> Storage Space</li>
                <li @click="activatedList4()" class="nav-item li4 last-active"><font-awesome-icon class="listIcon4 iconList" icon="fas fa-file-alt"/> File Management</li>
            </ul>
            <div class="username-list">
                <h2 class="usernames-header">Usernames</h2>
                <ul>
                    <li class="usernames" v-for="(user, index) in usersData" :key="index" @click="selectUser(user)">{{ user.username }}</li>
                </ul>
            </div>
            <div class="color-themes-container">
                <button :class="[adminColor === 'color1' ? 'primary-color1' : '']" class="color-theme-btn" @click="$store.commit('setColorThemeAdmin', 'color1')">color1</button>
                <button :class="[adminColor === 'color2' ? 'primary-color2' : '']" class="color-theme-btn" @click="$store.commit('setColorThemeAdmin', 'color2')">color2</button>
                <button :class="[adminColor === 'color3' ? 'primary-color3' : '']" class="color-theme-btn" @click="$store.commit('setColorThemeAdmin', 'color3')">color3</button>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
    return {
        visitedDestinations: new Set()
    }
    },
    methods: {
    activatedList2() {
        this.$router.push('./user-group');
        },
    activatedList3() {
        this.$router.push('./storage-space');
        },
    activatedList4() {
        this.$router.push('./file-management');

        },
    logOut() {
        this.$router.push('/');
        },
    closeNavigation() {
        let navigationPanel = document.querySelector("#nav-bar-container");
        let userProfilePicture = document.querySelector(".user-profile-picture-division");
        let userUsername = document.querySelector(".user-username");
        let logoutBtn = document.querySelector(".logout-division");
        let closeNavBarIcon = document.querySelector(".close-nav-bar-icon");
        let openNavBarIcon = document.querySelector(".open-nav-bar-icon");
        let navBarList1 = document.querySelector(".li1");
        let navBarList2 = document.querySelector(".li2");
        let navBarList3 = document.querySelector(".li3");
        let navBarList4 = document.querySelector(".li4");
        let listIcon1 = document.querySelector(".listIcon1");
        let listIcon2 = document.querySelector(".listIcon2");
        let listIcon3 = document.querySelector(".listIcon3");
        let listIcon4 = document.querySelector(".listIcon4");
        let usernameList = document.querySelector(".username-list");


        navigationPanel.style.width = "4%";
        userProfilePicture.style.visibility = "hidden";
        userUsername.style.visibility = "hidden";
        logoutBtn.style.visibility = "hidden";
        closeNavBarIcon.style.display = "none";
        openNavBarIcon.style.display = "block";
        navBarList1.style.visibility = "hidden";
        navBarList2.style.visibility = "hidden";
        navBarList3.style.visibility = "hidden";
        navBarList4.style.visibility = "hidden";
        usernameList.style.visibility = "hidden";
        listIcon1.style.visibility = "visible";
        listIcon1.style.color = "#080710";
        listIcon2.style.visibility = "visible";
        listIcon3.style.visibility = "visible";
        listIcon4.style.visibility = "visible";
        },
    openNavigation() {
        let navigationPanel = document.querySelector("#nav-bar-container");
        let userProfilePicture = document.querySelector(".user-profile-picture-division");
        let userUsername = document.querySelector(".user-username");
        let logoutBtn = document.querySelector(".logout-division");
        let closeNavBarIcon = document.querySelector(".close-nav-bar-icon");
        let openNavBarIcon = document.querySelector(".open-nav-bar-icon");
        let navBarList1 = document.querySelector(".li1");
        let navBarList2 = document.querySelector(".li2");
        let navBarList3 = document.querySelector(".li3");
        let navBarList4 = document.querySelector(".li4");
        let listIcon1 = document.querySelector(".listIcon1");
        let usernameList = document.querySelector(".username-list");

        navigationPanel.style.width = "13%";
        userProfilePicture.style.visibility = "visible";
        userUsername.style.visibility = "visible";
        logoutBtn.style.visibility = "visible";
        closeNavBarIcon.style.display = "block";
        openNavBarIcon.style.display = "none";
        navBarList1.style.visibility = "visible";
        navBarList2.style.visibility = "visible";
        navBarList3.style.visibility = "visible";
        navBarList4.style.visibility = "visible";
        usernameList.style.visibility = "visible";
        listIcon1.style.color = "#d2cca1";
        },
    selectUser(user) {
        let destination;
        if (user.type === 'user') {
            destination = '/user-panel/file-management';
        } else if (user.type === 'admin') {
            destination = '/admin-panel/file-management';
        }
        if (destination && destination !== this.currentRoute && !this.visitedDestinations.has(destination)) {
        this.$router.push(destination);
        this.visitedDestinations.add(destination);
        }
        this.userUsername = user.username;
        this.$store.commit('setUserUsername', user.username);
        localStorage.setItem('userUsername', user.username);
        },
    },
    computed: {
        usersData(){
            return this.$store.state.usersData;
        },
        userUsername() {
            return this.$store.state.userUsername;
        },
        currentRoute() {
            return this.$route.path;
        },
        adminColor() {
            return this.$store.state.adminColor;
        },
    },
        mounted() {
            const userUsername = localStorage.getItem('userUsername');
            if (userUsername) {
                this.$store.commit('setUserUsername', userUsername);
            }
    }
}
</script>

<style media="screen">
* {
    box-sizing: border-box;
}
#nav-bar-container {
    width: 13%;
    height: 100vh;
    background-color: #d2cca1e8;
    position: absolute;
    left: 0;
    transition: width .4s;
}
.user-profile-toggle {
    width: 100%;
    height: 24%;
    padding: 12px;
    padding-top: 30px;
    background-color: transparent;
    position: relative;

}
.close-nav-bar-icon {
    font-size: 26px;
    position: absolute;
    right: 8px;
    top: 8px;
    cursor: pointer;
}
.open-nav-bar-icon {
    font-size: 24px;
    margin: auto;
    cursor: pointer;
    display: none;
}
.user-profile-picture-division {
    width: 80px;
    height: 80px;
    background-color: #080710;
    padding: 8px;
    border: 4px solid #080710;
    border-radius: 50%;
    margin: auto;
}
.user-profile-picture {
    max-width: 100%;
    height: auto;
    margin-bottom: 12px;
}
.user-username {
    text-align: center;
    padding: 12px;
    font-size: 16px;
    text-shadow: 0 0 1px #080710;
}
.logout-division {
    display: flex;
    justify-content: center;
}
.logout-btn {
    width: 35%;
    padding: 4px 6px;
    cursor: pointer;
    background-color: #ff715b92;
    border: 2px solid #FF715B;
    border-radius: 12px;
    font-size: 12px;
    color: #080710;
    transition: background-color .3s;
    text-shadow: 0 0 1px #080710;
}
.logout-btn:hover {
    background-color: #ff715bd2;
    border: 2px solid #ff715b;
}
.side-nav {
    height: 76%;
    width: 100%;
}
.side-nav .nav-menu {
    list-style: none;
    padding: 40px 0;
    width: 200px;
}
.iconList {
    font-size: 17px;
}
.side-nav .nav-item {
    position: relative;
    padding: 10px 20px;
    color: #111;
    cursor: pointer;
    font-size: 16px;
    border-bottom: 1px solid #08071027;
    border-bottom: 1px solid #08071027;
}
.side-nav .nav-item:first-child {
    border-top: 1px solid #08071027;
}
.side-nav .nav-item:hover {
    border-bottom: 1px solid #08071052;
}
.active {
    background-color: #080710;
    box-shadow: 0px -3px rgba(0, 0, 0, 0.2), 0px 3px rgba(0, 0, 0, 0.2);
    color: #d2cca1 !important;

}
.menu-text {
    padding: 0 20px;
}
.side-nav .nav-item.active::before {
    content: "";
    position: absolute;
    background-color: transparent;
    bottom: 100%;
    right: 0;
    height: 150%;
    width: 20px;
    border-bottom-right-radius: 25px;
    box-shadow: 0 20px 0 0 #080710;
}
.side-nav .nav-item.active::after {
    content: "";
    position: absolute;
    background-color: transparent;
    top: 100%;
    right: 0;
    height: 150%;
    width: 20px;
    border-top-right-radius: 25px;
    box-shadow: 0 -20px 0 0 #080710;
}
/* Username list */
.username-list {
    position: relative;
    background: #080710;
    width: 60%;
    margin: auto;
    border-radius: 4px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
.usernames-header {
    color: #d2cca1;
    background: #080710;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 700;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
.username-list ul:hover li {
    opacity: 1;
}
.usernames {
    list-style: none;
    padding: 10px;
    width: 100%;
    background: #080710;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s;
    font-size: 14px;
    color: #d2cca1;
    border-top: 1px solid #d2cca1;
}
.usernames:hover {
    transform: scale(1.1);
    z-index: 5;
    background: #080710;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    color: #d2cca1;
    opacity: 1;
    cursor: pointer;
}
</style>