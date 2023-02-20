import { debounceFilter, watchWithFilter } from '@vueuse/core'
import { Notification } from './useToast'
export const useDark = () => useState('dark', () => true)
export const useSideNav = () => useState('sideNav', () => false)
export const useNoti=()=>useState<Notification[]>('noti',()=>[])
export const useCv=()=>useState('CV',()=>'')
