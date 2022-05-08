<script lang="ts">
    let color = {
        primary: 'bg-original-purple',
        secondary: 'bg-original-gray',
        lightPrimary: 'bg-original-light-purple',
        lightSecondary: 'bg-original-light-gray',
    };

    type Type = 'primary' | 'secondary' | 'lightPrimary' | 'lightSecondary';

    export let type: Type;
    export let to: string;

    let background = color[type];
</script>

<button
    class="{background} text-white shadow-lg font-prompt p-3 pl-10 pr-10 rounded-xl mr-12"
>
    <a
        href={to}
        class="text-2xl {background == 'bg-original-light-gray'
            ? 'font-'
            : 'font-bold'}"
    >
        <slot />
    </a>
</button>
