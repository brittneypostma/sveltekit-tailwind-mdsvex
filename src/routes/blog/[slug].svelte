<script context="module">
	import { slugFromPath } from '../../utils/slugFromPath'
	export async function load({ page }) {
		const modules = import.meta.glob(`./posts/*.{md,svx,svelte.md}`)
		let match
		for (const [path, resolver] of Object.entries(modules)) {
			if (slugFromPath(path) === page.params.slug) {
				match = [path, resolver]
				break
			}
		}
		if (!match) {
			return {
				status: 404
			}
		}
		const post = await match[1]()

		return {
			body: post.metadata
		}
	}
	// export async function load({ page }) {
	// 	const { slug } = page.params
	// 	// const url = 'posts' +
	// 	const post = await import.meta.glob('../posts/*.md')
	// 	return {
	// 		props: {
	// 			post: post.default
	// 		}
	// 	}
	// }

</script>

<script>
	export let post

</script>

<!-- <svelte:component this={post} /> -->
<!-- <slot /> -->
{@html post}
