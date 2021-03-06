var launchpad = document.querySelector(".launchpad")
var launchpad_searchbox = document.querySelector(".launchpad .searchbox")
var launchpad_apps_container = document.querySelector(".apps-container")
var point_launchpad = document.querySelector("#point-launchpad")

var opencalculator_launchpad = document.querySelector(".open-cal-launch")
var opennotes_launchpad = document.querySelector(".open-notes-launch")

launchpad_searchbox.addEventListener("input", handleLaunchpadSearch)
opencalculator_launchpad.addEventListener("click", openCal_lunchpad)
opennotes_launchpad.addEventListener("click", openNotes_lunchpad)
handleOpenLaunching()

function handleOpenLaunching() {
    if (launchpad.style.display === "none") {
      launchpad.style.display = "block"
      navbar.style.display = "none"
      point_launchpad.style.display = "block"
    } else {
      launchpad.style.display = "none"
      navbar.style.display = "flex"
      point_launchpad.style.display = "none"
    }
    container.style.display = "none"
}

function handleLaunchpadSearch(e) {
    for (let app of launchpad_apps_container.children) {
      if (e.target.value) {
        app.style.display = "none"
        if (app.dataset.keywords.includes(e.target.value)) {
          app.style.display = "flex"
        }
      } else app.style.display = "flex"
    }
}

function openCal_lunchpad() {
    calculator.style.display = "block"
    container.style.display = "flex"
    navbar.style.display = "flex"
    launchpad.style.display = "none"
    point_cal.style.display = "block"
    point_launchpad.style.display = "none"
}

function openNotes_lunchpad() {
  notes.style.display = "block"
  container.style.display = "flex"
  navbar.style.display = "flex"
  launchpad.style.display = "none"
  point_note.style.display = "block"
  point_launchpad.style.display = "none"
}


