import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from './components/LoginPage.vue'
import AdminPanel from './components/AdminPanel.vue'
import UserManagement from './components/UserManagement.vue'
import UserGroup from './components/UserGroup.vue'
import StorageSpace from './components/StorageSpace.vue'
import FileManagement from './components/FileManagement.vue'

Vue.use(VueRouter);

const routes =[
    {path: '/', component: LoginPage},
    {path: '/admin-panel', component: AdminPanel},
    {path: '/admin-panel/user-management', component: UserManagement},
    {path: '/admin-panel/user-group', component: UserGroup},
    {path: '/admin-panel/storage-space', component: StorageSpace},
    {path: '/admin-panel/file-management', component: FileManagement},
];
const router = new VueRouter({
    routes
});

export default router;