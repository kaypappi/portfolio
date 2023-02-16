const getMobileOS = () => {
    const ua = navigator.userAgent
    if (/android/i.test(ua)) {
      return "Android"
    }
    else if (/iPad|iPhone|iPod|Macintosh/.test(ua)){
      return "iOS"
    }
    return "Other"
  }

export const useDeviceLink=()=>{
    const appStoreLink='https://apps.apple.com/ng/app/blackcopper/id1539032822'
    const playStoreLink="https://play.google.com/store/apps/details?id=com.blackcopper"
    if (getMobileOS()==='iOS'){
        return appStoreLink
    }
    return playStoreLink
}