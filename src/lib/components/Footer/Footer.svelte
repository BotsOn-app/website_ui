<script lang="ts">
    import Text from '../utils/Text.svelte';
</script>

<footer class="flex justify-center items-center">
    <div class="w-4/5 flex items-center justify-between h-96">
        <div>
            <Text class="font-extrabold text-5xl"
                >BotsOn, the<br />customizable bot</Text
            >
            <div class="flex flex-row justify-around w-64 mt-8" id="social">
                <img src="/social/twitter-icon.svg" alt="Twitter icon" />
                <img src="/social/insta-icon.svg" alt="Instagram icon" />
                <img src="/social/discord-icon.svg" alt="Discord Icon" />
                <img src="/social/figma-icon.svg" alt="Figma Icon" />
                <img src="/social/github-icon.svg" alt=" GitHub Icon" />
            </div>
        </div>
        <div>
            <Text class="font-medium">Useful Links :</Text>
            <ul class="mt-2 list-disc ml-4">
                <li>General Conditions</li>
                <li>Support Server</li>
                <li>Documentation</li>
                <li>Extensions</li>
            </ul>
        </div>
    </div>
</footer>

<style>
    li {
        color: white;
        font-weight: lighter;
    }

    #social > img {
        cursor: pointer;
    }
</style>
