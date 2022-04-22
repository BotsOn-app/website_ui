<script>
    import Text from '$lib/components/utils/Text.svelte';
</script>

<section class="flex justify-between items-center">
    <div class="ml-[12vw]">
        <h1 class="hero-section-title mb-10">
            Create your<br /> discord bot without<br /> knowing to code!
        </h1>
        <Text fontWeight="normal" fontSize="7xl"
            >Create a discord bot with an ingenious extension system, specially
            made by BotsOn</Text
        >
    </div>
    <img src="/hero-rightpart.svg" alt="" class="" />
</section>
<section class="flex justify-center items-center h-36 w-full">
    <div class="flex justify-around items-center w-3/5 h-full">
        <div class="flex justify-center items-center flex-col">
            <Text fontWeight="font-bold" fontSize="text-4xl">200</Text>
            <Text fontSize="text-2xl">Bots created</Text>
        </div>
        <div class="flex justify-center items-center flex-col">
            <Text fontWeight="font-bold" fontSize="text-4xl">100</Text>
            <Text fontSize="text-2xl">Downloads</Text>
        </div>
        <div class="flex justify-center items-center flex-col">
            <Text fontWeight="font-bold" fontSize="text-4xl">14</Text>
            <Text fontSize="text-2xl">Extensions</Text>
        </div>
    </div>
</section>
<section />

<style>
    .hero-section-title {
        font-family: 'Prompt';
        color: #ffffff;
        font-weight: 900;
        font-size: 64px;
    }
</style>
