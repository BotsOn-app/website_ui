<script lang="ts">
    import { slide } from 'svelte/transition';

    interface DrawerItemProps {
        element: string;
        route: string;
    }
    let isOpened: boolean;

    export let drawerContent: DrawerItemProps[];
</script>

<div
    on:click={() => (isOpened = !isOpened)}
    class="hover:cursor-pointer relative"
>
    <img src="/user-icon.svg" alt="" />
    {#if isOpened}
        <div
            id="drawer"
            class="absolute flex justify-center flex-col p-2 pl-4 pr-4 rounded-lg bg-original-dark -left-4 top-10"
            transition:slide
        >
            {#each drawerContent as { element, route }}
                <a href={route} class="mt-1 font-prompt font-normal text-white"
                    >{element}</a
                >
            {/each}
        </div>
    {/if}
</div>
