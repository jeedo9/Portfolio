
<script setup lang="ts">
// import type { NuxtLinkProps } from '#app';
import { twMerge } from 'tailwind-merge';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'vue';
import Ripple from '../Ripple.vue';



    type Shared = {showRipple?: boolean}
    type Anchor =  /* Partial<NuxtLinkProps> */ & {tag: 'link'} &  /* @vue-ignore */ Partial<AnchorHTMLAttributes>
    type Btn =   {tag?: 'btn'}  & /* @vue-ignore */ Partial<ButtonHTMLAttributes> 
    
 
    export type BtnProps = (Btn | Anchor) & Shared
   type Rest = Record<string, unknown>


   const props = defineProps<BtnProps>()

    const { showRipple,onClick,tag, tabindex = 0} = props



 
    const restLink = ref<Rest>({})
const restBtn = ref<Rest>({})


   const isBtn = (value: BtnProps): value is Btn => {
        return value.tag === 'btn' || !value.tag
   }
 


   watch(props, (value) => {

    
    if (isBtn(value)) {
    const { showRipple,onClick,tag, tabindex,...rest} = value
    restBtn.value = rest

   }
   else {
    const { showRipple,onClick,tag, tabindex,...rest} = value
    restLink.value = rest
   }

   }, {immediate: true})

   const refBtn = useTemplateRef('btn')
   const refLink = useTemplateRef('link')
   const ripple = useTemplateRef('ripple')

   defineExpose({
    refBtn,
    refLink
   })


   const handle = (e: MouseEvent) => {

    onClick?.(e)

    if (!ripple.value?.ripple || !showRipple) return;

const rect = refBtn.value?.getBoundingClientRect() || refLink.value?.$el.getBoundingClientRect();

if (!rect) return;

const top = e.clientY - rect.top;
const left = e.clientX - rect.left;


ripple.value.ripple.style.cssText = `top: ${top}px; left: ${left}px;`

ripple.value.ripple.className += ' animate-ripple'

}


const classses = [twMerge(`relative sm:text-base text-sm border-accent border-2 tracking-tight border-double px-3.5 py-1 rounded-md focus-visible:bg-accent-light hover:bg-accent-light bg-clip-padding transition-[background-color]`, useAttrs().class as string), {'overflow-hidden' : showRipple}]

</script>

<template>

    <NuxtLink v-if="tag === 'link'" ref="link" :class="classses" :tabindex v-bind="restLink"   @click="handle">

        <Ripple v-if="showRipple" ref="ripple" />
        <slot />
        
    </NuxtLink>

    <button v-else ref="btn" :class="classses"  v-bind="restBtn" :tabindex  @click="handle">

        <Ripple v-if="showRipple" ref="ripple" />
        
        <slot />
        </button>
</template>