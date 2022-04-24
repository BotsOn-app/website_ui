<script>
    import Button from '$lib/components/utils/Button.svelte';
    import Text from '$lib/components/utils/Text.svelte';
</script>

<section class="flex justify-between items-center leading-tight">
    <div class="ml-[12vw] w-[800px]">
        <h1 class="hero-section-title mb-10">
            Create your <br /> discord bot without knowing to code!
        </h1>
        <Text fontWeight="font-normal" fontSize="text-2xl"
            >Create a discord bot with an ingenious extension system, specially
            made by BotsOn.
        </Text>
        <div class="mt-12 flex">
            <Button background="bg-original-purple" onClickRoute="/downloads">
                Download
            </Button>
            <Button
                background="bg-original-light-gray"
                onClickRoute="/extensions"
            >
                All Extensions
            </Button>
        </div>
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
<section
    class="flex justify-around items-center w-full flex-row-reverse h-[450px]"
>
    <div>
        <Text fontSize="text-4xl" fontWeight="font-bold">
            Make a bot without bothering you with code
        </Text>
        <Text fontSize="text-2xl">
            We provide the ability to install extensions made by developers who
            have various objectives.
        </Text>
    </div>
    <img src="" alt="" />
</section>
<section class="flex justify-around items-center w-full flex-row h-[450px]">
    <div>
        <Text fontSize="text-4xl" fontWeight="font-bold">
            See your bots stats in live!
        </Text>
        <Text fontSize="text-2xl">
            BotsOn propose a stats page of your bot to know more about what the
            communities asks for!
        </Text>
    </div>
    <img src="" alt="" />
</section>

<style>
    .hero-section-title {
        font-family: 'Prompt';
        color: #ffffff;
        font-weight: 900;
        font-size: 64px;
    }
</style>
