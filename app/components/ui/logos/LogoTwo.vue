<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type {HeadingTags} from '../../../types'

    interface LogoTwoProps  {

        name?: string,
        as?: HeadingTags

    }

    const { as = 'h4', name = AUTHOR_NAME} = defineProps<LogoTwoProps>()


    const Comp = as

</script>
<template>
    
    <NuxtLink href="#">

        <Comp role="button" :class="twMerge('logo', $attrs.class as string)">
    
            {{ name }}
        </Comp>

        </NuxtLink>
  

</template>