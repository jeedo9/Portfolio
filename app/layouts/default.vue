
<script setup lang="ts">

import { navLinks } from '~/components/header/dataHeader';
import { navLinksMenu } from '~/components/header/menu/dataMenu';
import { footerLinks as links } from '~/components/footer/dataFooter';

</script>

<template>
    <div>
        <HeaderAppHeader :animate-shadow="true" :nav-links :nav-links-menu />
    <slot />
    <FooterAppFooter :links />

    </div>
    
</template>