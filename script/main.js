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

}

class LeftPanel {

}

class RightPanel {

}

class DetailCard {

}

class Footer {

}




class App {
    api;

    constructor(){
        this.api = new Api();

        this.api.GetData().then(
            () => {
                console.log(this.api.data);
            }
        );
    }
}

const app = new App();