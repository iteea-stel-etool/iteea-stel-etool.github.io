console.log("TESTING")

import data from "./data.json" with { type: "json" }

document.addEventListener("alpine:init", () => {
  Alpine.data("iteea", () => ({
    selectedView: -1,
    clickMe(val) {
      this.selectedView = val
      console.log(this.selectedView)
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

