<template>
    <transition-group name="toast-notification" tag="div" class="toast-notifications fixed top-20 right-4 md:right-12" @before-enter="stopBodyOverflow"
        @after-enter="allowBodyOverflow" @before-leave="stopBodyOverflow" @after-leave="allowBodyOverflow">
        <toast v-for="(item, idx) in noti" :key="item.id" :id="item.id" :type="item.type" :title="item.title"
            :message="item.message" :auto-close="item.autoClose" :duration="item.duration" @close="
                () => {
                    removeNotifications(item.id);
                }
            ">
        </toast>
    </transition-group>
</template>
<script setup lang="ts">
const {
    notifications,
    createNotification,
    removeNotifications,
    stopBodyOverflow,
    allowBodyOverflow,
} = useToast();
const noti=useNoti()
watchEffect(()=>{
    
})
</script>
<style>
.toast-notifications {
    z-index: 100;
    display: flex;
    flex-direction: column-reverse;
    gap: 0.8rem;
    
}

.toast-notification-enter-active {
    animation: toast-fade-in 0.5s ease-in-out;
}

.toast-notification-leave-active {
    animation: toast-fade-in 0.5s ease-in-out reverse;
}

@keyframes toast-fade-in {
    from {
        opacity: 0;
        transform: scale(0.4);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>