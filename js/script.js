const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})


/*--==================Skills Section Starts Here===================-*/

const tabs = document.querySelectorAll("[data-tab-target]")

const tabContent = document.querySelectorAll("[data-tab-content]")

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContent.forEach(tabContent => { tabContent.classList.remove("active")
       })
        target.classList.add("active")
    })
}) 

/*--==================Skills Section Ends Here===================-*/