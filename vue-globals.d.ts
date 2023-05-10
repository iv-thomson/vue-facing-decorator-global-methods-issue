/**
 * Define any custom properties here
 * reference: https://vuejs.org/api/utility-types.html#componentcustomproperties
 */

declare module 'vue' {
  interface ComponentCustomProperties {
    $test: () => string
  }
}

export {}; // TS module augmentation works correctly only when it is placed in a module. https://stackoverflow.com/questions/64175742/using-globalproperties-in-vue-3-and-typescript
