const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function() {
    // console.log(links.classList)
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // }
    // else {
    //     links.classList.add("show-links");
    // }
    links.classList.toggle("show-links");
});


const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e) {
    const id = e.target.dataset.id;
    if(id) {
        // remove active from other buttons
        btns.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // hide other articles
        articles.forEach(function(article) {
            article.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});


const imgs = [
    {
        id: 1,
        img: "images/cert1.avif",
    },
    {
        id: 2,
        img: "images/cert2.avif",
    },
    {
        id: 3,
        img: "images/cert3.avif",
    },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function() {
    CertsItems(imgs);
});

function CertsItems(certItems) {
    let displaycert = certItems.map(function(cert) {
    
    return `<div class="certs-grid">
            <img class="img-size" src=${cert.img}>
        </div>`;
    })
    displaycert = displaycert.join("");
    sectionCenter.innerHTML = displayMenu
}



const menu = [
    {
        id: 1,
        img: "images/1.jpg",
        name: "BOOK FAN MAIL",
        category: "Fan",
    },
    {
        id: 2,
        img: "images/2.jpg",
        name: "BOOK FAN MAIL",
        category: "Journal",
    },
    {
        id: 3,
        img: "images/3.jpg",
        name: "BOOK FAN MAIL",
        category: "Horror",
    },
    {
        id: 4,
        img: "images/4.jpg",
        name: "BOOK FAN MAIL",
        category: "Funny",
    },
    {
        id: 5,
        img: "images/1.jpg",
        name: "BOOK FAN MAIL",
        category: "Fan",
    },
    {
        id: 6,
        img: "images/2.jpg",
        name: "BOOK FAN MAIL",
        category: "Journal",
    },
    {
        id: 7,
        img: "images/3.jpg",
        name: "BOOK FAN MAIL",
        category: "Horror",
    },
    {
        id: 8,
        img: "images/4.jpg",
        name: "BOOK FAN MAIL",
        category: "Funny",
    },
];


// const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

// load items

window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons();
});


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
    
    return `<div class="pic_box">
                    <img class="pic" src=${item.img} alt=${item.name}>
                    <h4 class="common_pic">${item.name}</h4>
                </div>`;
    })
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu
}

function displayMenuButtons() {

  const categories = menu.reduce(function(values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]);
  const categoryBtns = categories.map(function(category) {
    return `<button class="butt filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join("");
  container.innerHTML = categoryBtns;
  
  const filterBtns = container.querySelectorAll(".filter-btn");

  // filter items

  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if(category === 'All'){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory);
        }

    });
  });

}

// Add active class to the current button (highlight it)
var header = document.getElementById("filter");
var btn = header.getElementsByClassName("butt");
console.log(header,btn);
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("butt");
  current[0].className = current[0].className.replace(" activee", "");
  this.className += " activee";
  });
}

// Next

$(document).ready(function () {
    $(".num").counterUp({
        delay: 10,
        time: 1600
    });
});


// Next One for Services


// const service = [
//     {
//         id: 1,
//         img: "blogs/services_articles_blogs.jpg",
//         href: "",
//         head: "Freelance B2B Article Writing Services",
//         description: "Learn how I can get your business noticed through exceptional, engaging, informative content that delights your readers. I’ll help you build your SEO, connect with customers, and stand out from the competition. You can count on well-researched, beautifully written blogs and articles to attract visitors and build trust with your target audience.",
//     },
//     {
//         id: 2,
//         img: "blogs/services_guides_tutorials.jpg",
//         href: "",
//         head: "Freelance Guide and Knowledge Base Writing Services",
//         description: "Learn how I can help you delight your customers with the knowledge, skills, support, and training they need to get the most from your business. I’ll write informative, educational, easy-to-understand guides, knowledge bases, reviews, comparisons, and FAQs to help you build trust and connection with your audience.",
//     },
//     {
//         id: 3,
//         img: "blogs/services_white_paper_ebook.jpg",
//         href: "",
//         head: "Freelance White Paper and Ebook Writing Services",
//         description: "Learn how I can help strengthen your business leadership across your industry through publishing in-depth white papers and ebooks. I’ll research and write compelling, focused papers, reports, and deep-dives that position your business as subject matter experts.",
//     },
//     {
//         id: 4,
//         img: "blogs/consulting_writing_project.jpg",
//         href: "",
//         head: "Consulting and Writing Project Services",
//         description: "Learn how I provide specialized consulting and project management to help you meet your content marketing needs. I’ll drive your content refresh program and provide best-in-class advice and support.",
//     },
//     {
//         id: 5,
//         img: "blogs/services_marketing_agency.jpg",
//         href: "",
//         head: "Freelance Marketing Agency Writing Services",
//         description: "Learn how you can expand your content marketing services with freelance writing designed to meet all your digital agency needs. I create comprehensive, easy-to-understand articles, guides, and white papers crafted specifically to your client's needs.",
//     },
//     {
//         id: 6,
//         img: "blogs/services_business_content.jpg",
//         href: "",
//         head: "Business Content Writing Services",
//         description: "Learn how to get visibility in search results, strengthen your content marketing, and meet customer needs by publishing powerful and compelling business content. I’ll write expert B2B articles, guides, and white papers that speak to your audience and build trust in your business.",
//     },
//     {
//         id: 7,
//         img: "blogs/services_finance_content.jpg",
//         href: "",
//         head: "Freelance Financial Writing Services",
//         description: "Learn how I enhance financial understanding, create money management guides, explain important concepts, and eliminate customer confusion with my expert finance writing. I’ll create comprehensive, easy-to-understand articles, guides, and white papers that share your financial solutions and build trust in your business.",
//     },
//     {
//         id: 8,
//         img: "blogs/services_technology_content.jpg",
//         href: "",
//         head: "Freelance Technology Writing Services",
//         description: "Learn how to share your SaaS products, artificial intelligence, and digital transformation insights with your audience through technology writing. I’ll create comprehensive, easy-to-understand articles, guides, and white papers that share your tech solutions and build trust in your business.",
//     },
// ];

// // window.addEventListener("DOMContentLoaded", function () {
// //     displayservices(ser);
// // });

// const displayserimg = document.querySelector(".ser2_flex_main");


// function displayservices(disser) {
//     let displayser = disser.map(function(ser) {
    
//     return `<div class="ser2_div_flex">
//                     <a href=${ser.href}>
//                     <img src=${ser.img} alt="">
//                     <p class="ser2_flex_p_1">${ser.head}</p>
//                     </a>
//                     <p class="ser2_flex_p_2">${ser.description}</p>
//                 </div>`;
//     })
//     displayser = displayser.join("");
//     displayserimg.innerHTML = displayser
// }

// For services

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    const btnns = question.querySelector(".question-btn");

    btnns.addEventListener("click", function() {
        questions.forEach(function(itemq) {
            if (itemq !== question) {
                itemq.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    })
})


// For Carousel

// const prevSlide = document.querySelector(".btn-prev");
// const nextSlide = document.querySelector(".btn-next");
// const carousels = document.querySelectorAll(".carousel");

// let curSlide = 0;

// let maxSlide = carousels.length - 1;

// nextSlide.addEventListener("click", function () {

//     if (curSlide === maxSlide) {
//         curSlide = 0;
//     } else {
//         curSlide++;

//     }
    

//     carousels.forEach((carousel, indx) => {
//         carousel.style.transform = `translate(${indx * 100}%)`;
//     });
// })

// prevSlide.addEventListener("click", function () {
//   // check if current slide is the first and reset current slide to last
//   if (curSlide === 0) {
//     curSlide = maxSlide;
//   } else {
//     curSlide--;
//   }

//   //   move slide by 100%
//     carousels.forEach((carousel, indx) => {
//         carousel.style.transform = `translate(${indx * 100}%)`;
//     });
// });

// carousels.forEach((carousel, indx) => {
//     carousel.style.transform = `translate(${indx * 100}%)`;
// });