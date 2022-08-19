import 'style/index.scss';
import App from './App.svelte';

let target = document.getElementById('Fylvur');

if (!target) {
  console.warn('Could not find root element #Fylvur. Document body will be used instead');
  target = document.body;
}

export default new App({ target });
