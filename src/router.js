import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from './components/LoginPage.vue'
import UserManagement from './components/UserManagement.vue'
import UserGroup from './components/UserGroup.vue'
import StorageSpace from './components/StorageSpace.vue'
import FileManagement from './components/FileManagement.vue'
import UserPanel from './components/UserPanel.vue'

Vue.use(VueRouter);

const routes =[
    {path: '/login', name: 'login', component: LoginPage},
    {path: '/admin-panel/user-management', component: UserManagement},
    {path: '/admin-panel/user-group', component: UserGroup},
    {path: '/admin-panel/storage-space', component: StorageSpace},
    {path: '/admin-panel/file-management', component: FileManagement},
    {path: '/user-panel/file-management', component: UserPanel},
    {path:'*', redirect: {name: 'login'}},
];
const router = new VueRouter({
    routes,
    mode: 'history',
});

export default router;