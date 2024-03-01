const faqs = document.querySelectorAll(".FAQItem");
console.log(faqs)

const openFAQ = (i) => {
    faqs.forEach((a, j) => {
        if (i == j) {
            a.classList.toggle("active")
        }
        else {
            a.classList.remove('active');
        }
    })
}

faqs.forEach((a, i) => {
    a.addEventListener("click", () => { openFAQ(i) })
})

document.getElementById('hamburger-menu').addEventListener('click', function () {
    var navLinks = document.getElementById('navLinks');
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
});

const scriptURL="https://script.google.com/macros/s/AKfycbz5tfnUj1zNLZ1B1MsX6IogmDy0E3UwWHLfnSxV2Cvm7dYwPS6XjExfDiDrqJgAMVqWVw/exec"
const form=document.forms['contact-form']

// form.addEventListener("Submit",e=>{
//     e.preventDefault()
//     fetch(scriptURL,{method:'POST',body:new FormData(form)})
//     .then(response=>alert("Thank you for visiting !"))
//     .then(()=>{window.location.reload();})
//     .catch(error=>console.error("Error!",error.message))
    
// })

function submitForm(event) {
    // event.preventDefault(); // Prevent the default form submission

    // Here you can add your logic to send data to Google Sheets
    // For simplicity, let's just show an alert for now
    alert("Form submitted successfully!");
    
    // You can add the code to send data to Google Sheets here

    // If you want to redirect after showing the alert, you can use:
    // window.location.href = "https://your-redirect-url.com";
}


// function submitForm(event) {
//     event.preventDefault(); // Prevent the default form submission

    // Get form data
    // var formData = new FormData(document.getElementById('myForm'));
    // var jsonData = {};
    // formData.forEach(function(value, key){
    //     jsonData[key] = value;
    // });

    // // Send data to Google Sheets
    // fetch('https://script.google.com/macros/s/AKfycbz5tfnUj1zNLZ1B1MsX6IogmDy0E3UwWHLfnSxV2Cvm7dYwPS6XjExfDiDrqJgAMVqWVw/exec', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(jsonData)
    // })
    // .then(response => response.text())
    // .then(data => {
    //     alert("Form submitted successfully!");
    //     // You can add additional actions here if needed
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    //     alert("Error submitting the form. Please try again.");
    // });
