<script lang="ts">
    import { slide } from 'svelte/transition';

    interface DrawerItemProps {
        element: string;
        route: string;
    }

    export let text: string;
    export let drawerContent: DrawerItemProps[];

    let isOpened: boolean;
    let rotate = 'rotate-0';
</script>

<div>
    <p
        on:click={() => {
            isOpened = !isOpened;
            rotate = isOpened ? '-rotate-180' : 'rotate-0';
        }}
        class="cursor-pointer font-prompt font-normal text-white flex"
    >
        {text}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style="fill: #fff"
            class="{rotate} duration-200"
            ><path
                d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
            /></svg
        >
    </p>
    {#if isOpened}
        <div
            id="drawer"
            class="absolute flex justify-center flex-col p-2 pl-4 pr-4 rounded-lg bg-original-dark"
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
