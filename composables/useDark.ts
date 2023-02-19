import { debounceFilter, watchWithFilter } from '@vueuse/core'
import { Notification } from './useToast'
export const useDark = () => useState('dark', () => true)
export const useSideNav = () => useState('sideNav', () => true)
export const useNoti=()=>useState<Notification[]>('noti',()=>[])
