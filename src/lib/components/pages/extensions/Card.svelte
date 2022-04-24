<script lang="ts">
    import Text from '$lib/components/utils/Text.svelte';

    export let name: string;
    export let description: string;
    export let bannerUrl: string = '/extensions-bg.svg';
    export let id: number;
</script>

<div>
    <div id="text">
        <div>
            <Text>{name}</Text>
            <img src="" alt="" />
        </div>
        <Text>{description}</Text>
    </div>
    <div id="round">
        <a href="/extensions/{id}"></a>
    </div>
    <div id="image" class="bg-[url('{bannerUrl}')]" />
</div>
