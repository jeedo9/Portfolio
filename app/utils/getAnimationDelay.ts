export default (order: number, unity?: string): string => {
    const {animation: {delay, delayUnity}} = useAppConfig()
    const animationDelay = order * 200 + delay;
    const animationDelayWithUnity = animationDelay + (unity || delayUnity)
    console.log(animationDelayWithUnity)
    return animationDelayWithUnity ;
}