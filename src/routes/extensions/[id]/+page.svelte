<script lang="ts">
	import Changes from "$lib/components/pages/extensions/Changes.svelte";
	import Button from "$lib/components/utils/Button.svelte";
	import Text from "$lib/components/utils/Text.svelte";
	export let data;
	const { extension } = data;
</script>

<div
	class="background-holder bg-[url('{extension.data.banner.url}')]
				h-[500px] w-full flex justify-center items-center pt-16 flex-col bg-cover 
				after:relative after:content-[''] after:bottom-0 after:bg-gradient-to-t after:from-original-dark after:to-transparent after:w-full after:h-full">
	<div class="h-full w-full flex justify-center items-center flex-col mt-16">
		<Text class="font-extrabold text-6xl mb-10">{extension.data.name}</Text>
		<Text class="font-semibold text-3xl">{extension.data.description}</Text>
	</div>
</div>
<div class="flex justify-center items-center pt-32">
	<div class="w-[60%] flex justify-around items-start">
		<div
			class="p-8 border border-original-light-gray rounded-xl bg-original-gray w-full mr-8">
			<div class="flex flex-row items-center justify-start w-full mb-4">
				<img src="/extensions/id/update-icons.svg" alt="" />
				<Text class="ml-2 text-2xl">Last Update</Text>
			</div>
			<div class="first:border-b-0 flex flex-col-reverse">
				{#each extension.data.changes as change}
					<Changes
						content={change.content}
						title={change.title}
						version={change.version} />
				{/each}
			</div>
		</div>
		<div
			class="p-6 border border-original-light-gray rounded-xl bg-original-gray">
			<Text class="font-thin text-2xl mb-4"
				><span class="font-bold">By : </span>
				{extension.author.name}
			</Text>
			<Text class="font-thin text-2xl mb-4">
				<span class="font-bold">Version :</span>{extension.version}
			</Text>
			<Text class="font-thin text-2xl mb-4">
				<span class="font-bold">Verified : </span>{extension.data.verified
					? "True"
					: "False"}
			</Text>
			<div class="w-full flex justify-center items-center mt-4">
				<Button type="primary" to="/downloads/" class="p-2 m-0"
					>Download</Button>
			</div>
		</div>
	</div>
</div>
