<template>
    <div class="big">
        <h1>My Big Component</h1>
        <MyLittleComponent></MyLittleComponent>
    </div>
</template>

<script>
    import MyLittleComponent from './MyLittleComponent'
    export default {
        name: 'MyBiggerComponent',
        components: {
            MyLittleComponent,
        }
    }
</script>

<style>
.big {
    border: 2px solid red;
}
</style>
