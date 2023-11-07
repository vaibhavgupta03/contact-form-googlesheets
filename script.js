const scriptURL = 'https://script.google.com/macros/s/AKfycbwv58NsPAa75O4oYVJr7OgaCjugXUyGqjt34NJIpzJS1kyPAP9L8SXvxnSCdyQZKtrx/exec'
const form = document.forms['submit-to-google-sheet']

let msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response)
            msg.innerHTML = "Form submitted successfully!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})