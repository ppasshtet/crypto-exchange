<template>
    <div class="custom-input">
        <div class="cutom-input__title text text--14">
            {{title}}
        </div>
        <div class="custom-input__wrapper">
            <input
            :placeholder="inputOptions.placeholder"
            type="number"
            :value="value"
            @input="$emit('input', $event.target.value)"
            >
        <div class="custom-input__btn">
            <slot name="button"></slot>
        </div>
        </div>
        <div class="custom-input__available text text--12">
            Available: 0 
        </div>
        
    </div>
</template>


<script>

export default {
    props: {
        value: [String, Number],
        title: {
            type: String,
            default: ''
        },
        inputOptions: {
            type: Object,
            default: () => {
                return {
                placeholder: '',
                maxlength: 10000
                }
             }
        },
        currency: {
            type: Array, 
            default: null
        },
        changeValue: [String, Number],
    },
}
</script>

<style lang="scss" scoped>

.custom-input {
    margin-top: 12px;
}

.cutom-input__title {
    color: $text-black;
    margin-bottom: 8px;
}

.custom-input__wrapper {
    display: flex;
}

.custom-input__btn {
    height: 40px;
    width: 95px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $button-main;
    border-radius: 0px 4px 4px 0px;
}

input {
    border-radius: 4px 0px 0px 4px;
    outline: none;
    border: none;
    border: solid 1px $gray;
    height: 40px;
    padding: 16px;
}

.custom-input__available {
    color: $gray;
    margin-top: 8px;
}
</style>