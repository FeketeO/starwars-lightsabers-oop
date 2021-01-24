interface ILightsaber {

    // Név
    name: string;
    id: string;

    // Penge
    saberColor: string;         // light | dark
    saberLight: string;         // red | green | blue | orange | purple | white

    // Markolat
    hiltHeadType: string;       // diskette | triangle | flat | rounded
    hiltHeadStyle: string;      // silver | darksilver | black-silver | black-silver-90 | black | gold | white
    hiltNeckType: string;       // simple | thin | none
    hiltNeckStyle: string;
    hiltMidStyle: string;
    hiltEndStyle: string;

    // Metódusok
    open(): void;
    close(): void;
    title(): void;
    spin(): void;
  };




class Lightsaber implements ILightsaber {

    name: string;
    id: string;
    saberColor: string;
    saberLight: string;
    hiltHeadType: string;
    hiltHeadStyle: string;
    hiltNeckType: string;
    hiltNeckStyle: string;
    hiltMidStyle: string;
    hiltEndStyle: string;

    constructor (name: string, id: string, saberColor: string, saberLight: string, hiltHeadType: string, hiltHeadStyle: string, hiltNeckType: string, hiltNeckStyle: string, hiltMidStyle: string, hiltEndStyle: string) {
        this.name = name;
        this.id = id;
        this.saberLight = saberLight;

        const container = document.querySelector('.container');

        let newSaber = document.createElement("div");
        newSaber.classList.add('lightsaber');
        newSaber.id = id;
        container.appendChild(newSaber);

        let newSaberSaber = document.createElement("div");
        newSaberSaber.classList.add('lightsaber__saber', saberColor, saberLight, 'closed');
        newSaber.appendChild(newSaberSaber);

        let newSaberHilt = document.createElement("div");
        newSaberHilt.classList.add('lightsaber__hilt');
        newSaber.appendChild(newSaberHilt);

        let newSaberHilt1 = document.createElement("div");
        newSaberHilt1.classList.add('lightsaber__hilt--1-'+hiltHeadType, 'hilt__'+hiltHeadStyle);
        newSaberHilt.appendChild(newSaberHilt1);

        let newSaberHilt2 = document.createElement("div");
        newSaberHilt2.classList.add('lightsaber__hilt--2-'+hiltNeckType, 'hilt__'+hiltNeckStyle);
        newSaberHilt.appendChild(newSaberHilt2);

        let newSaberHilt3 = document.createElement("div");
        newSaberHilt3.classList.add('lightsaber__hilt--3', 'hilt__'+hiltMidStyle);
        newSaberHilt.appendChild(newSaberHilt3);

        let newSaberHilt4 = document.createElement("div");
        newSaberHilt4.classList.add('lightsaber__hilt--4', 'hilt__'+hiltEndStyle);
        newSaberHilt.appendChild(newSaberHilt4);

        let newName = document.createElement("span");
        newName.textContent = this.name;
        newSaber.appendChild(newName);

        let newController = document.createElement("p");
        newSaber.appendChild(newController);

        let newOnController = document.createElement("button");
        newOnController.textContent = 'I';
        newController.appendChild(newOnController);
        newOnController.addEventListener('click', this.open.bind(this));

        let newOffController = document.createElement("button");
        newOffController.textContent = 'O';
        newController.appendChild(newOffController);
        newOffController.addEventListener('click', this.close.bind(this));

    }

    open(): void {
        let saber = document.querySelector(`#${this.id} > div`);
        saber.classList.remove('close', 'closed');
        saber.classList.add('open');
    }

    close(): void {
        let saber = document.querySelector(`#${this.id} > div`);
        saber.classList.remove('open');
        saber.classList.add('close');
    }

    title(): string {
        return (`Ez a fénykard ${this.name} tulajdona, akinek köszönhetően a benne található kristály ${this.saberLight} színű fénnyalábot sugároz ki.`);
    }

    spin(): void {
        let saber = document.querySelector(`#${this.id}`);
        saber.classList.toggle('spin');
    }

}


// Anakin Skywalker fénykardja
const anakinSaber =  new Lightsaber('Anakin Skywalker', 'anakin', 'light', 'blue', 'triangle', 'silver', 'none', 'silver', 'silver', 'black-silver');

// Darth Vader fénykardja
const vaderSaber = new Lightsaber('Darth Vader', 'vader', 'light', 'red', 'triangle', 'black', 'none', 'black', 'black', 'black-silver');

// Obi-Wan Kenobi fénykard
const obiwanSaber =  new Lightsaber('Obi-Wan Kenobi', 'obiwan', 'light', 'blue', 'flat', 'black', 'simple', 'silver', 'black-silver-90', 'silver');

// Yoda fénykardja
const yodaSaber =  new Lightsaber('Yoda', 'yoda', 'light', 'green', 'triangle', 'silver', 'none', 'silver', 'silver', 'black-silver');

// Mace Windu fénykardja
const winduSaber =  new Lightsaber('Mace Windu', 'windu', 'light', 'purple', 'rounded', 'silver', 'simple', 'black', 'silver', 'black');

// Templomi gárdista fénykardja
const templeSaber =  new Lightsaber('Temple Guard', 'temple', 'light', 'orange', 'triangle', 'gold', 'simple', 'gold', 'white', 'gold');

// Ahsoka Tano fénykardja
const ahsokaSaber =  new Lightsaber('Ahsoka Tano', 'ahsoka', 'light', 'white', 'flat', 'silver', 'simple', 'silver', 'silver', 'silver');

// Darksaber fénykard
const darkSaber =  new Lightsaber('Darksaber', 'darksaber', 'dark', 'white', 'flat', 'black', 'simple', 'black', 'black', 'black');

// Luke Skywalker fénykardja
const lukeSaber =  new Lightsaber('Luke Skywalker', 'luke', 'light', 'green', 'diskette', 'silver', 'thin', 'darksilver', 'black-silver-90', 'silver');


const randomSaber =  new Lightsaber('Random Saber', 'randomsaber', 'light', 'orange', 'diskette', 'gold', 'thin', 'darksilver', 'white', 'darksilver');