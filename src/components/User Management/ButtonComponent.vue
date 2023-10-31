<template>
    <div>
        <button class="add-user-btn" @click="showDialogs()">Add User</button>
        <label>
            <input type="checkbox" class="alertCheckbox" autocomplete="off" />
            <div class="alert add-user-error">
                <span class="alertText"><br class="clear" /></span>
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
/* Generate button start */
.add-user-btn {
    width: 120px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #080710;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: rgba(255, 255, 255, 0.25) 0px 5px 25px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 3px 6px, rgba(255, 255, 255, 0.17) 0px 1px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px;
}

.add-user-btn::before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.add-user-btn:active {
    color: #000
}

.add-user-btn:active:after {
    background: transparent;
}

.add-user-btn:hover:before {
    opacity: 1;
}

.add-user-btn:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #080710;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% {
        background-position: 0 0;
    }

    50% {
        background-position: 400% 0;
    }

    100% {
        background-position: 0 0;
    }
}

/* error state start */
.alert {
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

.alert::after {
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

:checked+.alert {
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
}</style>