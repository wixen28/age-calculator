
//inputs
const dayInp = document.querySelector('#day')
const monthInp = document.querySelector('#month')
const yearInp = document.querySelector('#year')


//outputs
const dayOtp = document.querySelector('#DD')
const monthOtp = document.querySelector('#MM')
const yearOtp = document.querySelector('#YY')

//form
const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)


//dates and months

const date = new Date()
let day = date.getDate()
let month = 1  + date.getMonth()
let year = date.getFullYear()

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


// validation func
function validate(){
    const inputs = document.querySelectorAll('input')
    let validator = true
    inputs.forEach(function(input){
        const parent = input.parentElement
        if(!input.value) {
            input.style.borderColor = 'red'
            parent.querySelector('small').innerText = 'this field is required'
            validator = false
        } else if (monthInp.value > 12) {
            monthInp.style.borderColor = 'red'
            monthInp.parentElement.querySelector('small').innerText = 'must be a valid month'
            validator = false
        } else if (dayInp.value > 31) {
            dayInp.style.borderColor = 'red'
            dayInp.parentElement.querySelector('small').innerText = 'must be a valid day.'
            validator = false
        } else {
            input.style.borderColor = 'black'
            parent.querySelector('small').innerText = ''
            validator = true
        }

    })
     return validator
}


//function handle ev
function handleSubmit(e) {
    e.preventDefault()
    if(validate()) {
        if(dayInp.value > day) {
            day = day + months[month - 1]
            month = month - 1
        }

        if(monthInp.value > month) {
            month = month + 12
            year = year - 1
        }

        const d = day - dayInp.value
        const m = month - monthInp.value
        const y = year - yearInp.value


        dayOtp.innerHTML = d
        monthOtp.innerHTML = m
        yearOtp.innerHTML = y
    }
}