<template>
    <div>
        <button @click="sendLogMessage">Add logger message</button>
    </div>
</template>

<script>
    export default {
        name: 'FooterButton',
        methods: {
            sendLogMessage : () => {
                console.log('Should be sending log event now...');
                document.dispatchEvent(new CustomEvent('log', { detail: "Footer button says hi!" }));
            }
        }
    }
</script>

<style scoped>
    button {
        color: blue;
        background-color: orange;
        height: 50px;
    }
</style>
