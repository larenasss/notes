<template>
  <div class="note-wrap">
    <Form
      @onSubmit="hundlerSubmit"
      :isEditMode="isEditMode"
      :editNoteItem="editNoteItem"/>
    <div class="note-wrap__list">
      <List
        @onRemove="hundlerRemove"
        @onEdit="hundlerEdit"
        :items="notes"
      />
    </div>
  </div>
</template>

<script>
  import Form from '@/components/Notes/Form.vue';
  import List from '@/components/Notes/List.vue';

  export default {
    components: {
      Form,
      List,
    },
    data() {
      return {
        editNoteItem: {},
        isEditMode: false,
        notes: [
          {
            id: 1,
            title: 'Сверстать форму',
            tags: [{ title: 'work', isActive: true }]
          },
          {
            id: 2,
            title: 'Реализовать сортировку',
            tags: [{ title: 'work', isActive: true }, { title: 'home', isActive: true }]
          },
          {
            id: 3,
            title: 'Съездить в лес и собрать шишки',
            tags: [{ title: 'travel', isActive: true }]
          },
        ],
      }
    },
    mounted() {
      this.getNotes();
    },
    watch: {
      notes: {
        handler(updatedList) {
          this.setNotes(updatedList);
        },
        deep: true,
      },
    },
    methods: {
      getNotes() {
        const localNotes = localStorage.getItem('notes');
        if (!localNotes || localNotes === 'undefined') return;
        this.notes = JSON.parse(localNotes)
      },
      setNotes(updatedList) {
        if (!updatedList) return;
        localStorage.setItem('notes', JSON.stringify(updatedList));
      },
      hundlerSubmit({ title, tags }, isEditMode) {
        if (isEditMode) {
          this.editNoteItem.title = title;
          this.editNoteItem.tags = tags;
          this.notes = this.notes.map(el => {
            if (el.id == this.editNoteItem.id) {
              el = this.editNoteItem;
            }
            return el;
          });
        } else {
          const id = this.notes.length + 1;
          const note = {
            id,
            title,
            tags,
          }
          this.notes.unshift(note);
        }

        this.isEditMode = false;
      },
      hundlerRemove(index) {
        this.notes.splice(index, 1);
      },
      hundlerEdit(note) {
        this.isEditMode = true;
        this.editNoteItem = Object.assign({}, note);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .note-wrap {
    max-width: 600px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;

    &__list {
      margin-top: 1.5rem;
      width: 100%;
    }
  }
</style>