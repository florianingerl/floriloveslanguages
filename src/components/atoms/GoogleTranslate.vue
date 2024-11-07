<template>

  <div>
  <slot></slot>

  <div class="mytranslatehelper translate">
  <i class="ms-2 bi bi-globe"></i>
    <div class="visibleonlyonhover" > {{ translateText  }} </div>
  </div>
  </div>



</template>

<script setup lang="ts">
import { computed, useSlots } from "vue";

const slots = useSlots() as any;

function getSlotChildrenText(children: any) {
    return children.map( (node:any) => {
    if (!node.children || typeof node.children === 'string') return node.children || ''
    else if (Array.isArray(node.children)) return getSlotChildrenText(node.children)
    else if (node.children.default) return getSlotChildrenText(node.children.default())
    }).join('')
  }

const translateText = computed(() => {
      if ( slots.default()) {
        return getSlotChildrenText( slots.default() );
      } else {
        return '';
      }
  } ) ;
</script>


<style scoped>



.visibleonlyonhover {
  visibility: hidden;
  position: absolute;
  top: 105 %;
  border: 1px solid blue;
  background-color: #66ffcc;
}

.mytranslatehelper {
  position: relative;
}

.mytranslatehelper:hover .visibleonlyonhover {
  visibility: visible;
  
}

</style>