<style>
	.blob {
		box-shadow: 0 0 15rem #ff6bfa;
	}

	#social > img {
		width: 4rem;
		height: 4rem;
	}
</style>

<script lang="ts">
	import Text from "$lib/components/utils/Text.svelte";
	import { page } from "$app/stores";
</script>

<div class="bg-original-dark h-screen w-full">
	<div class="flex justify-center items-center w-full h-full flex-col">
		<Text class="text-9xl font-bold"
			>Error <span class="font-black">{$page.error?.name}</span></Text>
		<Text class="font-semibold text-6xl">Service in maintenance</Text>
	</div>
	<div class="absolute bottom-0 right-0">
		<div
			id="social"
			class="absolute bottom-0 right-0 mb-8 mr-8 flex justify-around items-center w-96">
			<img src="/social/twitter-icon.svg" alt="Twitter icon" />
			<img src="/social/insta-icon.svg" alt="Instagram icon" />
			<img src="/social/discord-icon.svg" alt="Discord Icon" />
			<img src="/social/github-icon.svg" alt=" GitHub Icon" />
		</div>
		<svg
			width="1116"
			height="482"
			viewBox="0 0 1116 482"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g filter="url(#filter0_d_301_298)">
				<path
					class="blob"
					d="M163.036 472.986C225.114 341.835 747.732 447.5 1052.35 217.054C1356.97 -13.3905 1269.57 463.482 1155.58 582.898C1027.6 716.963 803.981 613.944 585.316 582.898C413.556 558.512 100.957 604.137 163.036 472.986Z"
					fill="#23272B" />
			</g>
			<defs>
				<filter
					id="filter0_d_301_298"
					x="0"
					y="0"
					width="1406"
					height="795"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB">
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha" />
					<feOffset dx="-5" dy="-5" />
					<feGaussianBlur stdDeviation="75" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 1 0 0 0 0 0.419608 0 0 0 0 0.980392 0 0 0 0.25 0" />
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_301_298" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_301_298"
						result="shape" />
				</filter>
			</defs>
		</svg>
	</div>
</div>
