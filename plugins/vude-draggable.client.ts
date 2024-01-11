import nestedDraggable from 'vuedraggable'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('nested-draggable', nestedDraggable);
});
