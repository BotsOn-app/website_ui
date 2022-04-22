<script>
    import '../app.css';
    import Navbar from '$lib/components/Navbar/Navbar.svelte';
</script>

<main class="bg-original-dark">
    <Navbar />
    <slot />
</main>
