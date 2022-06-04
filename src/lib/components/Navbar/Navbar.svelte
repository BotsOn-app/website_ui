<script lang="ts">
	import Logo from "../utils/Logo.svelte";
	import NavigationList from "$lib/components/Navbar/NavigationList.svelte";
	import Item from "./Item.svelte";
	import DrawerItem from "./DrawerItem.svelte";
	import UserMenu from "./UserMenu.svelte";

	const discordAuthClientId = "903969250409082880";
	const discordAuthRedirectUri = encodeURIComponent(
		"http://localhost:8000/api/auth/callback"
	);
	const discordAuthscopes = ["identify", "email"];

	const downloads: { element: string; route: string }[] = [
		{ element: "Linux", route: "/downloads/linux" },
		{ element: "Windows", route: "/downloads/windows" },
		{ element: "MacOS", route: "/downloads/macos" },
	];

	const userMenu: { element: string; route: string }[] = [
		{
			element: "Connect",
			route: `https://discord.com/api/oauth2/authorize?client_id=${discordAuthClientId}&redirect_uri=${discordAuthRedirectUri}&response_type=code&scope=${discordAuthscopes.join(
				"%20"
			)}`,
		},
		{ element: "Support", route: "https://discord.gg/SFuxrG3Y2F" },
	];
</script>

<div class="flex justify-center items-center w-full absolute">
	<div class="flex justify-between items-center w-4/5">
		<a href="/"><Logo /></a>
		<NavigationList>
			<Item text="Extensions" to="/extensions" />
			<Item text="Docs" to="/docs" />
			<DrawerItem text="Downloads" drawerContent={downloads} />
			<UserMenu drawerContent={userMenu} />
		</NavigationList>
	</div>
</div>
