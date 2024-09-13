console.log("Welcome to Spotify")

//Initialize the variables
let SongIndex = 0;
let audioElement = new Audio('/basic_project/spotify/spotify Clone/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let SongItem = Array.from(document.getElementsByClassName('SongItem'));
let SongItemPlay = Array.from(document.getElementsByClassName('SongItemPlay'));


let songs=[
    {SongName: "Meharma", filePath: "/basic_project/spotify/spotify Clone/songs/1.mp3", coverPath: "/basic_project/spotify/spotify Clone/covers/1.jpg"},
    {SongName: "Dil Chahte Ho", filePath: "/basic_project/spotify/spotify Clone/songs/2.mp3", coverPath: "/basic_project/spotify/spotify Clone/covers/2.jpg"},
    {SongName: "Dil Tod Ke-B Praak", filePath: "/basic_project/spotify/spotify Clone/songs/3.mp3", coverPath: "/basic_project/spotify/spotify Clone/covers/3.jpg"},
    {SongName: "Phir Mulaaqat", filePath: "/basic_project/spotify/spotify Clone/songs/4.mp3", coverPath: "/basic_project/spotify/spotify Clone/covers/4.jpg"},
    {SongName: "Pehla Pyaar", filePath: "/basic_project/spotify/spotify Clone/songs/5.mp3", coverPath: "/basic_project/spotify/spotify Clone/covers/5.jpg"},
    {SongName: "Khairiyat", filePath: "/basic_project/spotify/spotify Clone/songs/6.mp3", coverPath: "/basic_project/spotify/spotify Clone/covers/6.jpg"},
    {SongName: "jashne-e-Bahara", filePath: "/basic_project/spotify/spotify Clone/songs/7.mp3", coverPath: "/basic_project/spotify/spotify Clone/covers/7.jpg"},
    {SongName: "Saiyaan", filePath: "/basic_project/spotify/spotify Clone/songs/8.mp3", coverPath: "/basic_project/spotify/spotify Clone/covers/8.jpg"},
    {SongName: "Ambarsariya", filePath: "/basic_project/spotify/spotify Clone/songs/9.mp3", coverPath: "/basic_project/spotify/spotify Clone/covers/9.jpg"},
    {SongName: "Sach - kahe raha", filePath: "/basic_project/spotify/spotify Clone/songs/10 .mp3", coverPath: "/basic_project/spotify/spotify Clone/covers/10.jpg"},
]

SongItem.forEach((element,i)=>{
    // console.log(element,i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].SongName;
})

//   let audioElement = new Audio('1.mp3');
//   audioElement.play();

//Handle play / pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')

    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration/100);
})

const makeAllPlays = ()=>{
    // console.log(e.element) 
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}
Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      makeAllPlays();
      SongIndex = parseInt(e.target.id) 
      e.target.classList.remove('fa-circle-play')
      e.target.classList.add('fa-circle-pause')
      audioElement.src = `/basic_project/spotify/spotify Clone/songs/${SongIndex}.mp3`
      masterSongName.innerText = songs[SongIndex].SongName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause'); 
    })

    // element.addEventListener('click',()=>{
    //     if(audioElement.paused){
    //         audioElement.play();
    //     }
    //     else{
    //         audioElement.pause()
    //     }
    // })
})




document.getElementById('next').addEventListener('click',()=>{
    if (SongIndex>=9){
        SongIndex = 0
    }
    else{

        SongIndex += 1
    }
    audioElement.src = `/basic_project/spotify/spotify Clone/songs/${SongIndex}.mp3`
      masterSongName.innerText = songs[SongIndex].SongName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if (SongIndex<=0){
        SongIndex = 0
    }
    else{

        SongIndex -= 1
    }
    audioElement.src = `/basic_project/spotify/spotify Clone/songs/${SongIndex}.mp3`
      masterSongName.innerText = songs[SongIndex].SongName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
})