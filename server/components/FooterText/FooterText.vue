<template>
    <div>
        <p id="text">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'FooterText',
    data() {
        return {
            text: 'Some text'
        }
    }
}
</script>

<style scoped>
    #text {
        color: orangered
    }
</style>
