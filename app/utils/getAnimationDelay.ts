import { DEFAULT_DELAY, DEFAULT_DELAY_UNITY } from "#imports";

export default (order: number, unity?: string): string => {
    const animationDelay = order * 200 + DEFAULT_DELAY;
    const animationDelayWithUnity = animationDelay + (unity || DEFAULT_DELAY_UNITY)
    console.log(animationDelayWithUnity)
    return animationDelayWithUnity ;
}