<script lang="ts">
    import { page } from '$app/stores';
    let id: string = $page.params.id

    let source: string = `https://myCustomUrl.com/${id}`

    const fetchExtensionData = async (url: string) => {
        return await fetch(url).then()
    }

</script>