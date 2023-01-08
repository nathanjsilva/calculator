class CalcController {

    constructor(){

        this._displayCalc = "0";// colocando this ao invés de var, faz com que eu possa utilizar em qualquer lugar
        this._currentDate;
        this.initialize();

    }

    //inicia tudo 
    initialize(){

        let displayCalEl = document.querySelector("#display");
        let dateEl  = document.querySelector("#data");
        let timeEl  = document.querySelector("#hora");

        displayCalEl.innerHTML = "4567";//O innerHTML é uma propriedade do Element que define ou retorna o conteúdo HTML de um elemento.
        dateEl.innerHTML = "12/12/2022";//O innerHTML é uma propriedade do Element que define ou retorna o conteúdo HTML de um elemento.
        timeEl.innerHTML = "00:00";//O innerHTML é uma propriedade do Element que define ou retorna o conteúdo HTML de um elemento.

    }

    //retorna o value já setado
    get displayCalc(){
        return this._displayCalc;
    }

    //muda o valor
    set displayCalc(value){
        this._displayCalc = value;
    }

    //retorna o value já setado
    get currentDate(){
        return this._currentDate;
    }

    //muda o value
    set currentDate(value){
        this._currentDate = value;
    }
}