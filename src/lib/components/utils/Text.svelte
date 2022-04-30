<script lang="ts">
    export let weight: FontWeight = 'medium';
    export let extendClass: string = '';

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

<p class="font-prompt font-{weight} text-white text-{size} {extendClass}">
    <slot />
</p>
