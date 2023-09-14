AFRAME.registerComponent("marker", {
    init: async function(){
        this.el.addEventListener("markerFound",(e)=>{
            console.log("Marker Found")
            this.handleMarkerFound()
        });
        this.el.addEventListener("markerLost",(e)=>{
            console.log("Marker Lost")
            this.handleMarkerLost()
        });
    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")
        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "rate dish",
                text: "work in progress"
            })
        })
        orderButton.addEventListener("click", (e)=>{
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpeg",
                title: "thanks for ordering",
                text: "your order will be served soon"
            })
        })
    },
    handleMarkerLost: function(){
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
})