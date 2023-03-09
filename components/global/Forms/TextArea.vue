<template>
    <div class="">
        <label  :for="name">{{ label }}</label>
        <div
            class="flex mt-2 bg-white    items-center p-4 rounded-md shadow-[0px_4px_10px_rgba(0,0,0,0.08)] text-opacity-50 text-black">
            <textarea required :name="name" :style="{ 'outline': 'none' }" :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)" :type="type"
                class=" placeholder:text-black outline-0 active:outline-0  placeholder:text-opacity-50 placeholder:font-sans focus:border-0 focus-within:border-0 focus-within:outline-0  focus:outline-0 w-full" />
        </div>
</div>
</template>
<script setup>
const props = defineProps({
    'modelValue': String || Array || Number || Object,
    label: String,
    name: String,
    required:Boolean,
    type: {
        type: String,
        default: 'text'
    }
})
defineEmits(['update:modelValue'])
</script>