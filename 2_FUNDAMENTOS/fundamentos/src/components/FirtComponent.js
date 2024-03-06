import MyComponent from "./MyComponent";

const FirstComponent = () => {
    //Comentário
    /*Comentário*/
    return (
        <div>
            {/*Comentário em jsx*/}
            <h1>Meu primeiro componente</h1>
            <p className="texto">Está é a estrutura base.</p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;