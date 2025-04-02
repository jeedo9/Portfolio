export default () => {
    const isMobile = ref(false)
    onMounted(() => {

        const handleResize = () => {
          
            const windowWidth = window.innerWidth
            const md = 786
            if (windowWidth <= md) isMobile.value = true
            else isMobile.value = false
        }
    
        window.addEventListener('resize', handleResize)
})

    return {
        isMobile
    }
}