import data from "./data.json" with { type: "json" }

const list = new Fuse(data, { keys: ["Benchmark", "Benchmark Detail", "Benchmark Id"], threshold: 0.3 })

document.addEventListener("alpine:init", () => {
  Alpine.data("iteea", () => ({
    selectedItem: data[0],
    selectItem(val) {
      this.selectedItem = val
      console.log(this.selectedItem)
    },
    search: "",
    standard_selected: "All Standards",
    grade_selected: "All Grades",
    searchResults() {
      let items = this.search ? list.search(this.search).map(val => val.item) : data

      return items
        .filter(val => (
          (this.standard_selected === "All Standards" || val["Benchmark Id"].includes(this.standard_selected)) &&
          (this.grade_selected === "All Grades" || val["Grade Level"] === this.grade_selected)
        ))
    }
  }))
})

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('hide.bs.modal', () => {
    document.activeElement.blur()
  })
})

