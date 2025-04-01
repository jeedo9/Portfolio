export default () => {
    const isMobile = ref(false)
    onMounted(() => {
        window.onresize = () => {
            const windowWidth = window.innerWidth
            const md = 786
            if (windowWidth <= md) isMobile.value = true
            else isMobile.value = false
        }
    })

    return {
        isMobile
    }
}