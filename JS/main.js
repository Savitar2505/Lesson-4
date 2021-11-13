// const input =document.getElementById('task')
// console.log(input)

const input = document.getElementById('task')
// input.addEventListener('change', (e)=> {
//     console.log(e)
// })
const button = document.querySelector('.save_task')
// button.onclick=()=>{
//     console.log(input.value)
// }

const toggleClass =(e)=>{
    e.target.classList.toggle('active')
}