<script lang="ts">
    export let fontWeight: FontWeight;

    type FontWeight =
        | 'thin'
        | 'extralight'
        | 'light'
        | 'normal'
        | 'medium'
        | 'semibold'
        | 'bold'
        | 'extrabold'
        | 'black';
</script>

<p class="font-prompt font-{fontWeight} text-white">
    <slot />
</p>
