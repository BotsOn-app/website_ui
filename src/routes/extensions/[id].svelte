<script lang="ts">
    import { page } from '$app/stores';
    import Text from '$lib/components/utils/Text.svelte';
    import { onMount } from 'svelte';
    let id: string = $page.params.id;

    let source: string = `http://localhost:8000/api/extensions/${id}`;

    let promise: Promise<any>;

    onMount(async () => {
        const res = await fetch(source);
        promise = res.json();
        console.log(promise);
    });
</script>

{#await promise then extension}
    {#if extension !== undefined}
        <div
            class="bg-[url('{extension.data.banner.url}')]
        h-[618.75px] w-full flex justify-center items-center pt-8 flex-col"
        >
            <Text>{extension.data.name}</Text>
            <Text>{extension.data.description}</Text>
        </div>
        <div>
            <div class="p-4">
                <div class="flex flex-row items-center justify-center">
                    <img src="/extensions/id/update-icons.svg" alt="" />
                    <Text class="ml-2">Last Update</Text>
                </div>
                <p />
            </div>
            <div>
                <p><span>By:</span>{extension.author.name}</p>
                <p><span>Version:</span>{extension.version}</p>
                <p>
                    <span>Verified:</span>{extension.verified
                        ? 'True'
                        : 'False'}
                </p>
                <!-- <Button>Download</Button> -->
            </div>
        </div>
    {/if}
{/await}
