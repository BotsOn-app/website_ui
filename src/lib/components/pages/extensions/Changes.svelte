<script lang="ts">
import Text from "$lib/components/utils/Text.svelte";
export let title: string;
export let content: string;
export let version: string;
</script>

<div
	class="w-full h-fit flex justify-center items-center flex-col first:border-0 last:mb-0 border-b border-gray-400 mt-6 last:mt-0 pb-4">
	<!--version and title-->
	<div class="w-full flex justify-between items-center mb-2">
		<Text class="font-bold text-xl">{title}</Text>
		<Text class="text-gray-400">{version}</Text>
	</div>
	<!--Actual content of the changes-->
	<div class="flex justify-start w-full">
		<Text>{content}</Text>
	</div>
</div>
