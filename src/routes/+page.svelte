

<script>
    import Button from '$lib/components/utils/Button.svelte';
    import Text from '$lib/components/utils/Text.svelte';
</script>

<section class="flex justify-between items-center leading-tight pt-16">
    <div class="ml-[12vw] w-[800px]">
        <h1 class="hero-section-title mb-10">
            Create your <br /> discord bot without knowing to code!
        </h1>
        <Text class="text-2xl font-normal"
            >Create a discord bot with an ingenious extension system, specially
            made by BotsOn.
        </Text>
        <div class="mt-12 flex">
            <Button type="primary" to="/downloads">Download</Button>
            <Button type="lightSecondary" to="/extensions">
                All Extensions
            </Button>
        </div>
    </div>
    <img src="/index/hero-rightpart.svg" alt="" class="" />
</section>
<section class="flex justify-center items-center h-36 w-full">
    <div class="flex justify-around items-center w-3/5 h-full">
        <div class="flex justify-center items-center flex-col">
            <Text class="text-4xl font-bold">200</Text>
            <Text class="text-2xl">Bots created</Text>
        </div>
        <div class="flex justify-center items-center flex-col">
            <Text class="text-4xl font-bold">100</Text>
            <Text class="text-2xl">Downloads</Text>
        </div>
        <div class="flex justify-center items-center flex-col">
            <Text class="text-4xl font-bold">14</Text>
            <Text class="text-2xl">Extensions</Text>
        </div>
    </div>
</section>
<section class="flex justify-center items-center w-full h-[450px]">
    <div
        class="flex justify-around items-center w-[80%] flex-row-reverse h-full"
    >
        <div>
            <Text class="text-4xl font-bold mb-4">
                Make a bot<br />without bothering<br />you with code
            </Text>
            <Text class="text-2xl">
                We provide the ability to install<br />extensions made by
                developers who<br />
                have various objectives.
            </Text>
        </div>
        <img src="/index/top-illu.svg" alt="" />
    </div>
</section>
<section class="w-full h-[450px] flex justify-center items-center">
    <div class="flex justify-around items-center w-[80%] flex-row">
        <div>
            <Text class="text-4xl font-bold mb-4">
                See your bots <br />stats in live!
            </Text>
            <Text class="text-2xl">
                BotsOn propose a stats page of your bot<br />to know more about
                what the<br />
                communities asks for!
            </Text>
        </div>
        <img src="/index/bottom-illu.svg" alt="" />
    </div>
</section>

<style>
    .hero-section-title {
        font-family: 'Prompt';
        color: #ffffff;
        font-weight: 900;
        font-size: 64px;
    }
</style>
