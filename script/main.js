class Api {
    data;

    async GetData() {
        await fetch("../data/data.json").then(function (response) {
            console.log("data word opgehaald");
            return response.json();
        }).then((data) => {
            this.data = data.episodes;
            console.log("data opgehaald");
        });
        return;
    }
}

class Header {

    // <header class="header">
    //     <figure class="header__figure">
    //         <img src="./images/logo.png" alt="foto van handsome squidward" class="header__img">
    //     </figure>
    //     <h1 class="header__title">Episodes</h1>
    // </header>

    placeToRenderHeader;
    headerElement;
    headerFigureElement;
    headerImgElement;
    headerH1Element;

    constructor(placeToRenderHeader) {
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];

        this.headerElement = document.createElement("header");
        this.headerElement.classList = ("header");

        this.headerFigureElement = document.createElement("figure");
        this.headerFigureElement.classList = ("header__figure");

        //voeg source aan img element toe
        this.headerImgElement = document.createElement("img");
        this.headerImgElement.classList = ("header__img");

        this.headerH1Element = document.createElement("h1");
        this.headerH1Element.classList = ("header__title");



        this.render();
    }

    render() {
        this.placeToRenderHeader.appendChild(this.headerElement);

        this.headerElement.appendChild(this.headerFigureElement);
        this.headerElement.appendChild(this.headerH1Element);

        this.headerFigureElement.appendChild(this.headerImgElement);

        this.renderContent();
    }

    renderContent() {
        this.headerH1Element.innerHTML = "Episodes";
        this.headerImgElement.src = "./images/logo.png"
    }
}

class Main {

    // <main class="main">
    //     <section class="midSection">
    //     </section>
    // </main>

    placeToRenderMain;
    mainElement;
    midSectionElement

    constructor(placeToRenderMain) {
        this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = ("main");

        this.midSectionElement = document.createElement("section");
        this.midSectionElement.classList = ("midSection")

        this.render();
    }

    render() {
        this.placeToRenderMain.appendChild(this.mainElement);
        this.mainElement.appendChild(this.midSectionElement);
    }
}

class LeftSection {

    // <section class="section__left">

    //     <ul class="episodes">
    //         <div class="episodes__grouper">
    //             <li class="episodes__episode">
    //                 <h3 class="episodes__date">Datum</h3>
    //                 <h3 class="episodes__title">Title</h3>
    //             </li>
    //             <li class="episodes__episode">
    //                 <h3 class="episodes__date">Datum</h3>
    //                 <h3 class="episodes__title">Title</h3>
    //             </li>
    //         </div>
    //         <div class="episodes__grouper">
    //             <li class="episodes__episode">
    //                 <h3 class="episodes__date">Datum</h3>
    //                 <h3 class="episodes__title">Title</h3>
    //             </li>
    //             <li class="episodes__episode">
    //                 <h3 class="episodes__date">Datum</h3>
    //                 <h3 class="episodes__title">Title</h3>
    //             </li>
    //         </div>
    //     </ul>

    // </section>
    placeToRenderLeftSection;
    leftSectionElement;
    listElement;
    grouperElement1;
    grouperElement2;

    constructor(placeToRenderLeftSection) {
        this.placeToRenderLeftSection = placeToRenderLeftSection;

        this.leftSectionElement = document.createElement("section");
        this.leftSectionElement.classList = ("section__left");

        this.listElement = document.createElement("ul");
        this.listElement.classList = ("episodes");

        this.grouperElement1 = document.createElement("div");
        this.grouperElement1.classList = ("episodes__grouper");

        this.grouperElement2 = document.createElement("div");
        this.grouperElement2.classList = ("episodes__grouper");

        // 1
        this.listItemElement1 = document.createElement("li");
        this.listItemElement1.classList = ("episodes__episode");

        this.listItemImgElement1 = document.createElement("img");
        this.listItemImgElement1.classList = ("episodes__img")

        this.dateH3Element1 = document.createElement("h3");
        this.dateH3Element1.classList = ("episodes__date");

        this.titleH3Element1 = document.createElement("h3");
        this.titleH3Element1.classList = ("episodes__title");

        // 2
        this.listItemElement2 = document.createElement("li");
        this.listItemElement2.classList = ("episodes__episode");

        this.listItemImgElement2 = document.createElement("img");
        this.listItemImgElement2.classList = ("episodes__img")

        this.dateH3Element2 = document.createElement("h3");
        this.dateH3Element2.classList = ("episodes__date");

        this.titleH3Element2 = document.createElement("h3");
        this.titleH3Element2.classList = ("episodes__title");

        // 3
        this.listItemElement3 = document.createElement("li");
        this.listItemElement3.classList = ("episodes__episode");

        this.listItemImgElement3 = document.createElement("img");
        this.listItemImgElement3.classList = ("episodes__img")

        this.dateH3Element3 = document.createElement("h3");
        this.dateH3Element3.classList = ("episodes__date");

        this.titleH3Element3 = document.createElement("h3");
        this.titleH3Element3.classList = ("episodes__title");

        // 4
        this.listItemElement4 = document.createElement("li");
        this.listItemElement4.classList = ("episodes__episode");

        this.listItemImgElement4 = document.createElement("img");
        this.listItemImgElement4.classList = ("episodes__img")

        this.dateH3Element4 = document.createElement("h3");
        this.dateH3Element4.classList = ("episodes__date");

        this.titleH3Element4 = document.createElement("h3");
        this.titleH3Element4.classList = ("episodes__title");


        this.render();
    }

    render() {
        this.placeToRenderLeftSection.appendChild(this.leftSectionElement);

        this.leftSectionElement.appendChild(this.listElement);

        this.listElement.appendChild(this.grouperElement1);
        this.listElement.appendChild(this.grouperElement2);

        // 1
        this.grouperElement1.appendChild(this.listItemElement1);

        this.listItemElement1.appendChild(this.listItemImgElement1);
        this.listItemElement1.appendChild(this.dateH3Element1);
        this.listItemElement1.appendChild(this.titleH3Element1);

        // 2
        this.grouperElement1.appendChild(this.listItemElement2);

        this.listItemElement2.appendChild(this.listItemImgElement2);
        this.listItemElement2.appendChild(this.dateH3Element2);
        this.listItemElement2.appendChild(this.titleH3Element2);

        // 3
        this.grouperElement2.appendChild(this.listItemElement3);

        this.listItemElement3.appendChild(this.listItemImgElement3);
        this.listItemElement3.appendChild(this.dateH3Element3);
        this.listItemElement3.appendChild(this.titleH3Element3);

        // 4
        this.grouperElement2.appendChild(this.listItemElement4);

        this.listItemElement4.appendChild(this.listItemImgElement4);
        this.listItemElement4.appendChild(this.dateH3Element4);
        this.listItemElement4.appendChild(this.titleH3Element4);


        this.renderContent();
    }

    renderContent() {

        // date
        this.dateH3Element1.innerHTML = "datum";
        this.dateH3Element2.innerHTML = "datum";
        this.dateH3Element3.innerHTML = "datum";
        this.dateH3Element4.innerHTML = "datum";

        // title
        this.titleH3Element1.innerHTML = "title";
        this.titleH3Element2.innerHTML = "title";
        this.titleH3Element3.innerHTML = "title";
        this.titleH3Element4.innerHTML = "title";

        //img
        this.listItemImgElement1.src = "./images/logo.png";    
        this.listItemImgElement2.src = "./images/logo.png";        
        this.listItemImgElement3.src = "./images/logo.png";
        this.listItemImgElement4.src = "./images/logo.png";

    }

}

class RightSection {

    // <section class="section__right">
    //     <div class="description__header">
    //         <h3 class="description__date">Datum</h3>
    //         <h3 class="description__title">Title</h3>
    //     </div>
    //     <p class="description__text">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum enim nemo, neque beatae a unde,
    //         necessitatibus laboriosam culpa atque itaque facilis, doloribus libero suscipit qui repellat aut
    //         minima.
    //         Perferendis!
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum enim nemo, neque beatae a unde,
    //         necessitatibus laboriosam culpa atque itaque facilis, doloribus libero suscipit qui repellat aut
    //         minima.
    //         Perferendis!
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum enim nemo, neque beatae a unde,
    //         necessitatibus laboriosam culpa atque itaque facilis, doloribus libero suscipit qui repellat aut
    //         minima.
    //         Perferendis!
    //     </p>
    //     <div class="description__buttonWrapper">
    //         <button class="description__button">Audio object</button>
    //         <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="description__link">source ></a>
    //     </div>

    // </section>

    placeToRenderRightSection;
    rightSectionELement;
    descriptionHeaderElement;
    descriptionDateElement;
    descriptionTitleElement;
    descriptiontextElement;
    buttonWrapperElement;
    buttonElement;
    linkElement;

    constructor(placeToRenderRightSection) {
        this.placeToRenderRightSection = placeToRenderRightSection;

        this.rightSectionELement = document.createElement("section");
        this.rightSectionELement.classList = ("section__right");

        this.descriptionHeaderElement = document.createElement("div");
        this.descriptionHeaderElement.classList = ("description__header");

        this.descriptionImgElement = document.createElement("img");
        this.descriptionImgElement.classList = ("description__img");

        this.descriptionDateElement = document.createElement("h3");
        this.descriptionDateElement.classList = ("description__date");

        this.descriptionTitleElement = document.createElement("h3");
        this.descriptionTitleElement.classList = ("description__title");

        this.descriptiontextElement = document.createElement("p");
        this.descriptiontextElement.classList = ("description__text");

        this.buttonWrapperElement = document.createElement("div");
        this.buttonWrapperElement.classList = ("description__buttonWrapper");

        this.buttonElement = document.createElement("button");
        this.buttonElement.classList = ("description__button");

        this.linkElement = document.createElement("a");
        this.linkElement.classList = ("description__link");


        this.render();
    }

    render() {
        this.placeToRenderRightSection.appendChild(this.rightSectionELement);

        this.rightSectionELement.appendChild(this.descriptionHeaderElement);
        this.rightSectionELement.appendChild(this.descriptiontextElement);
        this.rightSectionELement.appendChild(this.buttonWrapperElement);

        this.descriptionHeaderElement.appendChild(this.descriptionImgElement);
        this.descriptionHeaderElement.appendChild(this.descriptionDateElement);
        this.descriptionHeaderElement.appendChild(this.descriptionTitleElement);

        this.buttonWrapperElement.appendChild(this.buttonElement);
        this.buttonWrapperElement.appendChild(this.linkElement);

        this.renderContent();
    }

    renderContent() {
        //header
        this.descriptionImgElement.src = "./images/logo.png";
        this.descriptionDateElement.innerHTML = "datum";
        this.descriptionTitleElement.innerHTML = "title";

        //text
        this.descriptiontextElement.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum enim nemo, neque beatae a unde, necessitatibus laboriosam culpa atque itaque facilis, doloribus libero suscipit qui repellat aut minima. Perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint ipsum enim nemo, neque beatae a unde, necessitatibus laboriosam culpa atque itaque facilis, doloribus libero suscipit qui repellat aut  minima. Perferendis!         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsum enim nemo, neque beatae a unde, necessitatibus laboriosam culpa atque itaque facilis, doloribus libero suscipit qui repellat aut minima. Perferendis!";
            
        //button
        this.buttonElement.innerHTML = "Audioobject";
        this.linkElement.innerHTML = "source >";

    }

}

class Footer {

    //     <footer class="footer">
    //         <p class="footer__p">gemaakt door - Matthijs Jurriaans SD2C Media College Amsterdam</p>
    //     </footer>

    placeToRenderFooter;
    footerElement;
    footerParagraphElement;

    constructor(placeToRenderFooter) {
        this.placeToRenderFooter = placeToRenderFooter;

        this.footerElement = document.createElement("footer");
        this.footerElement.classList = ("footer");

        this.footerParagraphElement = document.createElement("p");
        this.footerParagraphElement.classList = ("footer__p")

        this.render();
    }

    render() {
        this.placeToRenderFooter.appendChild(this.footerElement);
        this.footerElement.appendChild(this.footerParagraphElement);
        this.renderContent();
    }

    renderContent() {
        this.footerParagraphElement.innerHTML = "gemaakt door - Matthijs Jurriaans SD2C Media College Amsterdam";
    }

}




class App {
    api;
    header;
    main;
    leftSection;
    rightSection;
    footer;

    constructor() {
        this.api = new Api();
        this.header = new Header("body");
        this.main = new Main("body");
        this.leftSection = new LeftSection(this.main.midSectionElement);
        this.rightSection = new RightSection(this.main.midSectionElement);
        this.footer = new Footer(this.main.mainElement);

        this.api.GetData().then(
            () => {
                console.log(this.api.data);
            }
        );
    }
}

const app = new App();