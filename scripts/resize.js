class Resize {
    constructor(){

    }

    resizeS(initialwidth,initialheight){
        let inputS = document.querySelector('#photoRatioS')
        let photoS = document.querySelector('#photoS')
    
        inputS.oninput = ()=>{
            photoS.style.width = `${initialwidth * inputS.value}px`
            photoS.style.height = `${initialheight * inputS.value}px`
        }
    }

    resizeIp(initialwidth,initialheight){
        let inputIp = document.querySelector('#photoRatioIp')
        let photoIp = document.querySelector('#photoIp')
    
        inputIp.oninput = ()=>{
            photoIp.style.width = `${initialwidth * inputIp.value}px`
            photoIp.style.height = `${initialheight * inputIp.value}px`
        }
    
       
    }

    resizeFb(initialwidth,initialheight){
        let inputFb = document.querySelector('#photoRatioFb')
        let photoFb = document.querySelector('#photoFb')
    
        inputFb.oninput = ()=>{
            photoFb.style.width = `${initialwidth * inputFb.value}px`
            photoFb.style.height = `${initialheight * inputFb.value}px`
        }
    
        
    }

    containerSresize(){
        let inputS = document.querySelector('#containerRatioS')
        let containerS = document.querySelector('.photoSContainer')

        inputS.oninput = ()=>{
            containerS.style.transform = `scale(${inputS.value},${inputS.value})`
        }
    }
    containerIpresize(){
        let inputIp = document.querySelector('#containerRatioIp')
        let containerIp = document.querySelector('.photoIpContainer')

        inputIp.oninput = ()=>{
            containerIp.style.transform = `scale(${inputIp.value},${inputIp.value})`  
        }
    }
    containerFbresize(){
        let inputFb = document.querySelector('#containerRatioFb')
        let containerFb = document.querySelector('.photoFbContainer')

        inputFb.oninput = ()=>{
            containerFb.style.transform = `scale(${inputFb.value},${inputFb.value})`
        }
    }

    photomoveS(){
        let posX = document.querySelector('#posSX')
        let posY = document.querySelector('#posSY')
        let photoS = document.querySelector('#photoS')

        posX.oninput = ()=>{
            photoS.style.left = `${posX.value}px`
            console.log(posX.value)
        }
        posY.oninput = ()=>{
            photoS.style.top = `${posY.value}px`
        }
    }

    photomoveIp(){
        let posX = document.querySelector('#posIpX')
        let posY = document.querySelector('#posIpY')
        let photoIp = document.querySelector('#photoIp')

        posX.oninput = ()=>{
            photoIp.style.left = `${posX.value}px`
            console.log(posX.value)
        }
        posY.oninput = ()=>{
            photoIp.style.top = `${posY.value}px`
        }
    }
    photomoveFb(){
        let posX = document.querySelector('#posFbX')
        let posY = document.querySelector('#posFbY')
        let photoFb = document.querySelector('#photoFb')

        posX.oninput = ()=>{
            photoFb.style.left = `${posX.value}px`
            console.log(posX.value)
        }
        posY.oninput = ()=>{
            photoFb.style.top = `${posY.value}px`
        }
    }
}
const resize = new Resize 
export default resize