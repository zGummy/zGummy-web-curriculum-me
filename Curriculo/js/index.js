window.onload = function () {
    buttons = document.querySelectorAll("nav button");//pega todos os botões do elemento nav
    for (let button of buttons) {
        button.onclick = () => openTab(button.dataset.tabname);//pegando o evento clique de cada botão, com isso chamando e passando os argumentoes (button, dataset,tabname)
    }

    openTab("Curriculo");//ja deixa marcado o botão BCC
}

function openTab(tabName) {//func. para abrir as tabs (ou os botões inseridos)

    //faz com que a tab que esta sendo exibida atualmente, se torne oculta, e o botão que está ativo fique inativo (o azul no caso)
    const lastTabActive = document.querySelector(".tabActive");
    if (lastTabActive !== null)//condição se a ultima tab que foi ativada está diferente de Null (para desativar)
        lastTabActive.className = "";//remove a classe que deixa ativo

    //  e o botão que está ativo fique inativo (o azul no caso)
    const lastButtonActive = document.querySelector(".buttonActive");
    if (lastButtonActive != null)//condição se o ultimo botão que foi ativada está diferente de Null (para desativar)
        lastButtonActive.className = "";//remove a classe que deixa ativo

    const query1 = ".tabs > section[data-tabname='" + tabName + "']";//string CSS com o seletor de atributo que é igual ao tabName
    const query2 = "nav button[data-tabname='" + tabName + "']";//igual a explicação de cima

    document.querySelector(query1).className = "tabActive";
    document.querySelector(query2).className = "buttonActive";
}

