<script>
	let yes = '';
</script>

<input type="text" bind:value={yes} />
<button
	on:click={async () => {
		const search = yes;
		yes = '';
		let answer = await fetch(`/api/${search.replaceAll(' ', '_')}`);
		let res = await answer.text();
		console.log(res);
	}}
	>보내기
</button>
