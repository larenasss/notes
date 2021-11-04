<template>
  <form class="note-form" @submit.prevent="onSubmit">
      <textarea v-if="isEditMode"
      v-model="value"
      placeholder="Edit note"
      required>
    </textarea>
    <textarea v-else
      v-model="value"
      placeholder="Type or note"
      required>
    </textarea>
    <TagsList
      :items="tags"
      :isActive="true"
      @onItemClick="handleTagClick"/>
    <button class="btn btn_primary" type="submit">
      <span v-if="isEditMode">
        Edit note
      </span>
      <span v-else>
        Add new note
      </span>
    </button>
  </form>
</template>

<script>
  import TagsList from '@/components/UI/TagsList.vue';

  export default {
    components: {
      TagsList
    },
    props: {
      isEditMode: {
        type: Boolean,
        default: false,
      },
      editNoteItem: {
        type: Object,
        required: true,
      }
    },
    watch: {
      editNoteItem: function() {
        this.value = this.editNoteItem.title;
        this.setDefaultTags();
        this.setActiveTags();
      }
    },
    data() {
      return {
        value: '',
        tags: [
          {
            title: 'home',
            isActive: false,
          },
          {
            title: 'work',
            isActive: false,
          },
          {
            title: 'travel',
            isActive: false,
          }
        ],
      }
    },
    methods: {
      onSubmit() {
        const activeTags = this.tags.filter(el => el.isActive);
        this.$emit('onSubmit', { title: this.value, tags: activeTags}, this.isEditMode);
        this.value = '';
        this.setDefaultTags();
      },
      handleTagClick(item) {
        item.isActive = item.isActive ? false : true;
      },
      setDefaultTags() {
        this.tags.forEach(el => el.isActive = false);
      },
      setActiveTags() {
        this.tags.forEach(tagForm => {
          const isСoincidence = this.editNoteItem.tags.some(tagNoteEdit => tagForm.title == tagNoteEdit.title);
          if (isСoincidence) {
            tagForm.isActive = isСoincidence;
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .note-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>