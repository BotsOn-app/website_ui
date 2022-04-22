<script lang="ts">
    type Colors =
        | 'bg-original-light-gray'
        | 'bg-original-purple'
        | 'bg-original-light-purple'
        | 'bg-original-gray';

    export let background: Colors;
    export let onClickRoute: string;
</script>

<button
    class="{background} text-white shadow-lg font-prompt p-3 pl-10 pr-10 rounded-xl mr-12"
>
    <a
        href={onClickRoute}
        class="text-2xl {background == 'bg-original-light-gray'
            ? 'font-'
            : 'font-bold'}"
    >
        <slot />
    </a>
</button>
