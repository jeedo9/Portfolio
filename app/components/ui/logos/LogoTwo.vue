<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type {ClassName, HeadingTags} from '../../../types'

    interface LogoTwoProps extends ClassName {

        name?: string,
        as?: HeadingTags

    }

    const {className = '', as = 'h4', name = AUTHOR_NAME} = defineProps<LogoTwoProps>()


</script>
<template>
    
    <as :class="twMerge('logo', className)">
        {{ name }}
    </as>

</template>