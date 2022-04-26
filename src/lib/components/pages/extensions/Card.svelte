<script lang="ts">
    import Text from '$lib/components/utils/Text.svelte';

    export let name: string;
    export let description: string;
    export let bannerUrl: string = '/extensions-bg.svg';
    export let id: number;
    export let isVerified: boolean;
</script>

<div class="w-[380px] h-[190px] bg-original-light-gray flex flex-row rounded-2xl overflow-hidden">
    <div id="text" class="w-4/5 p-8 pr-0">
        <div class="flex justify-center items-center flex-row w-fit mb-4">
            <Text fontWeight='font-bold' fontSize='text-2xl'>{name}</Text>
            {#if isVerified}
                <img src="/verified-icon.svg" alt="" class="ml-2" />
            {/if}
        </div>
        <Text>{description}</Text>
    </div>
    <a href="/extensions/{id}" class="rounded-full bg-original-purple w-16 h-16 relative top-16 left-6" />
    <div id="image" class="bg-[url('{bannerUrl}')] w-1/5 h-full bg-cover bg-center " />
</div>
