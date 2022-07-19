var slicedMovies = movies.slice(0, 10);
var elDiv = document.querySelector(".card_wrapper")

function renderMovies(aray, wrapper) {
    wrapper.innerHTML = null;


    // 1-usul
    // for (var i = 0; i < aray.length; i++) {

    //     // H5
    //     var nevH5 = document.createElement("h5");
    //     nevH5.textContent = aray[i].Title;
    //     nevH5.classList = "card-title h6 m-0 mb-2"
    //         // nevH5.setAttribute("class", "card-title h6 m-0 mb-2");


    //     //div
    //     var newWrapperDiv = document.createElement("div");
    //     newWrapperDiv.classList = "card-body";

    //     newWrapperDiv.appendChild(nevH5);


    //     var newImg = document.createElement("img");
    //     newImg.classList = "card-img-top";
    //     newImg.src = `https://img.youtube.com/vi/${array[i].ytid}/mqdefault.jpg`;


    //     // DIV
    //     var newDivCard = document.createElement("div");
    //     newDivCard.classList = "card   h-100";

    //     newDivCard.appendChild(newImg);
    //     newDivCard.appendChild(newWrapperDiv);



    //     // card wrapper
    //     var newCardWrapper = document.createElement("div");
    //     newCardWrapper.classList = "col  mb-4";

    //     newCardWrapper.appendChild(newDivCard);


    //     wrapper.appendChild(newCardWrapper);

    //     console.log(wrapper);
    // }


    // 2-usul
    for (var item of aray) {
        // H5
        var nevH5 = document.createElement("h5");
        nevH5.textContent = item.Title;
        nevH5.classList = "card-title h6 m-0 mb-2"
            // nevH5.setAttribute("class", "card-title h6 m-0 mb-2");


        //div
        var newWrapperDiv = document.createElement("div");
        newWrapperDiv.classList = "card-body";

        newWrapperDiv.appendChild(nevH5);


        var newImg = document.createElement("img");
        newImg.classList = "card-img-top";
        newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;


        // DIV
        var newDivCard = document.createElement("div");
        newDivCard.classList = "card   h-100";

        newDivCard.appendChild(newImg);
        newDivCard.appendChild(newWrapperDiv);



        // card wrapper
        var newCardWrapper = document.createElement("div");
        newCardWrapper.classList = "col  mb-4";

        newCardWrapper.appendChild(newDivCard);


        wrapper.appendChild(newCardWrapper);

        console.log(wrapper);
    }
}

renderMovies(slicedMovies, elDiv);