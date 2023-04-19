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
        this.headerH1Element.innerHTML = "Collection of Happiness";
        this.headerImgElement.src = "./images/squidward.webp"
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
    rightSection

    constructor(placeToRenderLeftSection, rightSection) {
        this.rightSection = rightSection;
        this.placeToRenderLeftSection = placeToRenderLeftSection;

        this.leftSectionElement = document.createElement("section");
        this.leftSectionElement.classList = ("section__left");

        this.listElement = document.createElement("ul");
        this.listElement.classList = ("episodes");
    }

    makeCardsFromData(data) {
        // Object.entries(data).forEach((entry) => {
        for (let i = 0; i < 4; i++) {

            this.listItemElement = document.createElement("li");
            this.listItemElement.classList = ("episodes__episode");

            this.listItemImgElement = document.createElement("img");
            this.listItemImgElement.classList = ("episodes__img");

            this.dateH3Element = document.createElement("h3");
            this.dateH3Element.classList = ("episodes__date");

            this.titleH3Element = document.createElement("h3");
            this.titleH3Element.classList = ("episodes__title");

            this.dateH3Element.innerHTML = data[i]["date (dd-mm-yyyy)"];
            this.titleH3Element.innerHTML = data[i]["title"];
            this.listItemImgElement.src = data[i]["image"];

            this.listElement.appendChild(this.listItemElement);
            this.listItemElement.appendChild(this.listItemImgElement);
            this.listItemElement.appendChild(this.dateH3Element);
            this.listItemElement.appendChild(this.titleH3Element);

            this.listItemElement.onclick = () => {
                this.rightSection.descriptionTitleElement.innerHTML = data[i]["title"];
                this.rightSection.descriptionDateElement.innerHTML = data[i]["date (dd-mm-yyyy)"];
                this.rightSection.descriptionImgElement.src = data[i]["image"];
                this.rightSection.descriptiontextElement.innerHTML = data[i]["summary"];
                this.rightSection.linkElement.href = data[i]["url"];
                this.rightSection.audioElement.src = data[i]["audio"];
            };
        }

        this.render();
    }

    render() {
        this.placeToRenderLeftSection.appendChild(this.leftSectionElement);

        this.leftSectionElement.appendChild(this.listElement);
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
    descriptionImgElement;
    buttonWrapperElement;
    audioElement;
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

        this.audioElement = document.createElement("audio");
        this.audioElement.classList = ("description__audio");
        this.audioElement.setAttribute("controls", true)

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

        this.buttonWrapperElement.appendChild(this.audioElement);
        this.buttonWrapperElement.appendChild(this.linkElement);
    }

    renderContent(data) {
        //header
        this.descriptionImgElement.src = data[0]["image"];
        this.descriptionDateElement.innerHTML = data[0]["date (dd-mm-yyyy)"];
        this.descriptionTitleElement.innerHTML = data[0]["title"];

        //text
        this.descriptiontextElement.innerHTML = data[0]["summary"];

        //audio
        this.audioElement.src = data[0]["audio"];

        //link
        this.linkElement.innerHTML = "source >";
        this.linkElement.href = data[0]["url"];
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
        this.rightSection = new RightSection(this.main.midSectionElement);
        this.leftSection = new LeftSection(this.main.midSectionElement, this.rightSection);
        this.footer = new Footer(this.main.mainElement);

        this.api.GetData().then(
            () => {
                this.leftSection.makeCardsFromData(this.api.data);
                this.rightSection.renderContent(this.api.data);
            }
        );
    }
}

const app = new App();