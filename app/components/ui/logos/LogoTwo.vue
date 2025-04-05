<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type {HeadingTags} from '../../../types'

    interface LogoTwoProps  {

        name?: string,
        as?: HeadingTags

    }

    const { as = 'h4', name = AUTHOR_NAME} = defineProps<LogoTwoProps>()


</script>
<template>
    
    <NuxtLink href="#">

        <as role="button" :class="twMerge('logo', $attrs.class as string)">
    
            {{ name }}
        </as>

        </NuxtLink>
  

</template>