<script context="module" lang="ts">
    /** @ts-ignore */
    export const load = ({ status, error }) => {
        return {
            props: {
                status: status,
                message: error.message,
            },
        };
    };
</script>

<script lang="ts">
    import Text from '$lib/components/utils/Text.svelte';

    export let status: number;
    export let message: string;
</script>

<div id="error">
    <Text>Error <span>{status}</span></Text>
    <!-- <Text>{message}</Text> -->
</div>
