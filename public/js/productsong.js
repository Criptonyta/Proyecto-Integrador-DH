window.addEventListener("load",function(){
    let playerButton = document.querySelector(".Player-button")
    let clicks = 0
    playerButton.addEventListener("click",function(){
        if (clicks % 2 == 0){
            this.style.opacity = "0.8"
            document.querySelector(".productImages").style.opacity = "0.5"
            clicks += 1
            document.querySelector(".productSong-imageButtonContainer").addEventListener("mouseover",function(){
                playerButton.style.opacity = "0.8";
                document.querySelector(".productImages").style.opacity = "0.5"
            })
            document.querySelector(".productSong-imageButtonContainer").addEventListener("mouseout",function(){
                playerButton.style.opacity = "0.8";
                document.querySelector(".productImages").style.opacity = "0.5"
            });
        }
        else {
            this.style.opacity = "0";
            clicks += 1
            document.querySelector(".productImages").style.opacity = "1";
            document.querySelector(".productSong-imageButtonContainer").addEventListener("mouseover",function(){
                playerButton.style.opacity = "1";
                document.querySelector(".productImages").style.opacity = "0.6"
            })
            document.querySelector(".productSong-imageButtonContainer").addEventListener("mouseout",function(){
                playerButton.style.opacity = "0";
                document.querySelector(".productImages").style.opacity = "1"
            })
        }
    })
})