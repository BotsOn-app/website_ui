<script context="module" lang="ts">
    /** @ts-ignore */
    export const load = ({ status }) => {
        return {
            props: {
                status,
            },
        };
    };
</script>

<script lang="ts">
    export let status: number;
</script>

{#if status == 404}
    <p>PAGE 404</p>
{:else}
    Autre error?
{/if}
