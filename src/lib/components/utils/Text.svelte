<script lang="ts">
    export let weight: FontWeight = 'medium';

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

    export let size: string = '';
</script>

<p class="font-prompt font-{weight} text-white {size}">
    <slot />
</p>
