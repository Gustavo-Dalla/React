const TemplateExpressions = () => {
    const name = "Gustavo";
    //Atua como uma array para atribuir valores
    const data = {
        age: 17,
        job: "Student",
    };

    /*TUDO QUE FICA ENTRE CHAVE É JAVASCRIPT*/

    return (
        <div>
            <h1>Olá {name}, tudo certo?</h1>
            <p>Você tem {data.age} anos e atua como {data.job}</p>
            {console.log("Isto é Javascript")}
        </div>
    );
};

export default TemplateExpressions;