export default (cb: IntersectionObserverCallback,  selector: string,  selectAll?: boolean, observerOptions?: IntersectionObserverInit) => {

    onMounted(() => {

       
        const observer = new IntersectionObserver(cb, observerOptions)
        
        const selectNodes = document.querySelectorAll(selector) 

        const selectNode =  document.querySelector(selector) || document.getElementById(selector)
        
        if (!selectNode || !selectNodes) return

        if (selectAll) {
            selectNodes.forEach(node => {
        
                observer.observe(node)
              
            }) 

        }
        else observer.observe(selectNode)  
})
}