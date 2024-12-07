function renderCarrouselResponsive() {
    var paginationWrapper = document.querySelector(".pagination-wrapper");
    console.log("hi")
    console.log(window.outerWidth);

    if (window.outerWidth <= 980) {
        var carrouselIndex = document.createElement("div");
        console.log("haha")
        paginationWrapper.innerHTML =
            `
        <div>
            <div id="previousPage" class="arrow-wrapper">
                <img src="svg/icons/left-arrow.svg" alt="" />
            </div>
            <div class="carrousel-index">
                <span id="actualPage" class="active"></span>
                <span class="inactive"> / </span>
                <span id="totalPages" class="inactive"></span>
          </div>
          <div id="nextPage" class="arrow-wrapper">
              <img src="svg/icons/right-arrow.svg" alt="" />
            </div>
        <div/>
        `
    }
}

//renderCarrouselResponsive();