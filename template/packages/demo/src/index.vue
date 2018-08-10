<template>
    <button class="u-demo-button" :class="{ rounded: rounded }" @click="onClick">{{ label }}</button>
</template>

<script>
export default {
    name: '<%= prefix %>-demo',
    props: {
        label: {
            type: String,
            defaults: ''
        },
        rounded: {
            type: Boolean,
            defaults: false
        }
    },
    methods: {
        onClick(e) {
            this.$emit('click', e);
        }
    }
}
</script>

<style lang="scss">
.u-demo-button {
    display: inline-block;
    height: 30px;
    min-width: 60px;
    background-color: royalblue;
    border-color: none;
    color: #fff;
    &.rounded {
        border-radius: 5px;
    }
}
</style>
