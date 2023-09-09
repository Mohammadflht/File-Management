<template>
    <div>
        <button class="add-user-btn" @click="showDialogs()">Add Group</button>
        <label>
            <input type="checkbox" class="alertCheckbox" autocomplete="off" />
            <div class="group-alert add-user-error">
                <span class="alertText"><br class="clear"/></span>
            </div>
        </label>
    </div>
</template>
<script>
export default {
    props: {
    showDialog: Boolean,
    },
    methods: {
    showDialogs() {
        let usersList = document.querySelector(".user-table");
        this.$emit("show-dialog", true);
        usersList.style.filter = "blur(6px)";
        usersList.style.transition = "all 0.5s";
    },
    },
};
</script>
<style>

.group-alert {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 60px;
    padding: 10px;
    margin: 10px;
    line-height: 1.8;
    border-radius: 5px;
    font-family: sans-serif;
    font-weight: 400;
    background-color: rgba(255, 143, 143, 0.879);
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
}
.group-alert::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5px;
    width: 0;
    background-color: rgba(255, 8, 8, 0.879);
    animation: fill-line 3s linear forwards;
}
@keyframes fill-line {
    from {
    width: 0;
    }
    to {
    width: 100%;
    }
}
.alertCheckbox {
    display: none;
}
:checked + .alert {
    display: none;
}
.alertText {
    display: table;
    margin: 0 auto;
    font-size: 16px;
}
.clear {
    clear: both;
}
.add-user-.error {
    background-color: #FEE;
    border: 1px solid #EDD;
    color: #A66;
}
</style>