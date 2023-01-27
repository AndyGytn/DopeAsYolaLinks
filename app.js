const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copytext(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
       await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    }   catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButtons =>
    shareButtons.addEventListener('click', copytext))