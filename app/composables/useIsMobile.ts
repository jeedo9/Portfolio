import throttle from "lodash.throttle"

export default () => {

       
    let windowWidth = window.innerWidth;
    const md = 768

    const isMobile = ref(windowWidth <= md)

    onMounted(() => {

        const handleResize = () => {
            windowWidth = window.innerWidth
    
            if (windowWidth <= md) isMobile.value = true
            else isMobile.value = false
        }

        const handleResizeThrottled = throttle(handleResize, 100)
    
        window.addEventListener('resize', handleResizeThrottled)
})

return {
        isMobile
    }
}