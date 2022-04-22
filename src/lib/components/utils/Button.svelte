<script lang="ts">
    type Colors =
        | 'original-light-gray'
        | 'original-purple'
        | 'original-light-purple'
        | 'original-gray';

    export let background: Colors;
    export let onClick: any;
</script>

<button
    on:click={onClick}
    class="bg-{background} text-white shadow-md font-prompt font-bold"
>
    <slot />
</button>
