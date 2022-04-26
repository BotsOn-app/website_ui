<script lang="ts">
    import Text from '$lib/components/utils/Text.svelte';

    export let name: string;
    export let description: string;
    export let bannerUrl: string = '/extensions-bg.svg';
    export let id: number;
</script>

<div class="w-[358px] h-[190px] rounded-lg">
    <div id="text">
        <div>
            <Text>{name}</Text>
            <img src="" alt="" />
        </div>
        <Text>{description}</Text>
    </div>
    <div id="round">
        <!-- svelte-ignore a11y-missing-content -->
        <a href="/extensions/{id}" class="rounded-full bg-original-purple w-16 h-16 absolute" />
    </div>
    <div id="image" class="bg-[url('{bannerUrl}')]" />
</div>
