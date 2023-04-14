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



    //     <footer class="footer">
    //         <p class="footer__p">gemaakt door - Matthijs Jurriaans SD2C Media College Amsterdam</p>
    //     </footer>

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

    constructor(placeToRenderHeader) {
        this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];

        this.headerElement = document.createElement("header");
        this.headerElement.classList = ("header");

        this.headerFigureElement = document.createElement("figure");
        this.headerFigureElement.classList = ("header__figure");

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
    }
}

class Main {

    /*<main class="main">
 
<section class="midSection">
 
</section>
 
</main> */

    placeToRenderMain;
    mainElement;
    midSectionElement

    constructor(placeToRenderMain) {
        this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

        this.mainElement = document.createElement("main");
        this.mainElement.classList = ("Main");

        this.midSectionElement = document.createElement("section");
        this.midSectionElement.classList = ("midSection")

        this.render();
    }

    render() {
        this.placeToRenderMain.appendChild(this.mainElement);
        this.mainElement.appendChild(this.midSectionElement);
    }
}

class leftSection {

}

class rightSection {

}

class DetailCard {

}

class Footer {

}




class App {
    api;
    header;
    main;

    constructor() {
        this.api = new Api();
        this.header = new Header("body");
        this.main = new Main("body");

        this.api.GetData().then(
            () => {
                console.log(this.api.data);
            }
        );
    }
}

const app = new App();