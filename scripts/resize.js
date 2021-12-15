export default function resize(initialwidth,initialheight){
    let inputS = document.querySelector('#photoRatioS')
    let photoS = document.querySelector('#photoS')

    inputS.oninput = ()=>{
        photoS.style.width = `${initialwidth * inputS.value}px`
        photoS.style.height = `${initialheight * inputS.value}px`
    }
}