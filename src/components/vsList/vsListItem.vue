<template lang="html">
  <div class="vs-list--item">
    <div class="vs-list--avatar">
      <slot name="avatar"/>
    </div>
    <div
      v-if="icon"
      class="vs-list--icon">
      <i
        translate="no"
        class="material-icons notranslate">{{ icon }}</i>
    </div>
    <div class="list-titles">
      <div
        v-if="title"
        class="vs-list--title">{{ title }}</div>
      <div
        v-if="subtitle"
        class="vs-list--subtitle">{{ subtitle }}</div>
    </div>
    <div class="vs-list--slot">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name:'VsListItem',
  props: {
    vsAvatar:{
      type:[Boolean,String],
      default:false,
    },
    title:{
      type:String,
      default:null,
    },
    subtitle:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null,
    },
  }
}
</script>
