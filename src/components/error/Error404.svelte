<script lang="ts">
  import Rocket from 'components/icons/Rocket.svelte';
  import internalLink from 'actions/internalLink';
</script>

<div class="Error404">
  <a href="/" class="Error404__home" use:internalLink>
    <Rocket />
  </a>
  <div class="Error404__status-code">
    <span class="Error404__text">PAGE NOT FOUND</span>
    <h1 class="Error404__number">4<span />4</h1>
    <p class="Error404__message">
      Looks like you're lost — maybe this rocket can take you home?
    </p>
  </div>
</div>

<style lang="scss">
  @use '../../style/color';

  .Error404 {
    margin: 0 auto;
    align-items: center;
    display: flex;
    padding: 1rem;
    width: 100%;
    height: 100%;
    justify-content: center;
    text-align: center;
    background: color.get(root-bg);
    position: relative;
    &::after {
      content: "";
      border: 2px solid rgba(var(--root-text-color-rgb),.1);
      position: absolute;
      width: calc(100% - 2rem);
      height: calc(100% - 2rem);
      border-radius: 1rem;
    }
  }

  .Error404__home {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translateX(-62%) translateY(-56%) rotate(-22deg);
    overflow: visible;
    & > :global(*) {
      pointer-events: none;
    }
  }

  .Error404__status-code {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min-content;
  }
  
  .Error404__number {
    display: flex;
    color: color.get(root-text-color);
    font-size: 10rem;
    letter-spacing: .15em;
    margin: 0;
    text-shadow: .05em .05em 0 rgba(0,0,0,.25);
    white-space: nowrap;
    & > span {
      width: 10rem;
    }
    @media(max-width: 30rem) {
      font-size: 8.5rem;
    }
  }
  
  .Error404__text {
    color: color.get(root-text-color);
    font-size: 1rem;
    letter-spacing: 1rem;
    font-weight: 700;
  }
  
  .Error404__message {
    color: color.get(text-color-01);
    margin-top: 4rem;
  }
</style>
