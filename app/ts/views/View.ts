class View<T>{
    protected _elemento: Element;

    constructor(selector: string) {
        this._elemento = document.querySelector(selector);
    }

    update(model: T) {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: T): string {
        throw new Error('Voce deve implementar o metodo template!')
    }
}