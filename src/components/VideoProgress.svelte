<script lang="ts">
  import Slider from './Slider.svelte';
  import { genCssVars } from 'utils/dom';
  import { formatTime } from 'utils/string';
  import { PREVIEW_WIDTH_PX, PREVIEW_HEIGHT_PX, PREVIEW_OFFSET_X } from 'utils/constants';

  export let currentTime = 0;
  export let duration = 0;
  export let videoPath: string;

  let atlasSrc = '';
  let atlasTileX = 0;
  let atlasTileY = 0;
  let hovering = false;
  let hoveredTime = currentTime;
  let previewPosition = 0;
  let sliderElement: HTMLDivElement;

  function showPreview() {
    hovering = true;
  }

  function hidePreview() {
    hovering = false;
  }

  function movePreview(event: MouseEvent) {
    const { clientWidth, offsetLeft } = sliderElement;
    const rawPosition = Math.max(event.clientX - offsetLeft, 0);
    previewPosition = Math.min(
      Math.max(rawPosition - PREVIEW_OFFSET_X, 35),
      clientWidth - PREVIEW_WIDTH_PX - 35,
    );
    hoveredTime = (duration * rawPosition / clientWidth) | 0;
    const atlasPage = hoveredTime / 100 | 0;
    atlasSrc = `/api/atlas/${videoPath}?page=${atlasPage}`;
    const hoveredTileIndex = (hoveredTime % PREVIEW_WIDTH_PX) * PREVIEW_WIDTH_PX;
    const atlasWidth = PREVIEW_WIDTH_PX * 10;
    atlasTileX = hoveredTileIndex % atlasWidth;
    atlasTileY = (hoveredTileIndex / atlasWidth | 0) * PREVIEW_HEIGHT_PX;
  }
</script>

<Slider
  max={duration}
  thumbRadius="0.35em"
  width="100%"
  bind:value={currentTime}
  bind:element={sliderElement}
  on:change
  on:hover={showPreview}
  on:hoverend={hidePreview}
  on:pointermove={movePreview}
>
  {#if hovering}
    <div
      class="VideoProgress"
      style={genCssVars({
        atlasTileX: `${atlasTileX}px`,
        atlasTileY: `-${atlasTileY}px`,
        previewImage: `url("${atlasSrc}")`,
        previewPosition: `${previewPosition}px`,
        PREVIEW_WIDTH_PX: `${PREVIEW_WIDTH_PX}px`,
        PREVIEW_HEIGHT_PX: `${PREVIEW_HEIGHT_PX}px`,
      })}
    >
      <span class="VideoProgress__timestamp">
        {formatTime(hoveredTime)}
      </span>
    </div>
  {/if}
</Slider>

<style lang="scss">
  @use '../style/color';

  .VideoProgress {
    position: absolute;
    background: color.get(matte-black);
    background-image: var(--previewImage);
    background-position: var(--atlasTileX) var(--atlasTileY);
    left: var(--previewPosition);
    width: var(--PREVIEW_WIDTH_PX);
    height: var(--PREVIEW_HEIGHT_PX);
    bottom: calc(100% + 36px);
    border-radius: 4px;
    transform: scale(2);
    display: flex;
    justify-content: center;
  }

  .VideoProgress__timestamp {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.325rem;
    color: color.get(platinum);
    background: color.get-rgba(matte-black, 0.5);
    width: 100%;
  }
</style>
