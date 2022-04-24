<script lang="ts">
    import Logo from '../utils/Logo.svelte';
    import NavigationList from '$lib/components/Navbar/NavigationList.svelte';
    import Item from './Item.svelte';
    import DrawerItem from './DrawerItem.svelte';

    let routes: { element: string; route: string }[] = [
        { element: 'Linux', route: '/downloads/linux' },
        { element: 'Windows', route: '/downloads/windows' },
        { element: 'MacOS', route: '/downloads/macos' },
    ];
</script>

<div class="flex justify-center items-center w-full absolute">
    <div class="flex justify-between items-center w-4/5">
        <Logo />
        <NavigationList>
            <DrawerItem text="Downloads" drawerContent={routes} />
            <Item text="Extensions" to="/extensions" />
            <Item text="Support Server" to="discord.com/" />
            <Item text="Docs" to="/docs" />
        </NavigationList>
    </div>
</div>
