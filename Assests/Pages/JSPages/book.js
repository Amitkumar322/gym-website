document.addEventListener("DOMContentLoaded", () => {
    const next1Btn = document.getElementById("next1");
    const next2Btn = document.getElementById("next2");
    const back2Btn = document.getElementById("back2");
    const back3Btn = document.getElementById("back3");
    const doneBtn = document.querySelector("button[type='submit']"); // Done button on slide 3
    
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");
    
    const slides = document.querySelectorAll(".slide");
    
    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
    }

    showSlide(0);

    next1Btn.addEventListener("click", () => {
        if (validateForm1()) {
            showSlide(1);
        }
    });

    next2Btn.addEventListener("click", () => {
        if (validateForm2()) {
            showSlide(2);
        }
    });

    back2Btn.addEventListener("click", () => {
        showSlide(0);
    });

    back3Btn.addEventListener("click", () => {
        showSlide(1);
    });

    function validateForm1() {
        const input1 = document.getElementById("input1").value;
        const input2 = document.getElementById("input2").value;
        const input3 = document.getElementById("input3").value;
        const input4 = document.getElementById("input4").value;

        if (!input1 || !input2 || !input3 || !input4) {
            alert("Please fill all fields in the first form.");
            return false;
        }
        return true;
    }

    function validateForm2() {
        const input5 = document.getElementById("input5").value;
        const input6 = document.getElementById("input6").value;
        const input7 = document.getElementById("input7").value;
        const input8 = document.getElementById("input8").value;

        if (!input5 || !input6 || !input7 || !input8) {
            alert("Please fill all fields in the second form.");
            return false;
        }
        return true;
    }

    function validateForm3() {
        const input9 = document.getElementById("input9").value;
        const input10 = document.getElementById("input10").value;
        const input11 = document.getElementById("input11").value;
        const input12 = document.getElementById("input12").value;

        if (!input9 || !input10 || !input11 || !input12) {
            alert("Please fill all fields in the payment form.");
            return false;
        }
        return true;
    }

    doneBtn.addEventListener("click", (event) => {
        event.preventDefault();  

        if (validateForm3()) {
            
            const formData = {
                personalInfo: {
                    firstName: document.getElementById("input1").value,
                    lastName: document.getElementById("input2").value,
                    phoneNumber: document.getElementById("input3").value,
                    noOfPersons: document.getElementById("input4").value,
                },
                addressInfo: {
                    email: document.getElementById("input5").value,
                    address: document.getElementById("input6").value,
                    city: document.getElementById("input7").value,
                    pinCode: document.getElementById("input8").value,
                },
                paymentInfo: {
                    cardAccepted: document.getElementById("input9").value,
                    nameOnCard: document.getElementById("input10").value,
                    cardNumber: document.getElementById("input11").value,
                    cvv: document.getElementById("input12").value,
                }
            };

            console.log("Form Submitted Successfully:", formData);

            alert("Your form has been successfully submitted!");

            form1.reset();
            form2.reset();
            form3.reset();

            showSlide(0);
        }
    });
});
