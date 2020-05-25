class Game{
    constructor(){
        this.fields = document.querySelectorAll('.field')
        this.fields.forEach(field => {
            field.addEventListener('click' , this.handleFieldClick.bind(this))

        })
    }
    handleFieldClick(event){
        const index = event.target.id;
        console.log(index);

    }
}
window.addEventListener('load' , () => {
    const game = new Game();
    

}