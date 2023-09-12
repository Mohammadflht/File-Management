<template>
    <div id="manage-files" :class="adminColor">
        <form id="file-upload-form" class="uploader">
            <input id="file-upload" type="file" name="fileUpload" accept="image/*, .pdf" @change="handleFileUpload" />
            <label for="file-upload" id="file-drag">
                <p class="uploader-icon-p">
                    <font-awesome-icon class="upload-icon" icon="fas fa-upload" />
                </p>
                <div id="start">
                    <div class="upload-semi-text">Select a file or drag here</div>
                    <div id="notimage" class="hidden">Please select an image</div>
                    <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
                    <div class="upload-semi-text" style="font-size: 13px;">PDF or Image</div>
                </div>
            </label>
        </form>

        <table id="keywords" class="user-table align-file-management" cellspacing="0" cellpadding="0">
            <thead v-if="showHeader">
                <tr :class="adminColor">
                    <th>Owner</th>
                    <th>File Name</th>
                    <th>File Format</th>
                    <th>Size</th>
                    <th>Upload Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody class="user-records-table-body users-list">
                <tr v-for="(file, index) in files" :key="index" class="user-table-row" :class="adminColor">
                    <td class="file-table-data">{{ file.owner }}</td>
                    <td class="file-table-data">{{ file.name }}</td>
                    <td class="file-table-data">{{ file.format }}</td>
                    <td class="file-table-data">{{ file.sizeDisplay }}</td>
                    <td class="file-table-data">{{ file.time }}</td>
                    <td class="file-table-data">
                        <font-awesome-icon class="user-records-remove-icon user-records-icons" icon="fas fa-trash"
                            @click="removeRow(index)" title="Delete" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // uploadedFile: null,
        }
    },
    computed: {
        adminColor() {
            return this.$store.state.adminColor;
        },
        files() {
            // return this.$store.state.files;
            return this.$store.state.files.map(file => {
                const fileSizeKB = file.size / 1024;
                const fileSizeMB = fileSizeKB / 1024;
                const sizeDisplay = fileSizeMB >= 1 ? `${fileSizeMB.toFixed(2)} MB` : `${fileSizeKB.toFixed(2)} KB`;
                return { ...file, sizeDisplay, };
            });
        },
        showHeader() {
            return this.files.length > 0;
        },
    },
    methods: {
        handleFileUpload(event) {
            const file = event.target.files[0];
            const owner = this.$store.state.userUsername;
            const size = file.size;
            const time = new Date().toLocaleString();
            const name = file.name.split(".")[0];
            let format = file.type;
            format = format.substring(format.lastIndexOf("/") + 1);
            this.$store.commit("addFile", { owner, size, time, name, format });
        },
        removeRow(index) {
            this.$store.commit('removeFile', index);
        },
    },
    created() {
        const files = JSON.parse(localStorage.getItem('files'));
        if (files) {
            this.$store.commit('setFiles', files);
        }
    },
}
</script>

<style>
#manage-files {
    display: block;
    width: 87%;
    height: 100%;
    background: #080710 !important;
    margin: 0 auto;
    padding: 12px 17px;
    box-shadow: 2px 2px 3px -1px rgba(0, 0, 0, 0.35);
    position: absolute;
    top: 0;
    right: 0;
    overflow-x: scroll;
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;
}

/* File uploader */

#file-upload-form {
    width: 600px;
    height: 283px;
    padding-bottom: 78px;
    margin-top: -220px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.uploader {
    display: block;
    clear: both;
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
}

#file-drag {
    float: left;
    clear: both;
    width: 100%;
    padding: 2rem 1.5rem;
    text-align: center;
    background: transparent;
    border-radius: 7px;
    border: 3px solid #eee;
    transition: all .2s ease;
    user-select: none;
    cursor: pointer;
}

/* #file-drag:hover {
    border-color: #454cad;
} */

#start {
    float: left;
    clear: both;
    width: 100%;
    padding-top: 18px;

    &.hidden {
        display: none;
    }
}

#response {
    float: left;
    clear: both;
    width: 100%;

    &.hidden {
        display: none;
    }

    #messages {
        margin-bottom: .5rem;
    }
}

.upload-icon {
    color: #111;
    width: 40px;
    height: 40px;
}

#file-image {
    display: inline;
    margin: 0 auto .5rem auto;
    width: auto;
    height: auto;
    max-width: 180px;

    &.hidden {
        display: none;
    }
}

#notimage {
    display: block;
    float: left;
    clear: both;
    width: 100%;

    &.hidden {
        display: none;
    }
}

progress,.progress {
    appearance: none;
    display: inline;
    clear: both;
    margin: 0 auto;
    width: 100%;
    max-width: 180px;
    height: 8px;
    border: 0;
    border-radius: 4px;
    background-color: #eee;
    overflow: hidden;
}

.progress[value]::-webkit-progress-bar {
    border-radius: 4px;
    background-color: #eee;
}

.progress[value]::-webkit-progress-value {
    background: linear-gradient(to right, darken(#454cad, 8%) 0%, #454cad 50%);
    border-radius: 4px;
}

.progress[value]::-moz-progress-bar {
    background: linear-gradient(to right, darken(#454cad, 8%) 0%, #454cad 50%);
    border-radius: 4px;
}

input[type="file"] {
    display: none;
}

div.upload-semi-text {
    margin: 0 0 .5rem 0;
    color: #5f6982;
}

.btn {
    display: inline-block;
    margin: .5rem .5rem 1rem .5rem;
    clear: both;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    text-transform: initial;
    border: none;
    border-radius: .2rem;
    outline: none;
    padding: 0 1rem;
    height: 36px;
    line-height: 36px;
    color: #fff;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    background: #454cad;
    border-color: #454cad;
    cursor: pointer;
}

/* table */
.align-file-management {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 300px;
    overflow-y: scroll;
}

.file-table-data {
    height: 100%;
    text-align: center;
    padding: 15px 10px;
    border: 1px solid #d2cca12c;
}
</style>