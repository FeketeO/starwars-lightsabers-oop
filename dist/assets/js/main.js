var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class creation
// classic ligthsaber
var Lightsaber = /** @class */ (function () {
    function Lightsaber(name, id, saberColor, saberLight, hiltHeadType, hiltHeadStyle, hiltNeckType, hiltNeckStyle, hiltMidStyle, hiltEndStyle) {
        this.name = name;
        this.id = id;
        this.saberLight = saberLight;
        var container = document.querySelector('.container');
        var newSaber = document.createElement('div');
        newSaber.classList.add('lightsaber');
        newSaber.id = id;
        container.appendChild(newSaber);
        var newSaberSaber = document.createElement('div');
        newSaberSaber.classList.add('lightsaber__saber', saberColor, saberLight, 'closed');
        newSaber.appendChild(newSaberSaber);
        var newSaberHilt = document.createElement('div');
        newSaberHilt.classList.add('ligtsaber__hilt');
        newSaber.appendChild(newSaberHilt);
        var newSaberHiltHead = document.createElement('div');
        newSaberHiltHead.classList.add('lightsaber__hilt--head-' + hiltHeadType, 'hilt__' + hiltHeadStyle);
        newSaberHilt.appendChild(newSaberHiltHead);
        var newSaberHiltNeck = document.createElement('div');
        newSaberHiltNeck.classList.add('lightsaber__hilt--neck-' + hiltNeckType, 'hilt__' + hiltNeckStyle);
        newSaberHilt.appendChild(newSaberHiltNeck);
        var newSaberHiltMid = document.createElement('div');
        newSaberHiltMid.classList.add('lightsaber__hilt--mid', 'hilt__' + hiltMidStyle);
        newSaberHilt.appendChild(newSaberHiltMid);
        var newSaberHiltEnd = document.createElement('div');
        newSaberHiltEnd.classList.add('lightsaber__hilt--end', 'hilt__' + hiltEndStyle);
        newSaberHilt.appendChild(newSaberHiltEnd);
        var newName = document.createElement('span');
        newName.textContent = this.name;
        newSaber.appendChild(newName);
        var newController = document.createElement('p');
        newSaber.appendChild(newController);
        var newOnController = document.createElement('button');
        newOnController.textContent = 'I';
        newController.appendChild(newOnController);
        newOnController.addEventListener('click', this.open.bind(this));
        var newOffController = document.createElement('button');
        newOffController.textContent = 'O';
        newController.appendChild(newOffController);
        newOffController.addEventListener('click', this.close.bind(this));
        var newTable = document.createElement('a');
        newTable.textContent = this.title.apply(this);
        newSaber.appendChild(newTable);
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
        return "This lightsaber is owned by " + this.name + ", thanks to whom the crystal in it emits a beam of " + this.saberLight + " light.";
    };
    Lightsaber.prototype.spin = function () {
        var saber = document.querySelector("#" + this.id);
        saber.classList.toggle('spin');
    };
    return Lightsaber;
}());
var shortSaber = /** @class */ (function (_super) {
    __extends(shortSaber, _super);
    function shortSaber(name, id, saberColor, saberLight, hiltHeadType, hiltHeadStyle, hiltNeckType, hiltNeckStyle, hiltMidStyle, hiltEndStyle) {
        return _super.call(this, name, id, saberColor, saberLight, hiltHeadType, hiltHeadStyle, hiltNeckType, hiltNeckStyle, hiltMidStyle, hiltEndStyle) || this;
    }
    shortSaber.prototype.open = function () {
        var saber = document.querySelector("#" + this.id + " > div");
        saber.classList.remove('close-short', 'closed');
        saber.classList.add('open-short');
    };
    shortSaber.prototype.close = function () {
        var saber = document.querySelector("#" + this.id + " > div");
        saber.classList.remove('open-short');
        saber.classList.add('close-short');
    };
    return shortSaber;
}(Lightsaber));
var anakinSaber = new Lightsaber('Anakin Skywalker', 'anakin', 'light', 'blue', 'triangle', 'silver', 'none', 'silver', 'silver', 'black-silver');
var vaderSaber = new Lightsaber('Darth Vader', 'vader', 'light', 'red', 'triangle', 'black', 'none', 'black', 'black', 'black-silver');
/** --- Obi-Wan Kenobi fénykardja --- */
var obiwanSaber = new Lightsaber('Obi-Wan Kenobi', 'obiwan', 'light', 'blue', 'flat', 'black', 'simple', 'silver', 'black-silver-90', 'silver');
/** --- Mace Windu fénykardja --- */
var winduSaber = new Lightsaber('Mace Windu', 'windu', 'light', 'purple', 'rounded', 'silver', 'simple', 'black', 'silver', 'black');
/** --- Templomi gárdista fénykardja --- */
var templeSaber = new Lightsaber('Temple Guard', 'temple', 'light', 'orange', 'triangle', 'gold', 'simple', 'gold', 'white', 'gold');
/** --- DarkSaber fénykard --- */
var darkSaber = new Lightsaber('Darksaber', 'darksaber', 'dark', 'white', 'flat', 'black', 'simple', 'black', 'black', 'black');
/** --- Luke Skywalker fénykardja --- */
var lukeSaber = new Lightsaber('Luke Skywalker', 'luke', 'light', 'green', 'diskette', 'silver', 'thin', 'darksilver', 'black-silver-90', 'silver');
/** --- Ahsoka Tano fénykardja --- */
var ahsokaSaber = new Lightsaber('Ahsoka Tano', 'ahsoka', 'light', 'white', 'flat', 'silver', 'simple', 'silver', 'silver', 'silver');
/** --- Ahsoka Tano rövid fénykardja --- */
var ahsokaShort = new shortSaber('Ahsoka Tano', 'ahsoka-short', 'light', 'white', 'flat', 'silver', 'none', 'silver', 'silver', 'silver');
/** --- Yoda rövid fénykardja --- */
var yodaSaber = new shortSaber('Yoda', 'yoda', 'light', 'green', 'triangle', 'silver', 'none', 'silver', 'silver', 'black-silver');
/** --- Random fénykard --- */
var randomSaber = new Lightsaber('Troy Fortuna', 'fortuna', 'dark', 'orange', 'triangle', 'black-silver-90', 'thin', 'black-silver', 'black-silver-90', 'black-silver');
