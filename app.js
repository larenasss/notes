const App = {
  data() {
    return {
      title: "Notes",
      input: {
        value: "",
        placeholder: "Type or note",
      },
      note: {
        title: "",
        isEditMode: false,
        editInputValue: "",
      },
      notes: [
        { title: "task 1", isEditMode: false, editInputValue: "" },
        { title: "task 2", isEditMode: false, editInputValue: "" },
        { title: "task 3", isEditMode: false, editInputValue: "" },
      ],
    };
  },
  mounted() {
    this.getNotes();
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem("notes");
      if (!localNotes) return;
      this.notes = JSON.parse(localNotes);
    },
    onSubmit() {
      this.notes.push({ title: this.input.value, isisEditMode: false });
      this.input.value = "";
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    editNote(note) {
      note.isEditMode = true;
      note.editInputValue = note.title;
    },
    saveNote(note) {
      note.isEditMode = false;
      note.title = note.editInputValue;
    },
  },
};

Vue.createApp(App).mount("#app");
