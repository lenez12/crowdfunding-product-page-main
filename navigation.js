const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})


// Modal
const buttonBackProject = document.querySelector('[aria-controls="modal-project"]')
const modal = document.querySelector("#modal-project")
const project = modal.querySelector("#project")
const closes = project.querySelector("#close-icon_id")
const form = project.querySelector("#dialog-form")

buttonBackProject.addEventListener("click", () => {
  openModal()
})
closes.addEventListener("click", () => {
     closeModal()
})

function openModal(id) {
    setInitData(id)
    modal.classList.add("active")
    project.classList.add("active")
}
function closeModal() {
    setInitData("")
    modal.classList.remove("active")
    project.classList.remove("active")
 }

// menu
const articles = form.querySelectorAll('article')
articles.forEach((article) => {
    setInitData()
    const title = article.querySelector("h3")
    title.addEventListener('click', changeArticle);
});

function setInitData(id) {
    articles.forEach(item => {
        const formPledge = item.querySelector("div.pledge-form")
        const radio = item.querySelector('input[name="options"]')
        if (formPledge) {
            formPledge.classList.remove("active")
        }
        radio.checked = false
        item.setAttribute('aria-selected',false)
        if (item.id === id) {
            item.setAttribute("aria-selected",true)
            radio.checked = true
             if (formPledge) {
                 formPledge.classList.add("active")
                 continueAction(formPledge)
             }
        }
    })
}
function changeArticle(e) {
    const article = e.target.parentNode.parentNode
    const formPledge = article.querySelector("div.pledge-form")
    const radio = article.querySelector('input[name="options"]')
     setInitData()
    article.setAttribute('aria-selected', true)
    if (formPledge) {
        const buttonContinue = formPledge.querySelector('[type="button"]')
        console.log(buttonContinue)
        buttonContinue.addEventListener("click", () => {
            closeModal()
            openThankModal()
        })
        formPledge.classList.add("active")

    }
    radio.checked = true

}

//form pledge action 
function continueAction(formPledge) {
    const buttonContinue = formPledge.querySelector('[type="button"]')
        console.log(buttonContinue)
        buttonContinue.addEventListener("click", () => {
            closeModal()
            openThankModal()
        })
}
// thank Modal
const  thankModal = document.querySelector("#thank-dialog")
const btnGotIt = thankModal.querySelector("#btn-got-it")
btnGotIt.addEventListener("click",closeThankModal)
function closeThankModal() {
    const dialog = thankModal.querySelector("#dialog")
    thankModal.classList.remove("active")
    dialog.classList.remove("active")
}
function openThankModal() {
    const dialog = thankModal.querySelector("#dialog")
    thankModal.classList.add("active")
    dialog.classList.add("active")
}

// Select Reward
const rewardCard = document.querySelector("#product-card")
const listReward = rewardCard.querySelectorAll("article")
listReward.forEach(reward => {
    const btnReward = reward.querySelector('[type="button"]')
    btnReward.addEventListener("click", () => {
        openModal(reward.id)
    })
})


// handle bookmark checkbox
const bookmardBtn = document.querySelector("#bookmard-checkbox")
bookmardBtn.addEventListener("click", () => {
    const parent = bookmardBtn.parentNode
    const textElement = parent.querySelector("#text")
    if (bookmardBtn.checked) {
        textElement.textContent = "Bookmarked"
    } else {
        textElement.textContent = "Bookmark"
    }
})