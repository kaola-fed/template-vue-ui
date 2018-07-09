<template>
    <button>{{ label }}</button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            defaults: ''
        }
    }
}
</script>

<style>

</style>
