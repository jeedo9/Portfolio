<script setup lang="ts">

const torch = useTemplateRef('torch')



onMounted(() => {

    const handleMouseMove = (e: MouseEvent) => {
  if (torch.value) torch.value.style.cssText = `top: ${e.clientY}px; left: ${e.clientX}px`
}
document.onmousemove = handleMouseMove

})

</script>

<template>
      <span ref="torch" style="top: 5%; left: 90%;" class="bg-radial from-blue-700/20  rounded-full  size-[50%] inline-block fixed -z-[1000] -translate-x-1/2 -translate-y-1/2"></span>

</template>