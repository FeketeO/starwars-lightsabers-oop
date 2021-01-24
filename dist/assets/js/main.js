;
var Lightsaber = /** @class */ (function () {
    function Lightsaber(name, id, saberColor, saberLight, hiltHeadType, hiltHeadStyle, hiltNeckType, hiltNeckStyle, hiltMidStyle, hiltEndStyle) {
        this.name = name;
        this.id = id;
        this.saberLight = saberLight;
        var container = document.querySelector('.container');
        var newSaber = document.createElement("div");
        newSaber.classList.add('lightsaber');
        newSaber.id = id;
        container.appendChild(newSaber);
        var newSaberSaber = document.createElement("div");
        newSaberSaber.classList.add('lightsaber__saber', saberColor, saberLight, 'closed');
        newSaber.appendChild(newSaberSaber);
        var newSaberHilt = document.createElement("div");
        newSaberHilt.classList.add('lightsaber__hilt');
        newSaber.appendChild(newSaberHilt);
        var newSaberHilt1 = document.createElement("div");
        newSaberHilt1.classList.add('lightsaber__hilt--1-' + hiltHeadType, 'hilt__' + hiltHeadStyle);
        newSaberHilt.appendChild(newSaberHilt1);
        var newSaberHilt2 = document.createElement("div");
        newSaberHilt2.classList.add('lightsaber__hilt--2-' + hiltNeckType, 'hilt__' + hiltNeckStyle);
        newSaberHilt.appendChild(newSaberHilt2);
        var newSaberHilt3 = document.createElement("div");
        newSaberHilt3.classList.add('lightsaber__hilt--3', 'hilt__' + hiltMidStyle);
        newSaberHilt.appendChild(newSaberHilt3);
        var newSaberHilt4 = document.createElement("div");
        newSaberHilt4.classList.add('lightsaber__hilt--4', 'hilt__' + hiltEndStyle);
        newSaberHilt.appendChild(newSaberHilt4);
        var newName = document.createElement("span");
        newName.textContent = this.name;
        newSaber.appendChild(newName);
        var newController = document.createElement("p");
        newSaber.appendChild(newController);
        var newOnController = document.createElement("button");
        newOnController.textContent = 'I';
        newController.appendChild(newOnController);
        newOnController.addEventListener('click', this.open.bind(this));
        var newOffController = document.createElement("button");
        newOffController.textContent = 'O';
        newController.appendChild(newOffController);
        newOffController.addEventListener('click', this.close.bind(this));
    }
    Lightsaber.prototype.open = function () {
        var saber = document.querySelector("#" + this.id + " > div");
        saber.classList.remove('close', 'closed');
        saber.classList.add('open');
    };
    Lightsaber.prototype.close = function () {
        var saber = document.querySelector("#" + this.id + " > div");
        saber.classList.remove('open');
        saber.classList.add('close');
    };
    Lightsaber.prototype.title = function () {
        return ("Ez a f\u00E9nykard " + this.name + " tulajdona, akinek k\u00F6sz\u00F6nhet\u0151en a benne tal\u00E1lhat\u00F3 krist\u00E1ly " + this.saberLight + " sz\u00EDn\u0171 f\u00E9nnyal\u00E1bot sug\u00E1roz ki.");
    };
    Lightsaber.prototype.spin = function () {
        var saber = document.querySelector("#" + this.id);
        saber.classList.toggle('spin');
    };
    return Lightsaber;
}());
// Anakin Skywalker fénykardja
var anakinSaber = new Lightsaber('Anakin Skywalker', 'anakin', 'light', 'blue', 'triangle', 'silver', 'none', 'silver', 'silver', 'black-silver');
// Darth Vader fénykardja
var vaderSaber = new Lightsaber('Darth Vader', 'vader', 'light', 'red', 'triangle', 'black', 'none', 'black', 'black', 'black-silver');
// Obi-Wan Kenobi fénykard
var obiwanSaber = new Lightsaber('Obi-Wan Kenobi', 'obiwan', 'light', 'blue', 'flat', 'black', 'simple', 'silver', 'black-silver-90', 'silver');
// Yoda fénykardja
var yodaSaber = new Lightsaber('Yoda', 'yoda', 'light', 'green', 'triangle', 'silver', 'none', 'silver', 'silver', 'black-silver');
// Mace Windu fénykardja
var winduSaber = new Lightsaber('Mace Windu', 'windu', 'light', 'purple', 'rounded', 'silver', 'simple', 'black', 'silver', 'black');
// Templomi gárdista fénykardja
var templeSaber = new Lightsaber('Temple Guard', 'temple', 'light', 'orange', 'triangle', 'gold', 'simple', 'gold', 'white', 'gold');
// Ahsoka Tano fénykardja
var ahsokaSaber = new Lightsaber('Ahsoka Tano', 'ahsoka', 'light', 'white', 'flat', 'silver', 'simple', 'silver', 'silver', 'silver');
// Darksaber fénykard
var darkSaber = new Lightsaber('Darksaber', 'darksaber', 'dark', 'white', 'flat', 'black', 'simple', 'black', 'black', 'black');
// Luke Skywalker fénykardja
var lukeSaber = new Lightsaber('Luke Skywalker', 'luke', 'light', 'green', 'diskette', 'silver', 'thin', 'darksilver', 'black-silver-90', 'silver');
var randomSaber = new Lightsaber('Random Saber', 'randomsaber', 'light', 'orange', 'diskette', 'gold', 'thin', 'darksilver', 'white', 'darksilver');
