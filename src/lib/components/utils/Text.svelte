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

    export let fontSize: string;
</script>

<p class="font-prompt font-{fontWeight} text-white text-{fontSize}">
    <slot />
</p>
