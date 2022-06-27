
const Audio = () => {
    const $audio = document.createElement("div");
    $audio.classList.add("audioRepro"); //clase para estilar en css

    let audioDuration


    let audio = document.createElement('audio')

    //trayendo el source desde la nube

    audio.src = 'https://res.cloudinary.com/dcwoyu2zc/video/upload/v1656028221/assets/itsMyLife_z3bgac.mp3'


    audio.className = 'audio'






    /***
   * buttons con sus funcionalidades
   */
    let button_play = document.createElement('button')
    button_play.innerHTML = `<ion-icon name="play"></ion-icon>`
    button_play.id = "play"

    let backward_seconds = document.createElement('button')
    backward_seconds.innerHTML = `<ion-icon name="return-up-back-outline"></ion-icon>`
    backward_seconds.id = "backwardSeconds"

    let forward_seconds = document.createElement('button')
    forward_seconds.innerHTML = `<ion-icon name="return-up-forward-outline"></ion-icon>`
    forward_seconds.id = "forwardSeconds"

    let control = document.createElement('input')
    control.className = 'control'

    control.type = 'range'
    control.id = 'control'
    control.min = '0'
    control.max = '100'
    control.step = '0.1'
    control.value = '0'

    let controlVolume = document.createElement('input')
    controlVolume.className = 'controlVolume'

    controlVolume.type = 'range'
    controlVolume.id = 'control'
    controlVolume.min = '0'
    controlVolume.max = '100'
    controlVolume.step = '0.1'
    controlVolume.value = '100'



    audio.addEventListener("loadeddata",()=>{
        audioDuration = audio.duration
    })

    audio.addEventListener("timeupdate",(event)=>{
        const percentage = (event.target.currentTime/audioDuration)*100
        control.value = percentage
    })

    button_play.onclick = ()=>{
        if(audio.paused){
            audio.play()
            button_play.innerHTML = `<ion-icon name="pause"></ion-icon>`

        }else{
            audio.pause()
            button_play.innerHTML = `<ion-icon name="play"></ion-icon>`

        }
    }

    backward_seconds.onclick = ()=>{
        audio.currentTime = audio.currentTime-10
    }
    forward_seconds.onclick = ()=>{
        audio.currentTime = audio.currentTime+10
    }

    control.oninput = (event)=>{
        audio.currentTime = (audioDuration/100)*event.target.value
    }

    controlVolume.oninput=(event)=>{
        audio.volume = event.target.value/100
    }


    //agregando todo al div padre
    $audio.appendChild(audio)
    $audio.appendChild(backward_seconds)
    $audio.appendChild(button_play)
    $audio.appendChild(forward_seconds)
    $audio.appendChild(controlVolume)
    $audio.appendChild(control)





    return $audio;
  };
  export default Audio;