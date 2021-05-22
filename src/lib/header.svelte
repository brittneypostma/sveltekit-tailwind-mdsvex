<script>
	import { page } from '$app/stores'

</script>

<header class="flex justify-between">
	<div class="left">
		<img class="w-10" src="/svelte-logo.svg" alt="svelte logo" />
	</div>
	<nav class="bg-basics-050 py-4 px-8 rounded-bl-3xl">
		<ul class="flex content-between gap-4">
			<li class:active={$page.path === '/'}>
				<a sveltekit:prefetch href="/">Home</a>
			</li>
			<li class:active={$page.path === '/docs'}>
				<a sveltekit:prefetch href="/docs">Docs</a>
			</li>
			<li class:active={$page.path === '/blog'}>
				<a sveltekit:prefetch href="/blog">Blog</a>
			</li>
		</ul>
	</nav>
</header>
