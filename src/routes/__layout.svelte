<script lang="ts">
    import '../app.css';
    import Navbar from '$lib/components/Navbar/Navbar.svelte';
    import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<main class="bg-original-dark">
    <Navbar />
    <slot />
    <Footer />
</main>
