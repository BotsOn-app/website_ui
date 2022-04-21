<script lang="ts">
    export let text: string;
    export let drawerContent: { element: string; route: string }[];

    let isOpened: boolean;
</script>

<div>
    <p
        on:click={() => (isOpened = !isOpened)}
        class="cursor-pointer font-prompt font-normal text-white"
    >
        {text}
    </p>
    {#if isOpened}
        <div
            id="drawer"
            class="absolute flex justify-center flex-col p-2 pl-4 pr-4 rounded-lg bg-original-dark"
        >
            {#each drawerContent as { element, route }}
                <a href={route} class="mt-1 font-prompt font-normal text-white"
                    >{element}</a
                >
            {/each}
        </div>
    {/if}
</div>
