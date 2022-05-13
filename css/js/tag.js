document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase() /*box é o nome do elemento; tagName é o nome do elemento*/
    box.style.borderColor = '#616161'

    if(!box.classList.contains('nolabel')) {
        const label = document.createElement('label') /*injeta a label em todos os elementos que tiverem marcados com a classe tag*/
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName/*coloca o tagName dentro do label*/
        box.insertBefore(label, box.childNodes[0]) /*vai inserir no 1o elemento que estiver no elemento box*/
    } /*dentro do elemento box, temos um lista de classes que eu posso aplicar esse elemento. Está contido na lista de classes o 'nolabel'? Se tiver, não entre no trecho. Se não tiver, ele vai aplicar o label*/
})