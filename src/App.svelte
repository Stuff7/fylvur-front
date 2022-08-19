<script lang="ts">
  import { onMount } from 'svelte';
  import router from 'store/router';
  import preferences, { initPreferencesStore } from 'store/preferences';
  import Explorer from 'components/Explorer.svelte';
  import Navbar from 'components/Navbar.svelte';
  import Video from 'components/Video.svelte';
  import Error404 from 'components/error/Error404.svelte';
  import { fetchFile } from 'api';

  export let files: FileInfo[] | FileInfo | null = [];

  onMount(() => {
    initPreferencesStore();
    rootElement = document.querySelector('html');
  });

  let rootElement: HTMLHtmlElement | null = null;

  $: if (rootElement && preferences) {
    rootElement.dataset.theme = $preferences.theme;
  }
  $: {
    const url_path = $router.slice(1);
    fetchFile(url_path).then(({ status, data }) => {
      if (status === 404) {
        files = null;
      } else {
        files = data;
      }
    });
  }
</script>

<Navbar />
{#if !files}
  <Error404 />
{:else if files instanceof Array}
  <Explorer {files} />
{:else if files.file_type === 'video' || files.file_type === 'audio'}
  <Video src="/file{files.href}" type={files.mime} />
{:else}
  <img src="/file{files.href}" alt={files.name} />
{/if}
