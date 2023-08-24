<template>
    <div id="nav-bar-container">
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
                <li @click="activatedList1()" class="nav-item li1"><font-awesome-icon class="listIcon1" icon="fas fa-user-cog"/> User Management</li>
                <li @click="activatedList2()" class="nav-item li2"><font-awesome-icon class="listIcon2" icon="fas fa-user-group"/> User Group</li>
                <li @click="activatedList3()" class="nav-item li3"><font-awesome-icon class="listIcon3" icon="fas fa-database"/> Storage Space</li>
                <li @click="activatedList4()" class="nav-item li4"><font-awesome-icon class="listIcon4" icon="fas fa-file-alt"/> File Management</li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
    return {
        userUsername: 'mohammadflht'
    }
    },
    methods: {
    activatedList1() {
        let listName1 = document.querySelector('.li1');
        let listName2 = document.querySelector('.li2');
        let listName3 = document.querySelector('.li3');
        let listName4 = document.querySelector('.li4');
        listName1.classList.add("active");
        listName2.classList.remove("active");
        listName3.classList.remove("active");
        listName4.classList.remove("active");
        listName1.style.color = "#d2cca1"
        listName2.style.color = "#111"
        listName3.style.color = "#111"
        listName4.style.color = "#111"
        },
    activatedList2() {
        let listName1 = document.querySelector('.li1');
        let listName2 = document.querySelector('.li2');
        let listName3 = document.querySelector('.li3');
        let listName4 = document.querySelector('.li4');
        listName1.classList.remove("active");
        listName2.classList.add("active");
        listName3.classList.remove("active");
        listName4.classList.remove("active");
        listName1.style.color = "#111"
        listName2.style.color = "#d2cca1"
        listName3.style.color = "#111"
        listName4.style.color = "#111"
        },
    activatedList3() {
        let listName1 = document.querySelector('.li1');
        let listName2 = document.querySelector('.li2');
        let listName3 = document.querySelector('.li3');
        let listName4 = document.querySelector('.li4');
        listName1.classList.remove("active");
        listName2.classList.remove("active");
        listName3.classList.add("active");
        listName4.classList.remove("active");
        listName1.style.color = "#111"
        listName2.style.color = "#111"
        listName3.style.color = "#d2cca1"
        listName4.style.color = "#111"
        },
    activatedList4() {
        let listName1 = document.querySelector('.li1');
        let listName2 = document.querySelector('.li2');
        let listName3 = document.querySelector('.li3');
        let listName4 = document.querySelector('.li4');
        listName1.classList.remove("active");
        listName2.classList.remove("active");
        listName3.classList.remove("active");
        listName4.classList.add("active");
        listName1.style.color = "#111"
        listName2.style.color = "#111"
        listName3.style.color = "#111"
        listName4.style.color = "#d2cca1"
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
        listIcon1.style.visibility = "visible";
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
        },
    },
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
</style>