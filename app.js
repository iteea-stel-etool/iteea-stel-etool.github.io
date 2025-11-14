console.log("TESTING")

import data from "./data.json" with { type: "json" }

document.addEventListener("alpine:init", () => {
  Alpine.data("iteea", () => ({
    selectedItem: data[0],
    selectItem(val) {
      this.selectedItem = val
      console.log(this.selectedItem)
    },
    searchResults() {
      return data
    }
  }))
})

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('hide.bs.modal', () => {
    document.activeElement.blur()
  })
})

