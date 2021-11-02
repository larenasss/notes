const App = {
  data() {
    return {
      title: 'Notes',
      input: {
        value: '',
        placeholder: 'Type or note',
      },
      editNoteItem: {},
      notes: [
        { id: 1, title: 'task 1' },
        { id: 2, title: 'task 2' },
        { id: 3, title: 'task 3' },
      ],
    };
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
      this.notes = JSON.parse(localNotes).map((el) => {
        el.isEditMode = false;
        return el;
      });
    },
    setNotes(updatedList) {
      if (!updatedList) return;
      localStorage.setItem('notes', JSON.stringify(updatedList));
    },
    onSubmit() {
      const id = this.notes.length + 1;
      this.notes.push({ id: `${id}`, title: this.input.value.trim() });
      this.input.value = '';
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    editNote(note) {
      this.editNoteItem = Object.assign({}, note);
    },
    saveNote(index) {
      if (this.editNoteItem.title) {
        this.notes[index] = this.editNoteItem;
      }
      this.editNoteItem = {};
    },
  },
};

Vue.createApp(App).mount('#app');
