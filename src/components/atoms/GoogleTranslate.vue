<template>

  <div>
  <slot></slot>

  <div class="mytranslatehelper translate">
  <i class="ms-2 bi bi-globe"></i>
    <div class="visibleonlyonhover" > {{ translateText  }} </div>
  </div>
  </div>



</template>

<script lang="ts">

import { defineComponent } from "vue";


export default defineComponent({
  name: "VueGoogleTranslate",
  components: {
    
  },
  props: {
   
  },

  mounted() {
    
  },
  setup() {
    
  },

  methods: {
    getSlotChildrenText(children) {
    return children.map(node => {
    if (!node.children || typeof node.children === 'string') return node.children || ''
    else if (Array.isArray(node.children)) return this.getSlotChildrenText(node.children)
    else if (node.children.default) return this.getSlotChildrenText(node.children.default())
    }).join('')
  }
  },

  computed: {
  translateText() {
      if (this.$slots.default()) {
        return this.getSlotChildrenText(this.$slots.default());
      } else {
        return '';
      }
  }
},

  data() {
    return {
     
    };
  }
});
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