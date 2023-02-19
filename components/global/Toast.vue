<template>
    <div :style="{backgroundColor:toastColor, transitionDuration:duration}" :class="[`toast-notification relative py-4 px-4 md:px-6 rounded-md max-w-[350px] md:max-w-max`]" 
        @click.prevent="close" :ref="id">
        <div @click="close" class=" cursor-pointer text-white absolute right-2 top-1" title="Close">
            
        </div>

        <div :class="[`text-white flex gap-4 items-center`]">
            <Icon size="28" :name="toastIcon"/>
            <div class=" w-px h-full min-h-[48px]  bg-white"></div>
            <div class="content">
                <div class="content__title text-base">{{ toastTitle }}</div>

                <p class="content__message text-xs">{{ message }}</p>
            </div>
            <Icon size="28" name="uil:times" class=" cursor-pointer" />
        </div>
        <div v-if="autoClose" class="progress"></div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    id: { type: String, required: true },
    type: {
        type: String,
        default: "info",
        required: false,
    },
    title: { type: String, default: null, required: false },
    message: {
        type: String,
        default: "Ooops! A message was not provided.",
        required: false,
    },
    autoClose: { type: Boolean, default: true, required: false },
    duration: { type: Number, default: 5, required: false },
});
// Defining emits
// for closing a notification
const emit = defineEmits<{
    (e: "close"): void;
}>();
// some reactive values to manage the notification
const timer = ref<NodeJS.Timeout>();
const startedAt = ref<number>(0);
const delay = ref<number>(0);
// setting up the automatic
// dismissing of notificaton
// after the specified duration
onMounted(() => {
    if (props.autoClose) {
        startedAt.value = Date.now();
        delay.value = props.duration * 1000;
        timer.value = setTimeout(close, delay.value);
    }
});
// a computed property to set
// the icon for the notification
const toastIcon = computed(() => {
    switch (props.type) {
        case "error":
            return "mi:circle-error";
        case "warning":
            return "mdi:warning-circle-outline";
        case "success":
            return "mdi:success-circle-outline";
        default:
            return "mdi:information-outline";
    }
});
// a computed property to set
// the icon and progres bar color
// for the notification
const toastColor = computed(() => {
    switch (props.type) {
        case "error":
            return "#ff355b";
        case "warning":
            return "#e8b910";
        case "success":
            return "#00cc69";
        default:
            return "#0067ff";
    }
});
// a computed property to set
// the title of the notification
const toastTitle = computed(() => {
    return props.title && props.title !== null ? props.title : "Notification";
});
// a method to close the
// notification and emit the action
const close = () => {
    emit("close");
};
</script>