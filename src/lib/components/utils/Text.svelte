<script lang="ts">
    export let fontWeight: FontWeight = 'font-medium';
    export let extendClass: string = "";

    type FontWeight =
        | 'font-thin'
        | 'font-extralight'
        | 'font-light'
        | 'font-normal'
        | 'font-medium'
        | 'font-semibold'
        | 'font-bold'
        | 'font-extrabold'
        | 'font-black';

    export let fontSize: string = '';
</script>

<p class="font-prompt {fontWeight} text-white {fontSize} {extendClass}">
    <slot />
</p>
