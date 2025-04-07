import throttle from "lodash.throttle"

export default () => {

       
    let windowWidth = window.innerWidth;


    const isMobile = ref(windowWidth <= MD)

    onMounted(() => {

        const handleResize = () => {
            windowWidth = window.innerWidth
    
            if (windowWidth <= MD) isMobile.value = true
            else isMobile.value = false
        }

        const handleResizeThrottled = throttle(handleResize, 100)
    
        window.addEventListener('resize', handleResizeThrottled)
})

return {
        isMobile
    }
}