<template>
  <ul class="notes-list">
    <li class="notes-list-item" v-for="(note, index) in items" :key="note.id">
      <div class="notes-list-item__header">
        <p class="notes-list-item__box">
          {{ note.title }}
        </p>
        <div class="notes-list-item__btn">
          <span class="notes-list-item__icon" @click="$emit('onEdit', note)">
            &#9998;
          </span>
          <span class="notes-list-item__icon" @click="$emit('onRemove', index)">
            &#10006;
          </span>
        </div>
      </div>
      <div class="notes-list-item__footer">
        <TagsList
          :isPreview="true"
          v-if="note.tags && note.tags.length"
          :items="note.tags"/>
      </div>
    </li>
  </ul>
</template>

<script>
  import TagsList from '@/components/UI/TagsList.vue';

  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
    components: {
      TagsList
    }
  }
</script>

<style lang="scss">
  .notes-list {
    width: 100%;
  }

  .notes-list-item {
    width: 100%;
    padding: 18px 20px;
    margin-bottom: 20px;
    border-radius: 14px;
    background-color: #ffffff;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);

    &:hover {
      box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
      transform: translate(0, -6px);
      transition-delay: 0s !important;
    }

    & input {
      padding: 0 .2rem;
    }

    &__box {
      padding: 0 .2rem;
    }

    &__icon {
      cursor: pointer;
      font-size: 20px;
      transition: color .1s ease-in-out;

      &:hover {
        color: #494ce8;
      }

      &:last-child {
        margin-left: .5rem;
      }
    }

    &__btn {
      display: flex;
      margin-left: 1rem;
    }

    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__footer {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
    }
  }
</style>