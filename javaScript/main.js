const barber1 = document.getElementById("barber1")
const barber2 = document.getElementById("barber2")
const barber3 = document.getElementById("barber3")
const imgSlide1 = document.getElementById("imgSlide1")
const imgSlide2 = document.getElementById("imgSlide2")
const imgSlide3 = document.getElementById("imgSlide3")
const exitSlide = document.getElementById("exitSlide")
const exitSlide2 = document.getElementById("exitSlide2")
const exitSlide3 = document.getElementById("exitSlide3")
const apointment = document.getElementById("apointment")
const formContainer = document.getElementById("formContainer")
const exitForm = document.getElementById("exitForm")
const imgSlides = document.getElementsByClassName("imgSlides")
const imgScreen = document.getElementById("imgScreen")
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const phoneNum = document.getElementById("phoneNum")
const cutDay = document.getElementById("cutDay")
const cutHour = document.getElementById("cutHour")
const cutStyle = document.getElementById("cutStyle")
const cuters = document.getElementById("cuters")
const submitCut = document.getElementById("submit")
const danny = document.getElementById("danny")
const israel = document.getElementById("israel")
const david = document.getElementById("david")


barber1.onclick = () => {
    imgSlide1.style.visibility = "visible"
}
barber2.onclick = () => {
    imgSlide2.style.visibility = "visible"
}
barber3.onclick = () => {
    imgSlide3.style.visibility = "visible"
}
exitSlide.onclick = () => {
    imgSlide1.style.visibility = "hidden"
}
exitSlide2.onclick = () => {
    imgSlide2.style.visibility = "hidden"
}
exitSlide3.onclick = () => {
    imgSlide3.style.visibility = "hidden"
}
apointment.onclick = () => {
    formContainer.style.visibility = "visible"
}
exitForm.onclick = () => {
    formContainer.style.visibility = "hidden"
}

for (let i = 0; i < imgSlides.length; i++) {
    imgSlides[i].onclick = () => {
        imgScreen.src = imgSlides[i].src
    }
}

let customersApointments = [];
// let dannyCus = []  !--barber customers lists not finished yet--!
// let israelCus = []  !--barber customers lists not finished yet--!
// let davidCus = []  !--barber customers lists not finished yet--!
let customer = {}
submitCut.onclick = ()=>{
    for (let i = 0; i < customersApointments.length; i++) {
        customer.firstName = firstName.value
        customer.lastName = lastName.value
        customer.phoneNum = phoneNum.value
        customer.cutDay = cutDay.value
        customer.cutHour = cutHour.value
        customer.cuters = cuters.value
        customer.cutStyle = cutStyle.value
    }
    customersApointments.push(customer)

}
console.log(customersApointments);



