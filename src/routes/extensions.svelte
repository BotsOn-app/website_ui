<script lang="ts">
    import Card from '$lib/components/pages/extensions/Card.svelte';
    import Grid from '$lib/components/pages/extensions/Grid.svelte';
    import Text from '$lib/components/utils/Text.svelte';

    const database = [
        {
            id: 1,
            data: {
                bannerUrl: '/extensions-bg.svg',
                name: 'VoiceTemp',
                description:
                    'This is a base description that says nothing but whatever: voicetemp',
                verified: true,
            },
        },
        {
            id: 2,
            data: {
                bannerUrl: '/extensions-bg.svg',
                name: 'Music',
                description:
                    'This is a base description that says nothing but whatever: music',
                verified: false,
            },
        },
        {
            id: 3,
            data: {
                bannerUrl: '/extensions-bg.svg',
                name: 'Fake',
                description:
                    'This is a base description that says nothing but whatever: fake',
                verified: false,
            },
        },
    ];
</script>

<section>
    <div
        class="bg-[url('/extensions-bg.svg')] flex justify-center items-center w-full bg-cover bg-no-repeat h-[618.75px]"
    >
        <Text size="6xl" weight="bold">
            Choose the extensions<br />that best suit your bot
        </Text>
    </div>
</section>
<main class="flex justify-center items-center flex-col">
    {#if database.length != 0}
        <section id="trends" class="w-fit mt-16">
            <div class="flex flex-row justify-center items-center w-fit mb-4">
                <img
                    src="/trophy-icon.svg"
                    alt="Trophy icon, standing for the trends"
                />
                <Text size="5xl" weight="bold">Trends :</Text>
            </div>
            <Grid>
                {#each database as db}
                    <Card
                        name={db.data.name}
                        description={db.data.description}
                        bannerUrl={db.data.bannerUrl}
                        id={db.id}
                        isVerified={db.data.verified}
                    />
                {/each}
            </Grid>
        </section>
    {:else}
        <div class="w-full flex justify-center items-center h-8">
            <p>Loading data...</p>
        </div>
    {/if}
    {#if database.length != 0}
        <section id="all" class="w-fit mt-20">
            <div class="flex flex-row justify-center items-center w-fit mb-4">
                <img
                    src="/puzzle-icon.svg"
                    alt="Puzzle icon, standing for all the extensions"
                    class="mr-8"
                />
                <Text size="text-5xl" weight="bold">All Extensions :</Text>
            </div>
            <Grid>
                {#each database as db}
                    <Card
                        name={db.data.name}
                        description={db.data.description}
                        bannerUrl={db.data.bannerUrl}
                        id={db.id}
                        isVerified={db.data.verified}
                    />
                {/each}
            </Grid>
        </section>
    {:else}
        <div class="w-full flex justify-center items-center h-8">
            <p>Nothing to show there !</p>
        </div>
    {/if}
</main>
