<template>
    <div class="">
        <label :for="name" class="block text-sm font-medium text-gray-300 mb-2">{{ label }}</label>
        <div
            class="flex mt-2 bg-white items-center p-4 rounded-md shadow-[0px_4px_10px_rgba(0,0,0,0.08)] text-black">
            <textarea
                :id="name"
                required
                :name="name"
                :aria-label="label"
                :aria-describedby="name + '-description'"
                :style="{ 'outline': 'none' }"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                :type="type"
                rows="4"
                class="placeholder:text-gray-500 placeholder:font-sans focus:border-2 focus:border-indigo-500 focus-within:border-2 focus-within:border-indigo-500 focus:outline-0 w-full transition-colors resize-none"
                :aria-required="required" />
        </div>
        <p :id="name + '-description'" class="sr-only">Enter your {{ label.toLowerCase() }}</p>
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
