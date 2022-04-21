<script lang="ts">
    export let text: string;
    export let drawerContent: { element: string; route: string }[];

    let isOpened: boolean;
</script>

<div>
    <p on:click={() => (isOpened = !isOpened)} class="cursor-pointer">{text}</p>
    {#if isOpened}
        <div id="drawer" class="">
            {#each drawerContent as { element, route }}
                <a href={route}>{element}</a>
            {/each}}
        </div>
    {/if}
</div>
