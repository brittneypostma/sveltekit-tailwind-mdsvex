<script context="module">
	export const prerender = true

	const posts = Object.entries(import.meta.globEager('./posts/**/*.md')).map(
		([, post]) => post.metadata
	)

	export async function load() {
		return {
			props: {
				posts
			}
		}
	}

</script>

<script>
	export let posts
	console.log(posts)

</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section>
	<h1>Blog</h1>
	<ul class="m-6 space-y-2">
		{#each posts as post (post.id)}
			<li>
				<h2 class="text-2xl font-normal"><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
			</li>
		{/each}
	</ul>
</section>
