<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	const multline = false;

	export let value = '';
	export let placeholder: boolean = false;
	export let required = true;

	const dispatch = createEventDispatcher();
	let plaintextEl: HTMLElement;
	let textareaEl: HTMLTextAreaElement;
	let editing = false;
	let editorText = '';

	function edit() {
		editing = true;
		if (!placeholder) editorText = value;
		
		let rect = plaintextEl.getBoundingClientRect();
		setTimeout(() => {
			textareaEl.style.width = Math.max(rect.width,160) + "px";
			textareaEl.style.height = Math.max(rect.height,60) + "px";
		});
	}

	function editorSave() {
		if (editorText != '' && editorText != value) {
			value = editorText;
			dispatch('submit', value);
		}
		editing = false;
	}

	function keydown(event: KeyboardEvent) {
		if (event.key == 'Escape') {
			event.preventDefault();
			editing = false;
		}
		if (event.key == 'Enter' && (event.ctrlKey || !multline)) {
			event.preventDefault();
			editorSave();
		}
	}

	function focus(element: HTMLElement) {
		element.focus();
	}
</script>

{#if editing}
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<form on:submit|preventDefault={editorSave} on:keydown={keydown}>
		<textarea bind:this={textareaEl} bind:value={editorText} on:blur={editorSave} on:keydown={keydown} {required} use:focus class="text-black resize" />
	</form>
{:else}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<span bind:this={plaintextEl} on:click|preventDefault={edit}>{value}</span>
{/if}
