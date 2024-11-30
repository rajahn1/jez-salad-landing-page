// render customers
import { customers } from "./mock.js";

let pageIndex = 0;
let itemsPerPage = 3;
const tl = gsap.timeline();
let x = 600;

function renderCustomers(actualPage, itemsPerPage) {
    const customerWrapper = document.querySelector(".customer-wrapper");
    customerWrapper.innerHTML = "";

    const startIndex = actualPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, customers.length);

    for (let index = startIndex; index < endIndex; index++) {
        if (index - (actualPage * itemsPerPage) == 3) return;
        const customer = customers[index];
        const customerDiv = document.createElement("div");
        customerDiv.classList.add("customer-review");

        const customerAvatar = document.createElement("img");
        customerAvatar.src = customer.img;

        const customerName = document.createElement("h2");
        customerName.textContent = customer.name;

        const customerAge = document.createElement("span");
        customerAge.classList.add("age");
        customerAge.textContent = customer.year;
        
        const customerReview = document.createElement("p");
        customerReview.classList.add("subparagraph");
        customerReview.textContent = customer.review

        customerWrapper.appendChild(customerDiv);
        customerDiv.appendChild(customerAvatar);
        customerDiv.appendChild(customerName);
        customerDiv.appendChild(customerAge);
        customerDiv.appendChild(customerReview);
    }

    const allCustomersReview = document.querySelectorAll(".customer-review");
    allCustomersReview.forEach(element => {
        tl.from(element, { x, duration: .3, opacity: 0 });
    })
}

function paginationCarrousel() {
    let totalPagesIndex = Math.ceil(customers.length / itemsPerPage);
    totalPagesIndex = totalPagesIndex % itemsPerPage == 0 ? Math.floor(totalPagesIndex) : Math.floor(totalPagesIndex) + 1;

    const actualPage = document.getElementById("actualPage");
    actualPage.innerHTML = "0" + (pageIndex + 1);

    const totalPages = document.getElementById("totalPages");
    totalPages.innerHTML = "0" + totalPagesIndex;

    const nextPageArrow = document.getElementById("nextPage");
    const previousPageArrow = document.getElementById("previousPage");
    
    nextPageArrow.addEventListener("click", () => {
        if (pageIndex + 1 >= totalPagesIndex) return;
        pageIndex++;
        actualPage.innerHTML = "0" + (pageIndex + 1);
        x = 600;
        renderCustomers(pageIndex, itemsPerPage);
        tl.play();
        
    })

    previousPageArrow.addEventListener("click", () => {
        if (pageIndex <= 0) return;
        pageIndex--;
        actualPage.innerHTML = "0" + (pageIndex + 1);
        x = -600;
        renderCustomers(pageIndex, itemsPerPage);
        tl.play();
    })
}

paginationCarrousel();
renderCustomers(pageIndex, itemsPerPage);

