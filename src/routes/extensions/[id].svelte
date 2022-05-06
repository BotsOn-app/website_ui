<script lang="ts">
    import { page } from '$app/stores';
    import Button from '$lib/components/utils/Button.svelte';
    let id: string = $page.params.id

    let source: string = `https://myCustomUrl.com/api/extensions${id}`

    

    const fetchExtensionData = async (url: string) => {
        return await fetch(url).then()
    }
</script>

{#await fetchExtensionData(source)}
    <!-- promise is pending. Need to handle empty data. -->
{:then hey}
<div class="bg-[url('{hey.color}')] h-[618.75px] w-full flex justify-center items-center pt-8">
    <h5>{}</h5>
    <p>{}</p>
</div>
<div>
    <div class="p-4">
        <div>
            <img src="/extensions/id/update-icons.svg" alt="">
            <p>Last Update</p>
        </div>
        <p></p>
    </div>
    <div>
        <p><span>By:</span>{}</p>
        <p><span>Version:</span>{}</p>
        <p><span>Verified:</span>{}</p>
        <Button>Download</Button>
    </div>
</div>
{/await}