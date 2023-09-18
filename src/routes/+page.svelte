<script lang="ts">
	import { browser } from '$app/environment';
	if (browser) {
        setTimeout(() => window.location.assign('en/simple/'), 200);
	}
</script>

<p>You'll be redirected</p>
