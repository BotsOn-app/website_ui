<script lang="ts">
    import Text from '$lib/components/utils/Text.svelte';

    export let name: string;
    export let description: string;
    export let bannerUrl: string = '/extensions-bg.svg';
    export let id: number;
    export let isVerified: boolean;
</script>

<div
    class="w-[380px] h-[190px] bg-original-light-gray flex flex-row rounded-2xl overflow-hidden"
>
    <div id="text" class="w-4/5 p-8 pr-0">
        <div class="flex justify-center items-center flex-row w-fit mb-4">
            <Text class="text-2xl font-bold">{name}</Text>
            {#if isVerified}
                <!-- TODO: Create hover effect with pseudo element to display a little card with "Verified" displayed -->
                <img src="/extensions/verified-icon.svg" alt="" class="ml-2" />
            {/if}
        </div>
        <Text>{description}</Text>
    </div>
    <a
        href="/extensions/{id}"
        class="rounded-full bg-original-purple w-16 h-16 relative top-16 left-8 shrink-0 flex justify-center items-center hover-animation"
    >
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.11625 15.6163L8.88375 17.3838L17.2675 9.00001L8.88375 0.616257L7.11625 2.38376L12.4825 7.75001H0.5V10.25H12.4825L7.11625 15.6163Z"
                fill="white"
            />
        </svg>
    </a>
    <div
        id="image"
        class="bg-[url('{bannerUrl}')] w-1/5 h-full bg-cover bg-center"
    />
</div>

<style>
    .hover-animation:hover {
        animation: 0.3s animate;
    }

    @keyframes animate {
        0% {
            padding-left: 0;
        }
        50% {
            padding-left: 8px;
        }
        100% {
            padding-left: 0;
        }
    }
</style>
