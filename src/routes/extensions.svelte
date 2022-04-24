<script lang="ts">
    import Card from '$lib/components/pages/extensions/Card.svelte';
    import Grid from '$lib/components/pages/extensions/Grid.svelte';
    import Text from '$lib/components/utils/Text.svelte';

    const database = [
        {
            id: 1,
            data: {
                bannerUrl: 'https://giphy.com/helloworld.png',
                name: 'VoiceTemp',
                description:
                    'This is a base description that says nothing but whatever: voicetemp',
            },
        },
        {
            id: 2,
            data: {
                bannerUrl: 'https://giphy.com/helloworld.png',
                name: 'Music',
                description:
                    'This is a base description that says nothing but whatever: music',
            },
        },
        {
            id: 3,
            data: {
                bannerUrl: 'https://giphy.com/helloworld.png',
                name: 'Fake',
                description:
                    'This is a base description that says nothing but whatever: fake',
            },
        },
    ];
</script>

<section>
    <div
        class="bg-[url('/extensions-bg.svg')] flex justify-center items-center w-full bg-cover bg-no-repeat h-[618.75px]"
    >
        <Text fontSize="text-6xl" fontWeight="font-bold">
            Choose the extensions<br />that best suit your bot
        </Text>
    </div>
</section>
<section id="trends">
    <div class="flex flex-row">
        <img src="" alt="" />
        <Text>Trends :</Text>
    </div>
    <Grid>
        {#each database as db}
            <Card
                name={db.data.name}
                description={db.data.description}
                bannerUrl={db.data.bannerUrl}
                id={db.id}
            />
        {/each}
    </Grid>
</section>
<section id="all">
    <div class="flex flex-row">
        <img src="" alt="" />
        <Text>All Extensions :</Text>
    </div>
    <Grid>
        {#each database as db}
            <Card
                name={db.data.name}
                description={db.data.description}
                bannerUrl={db.data.bannerUrl}
                id={db.id}
            />
        {/each}
    </Grid>
</section>
