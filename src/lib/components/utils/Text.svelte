<script lang="ts">
    let className: string = '';
    export { className as class };
</script>

<p class="font-prompt text-white {className}">
    <slot />
</p>
