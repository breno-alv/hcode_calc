class CalcControler {

    constructor(){
        this._displayCalc ="0";
        this._currentDate;
        this.initialize();
    }

    initialize(){
        
        let displayCalcEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = "12345";
        dateEl.innerHTML = "05/10/2020";
        timeEl.innerHTML = "17:00";
    }



    get displayCalc(){

        return this._displayCal;

    }

    set displayCalc(valor){

        this._displayCalc = valor;

    }

    get currentDate(){

        return this.currentDate;

    }

    set currentDate(valor){

        this._displayCalc = valor;

    }
}
