<template>
  <ul class="tags-list">
    <li
      class="tag-item"
      v-for="item in items"
      :key="item"
      :class="{ isPreview: isPreview, isActive: item.isActive}"
      @click="$emit('onItemClick', item)">
      <span v-if="item.title">
        {{ item.title }}
      </span>
      <span v-else>
        {{ item }}
      </span>
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
      isActive: {
        type: Boolean,
        default: false
      },
      isPreview: {
        type: Boolean,
        default: false,
      }
    },
  }
</script>

<style lang="scss">
  .tags-list {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
  }

  .tag-item {
    padding: .5rem 1.5rem;
    background-color: #fff;
    border-radius: 22px;
    user-select: none;
    cursor: pointer;

    &:not(.isPreview) {
      transition: transform .1s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }

      &.isActive {
        background-color: #444ce0;
        color: #fff;
      }
    }

    &.isPreview {
      padding: 0;
      color: #444ce0;
      cursor: default;

      &:before {
        content: '#';
      }
    }

    &:not(:last-child) {
      margin-right: .8rem
    }
  }
</style>