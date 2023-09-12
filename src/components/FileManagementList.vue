<template>
    <div id="manage-files" :class="adminColor">
        <form id="file-upload-form" class="uploader">
            <input id="file-upload" type="file" name="fileUpload" accept="image/*, .pdf" />
            <label for="file-upload" id="file-drag">
                <p class="uploader-icon-p">
                    <font-awesome-icon class="upload-icon" icon="fas fa-upload"/>
                </p>
                <div id="start">
                    <div class="upload-semi-text">Select a file or drag here</div>
                    <div id="notimage" class="hidden">Please select an image</div>
                    <span id="file-upload-btn" class="btn btn-primary">Select a file</span>
                    <div class="upload-semi-text" style="font-size: 13px;">PDF or Image</div>
                </div>
                <div id="response" class="hidden">
                    <div id="messages"></div>
                    <progress class="progress" id="file-progress" value="0">
                    <span>0</span>%
                    </progress>
                </div>
            </label>
        </form>
    </div>
</template>

<script>

export default {
    computed: {
        adminColor() {
            return this.$store.state.adminColor;
        },
    }
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
    box-shadow: 2px 2px 3px -1px rgba(0,0,0,0.35);
    position: absolute;
    top: 0;
    right: 0;
    /* overflow-x: scroll; */
    scrollbar-width: thin;
    scrollbar-color: #ccc transparent;
}

/* File uploader */

#file-upload-form {
    width: 500px;
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
.upload-icon{
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
    background: linear-gradient(to right, darken(#454cad,8%) 0%, #454cad 50%);
    border-radius: 4px;
}
.progress[value]::-moz-progress-bar {
    background: linear-gradient(to right, darken(#454cad,8%) 0%, #454cad 50%);
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
</style>