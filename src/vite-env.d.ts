/// <reference types="svelte" />
/// <reference types="vite/client" />

declare interface FileMetadata {
  duration_ms: number;
}

declare interface FileInfo {
  api_href: string;
  file_type: string;
  href: string;
  is_folder: boolean;
  name: string;
  mime: string;
}

declare interface Element {
  msRequestFullscreen: Element['requestFullscreen'];
  mozRequestFullscreen: Element['requestFullscreen'];
  webkitRequestFullscreen: Element['requestFullscreen'];
}

declare interface Document {
  msExitFullscreen: Document['exitFullscreen'];
  msFullscreenElement: Document['fullscreenElement'];
  msFullscreenEnabled: Document['fullscreenEnabled'];
  mozCancelFullscreen: Document['exitFullscreen'];
  mozFullscreenElement: Document['fullscreenElement'];
  mozFullscreenEnabled: Document['fullscreenEnabled'];
  webkitExitFullscreen: Document['exitFullscreen'];
  webkitFullscreenElement: Document['fullscreenElement'];
  webkitFullscreenEnabled: Document['fullscreenEnabled'];
}

declare interface HTMLVideoElement {
  webkitDisplayingFullscreen: boolean;
  webkitExitFullscreen: Document['exitFullscreen'];
  webkitEnterFullscreen: Element['requestFullscreen'];
  webkitSupportsFullscreen: boolean;
  webkitWirelessVideoPlaybackDisabled: boolean;
}

declare namespace svelte.JSX {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    onglobalkeydown?: (e: CustomEvent<string>) => void;
    onhover?: CompositionEventHandler<T>;
    onhoverend?: CompositionEventHandler<T>;
  }
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}
