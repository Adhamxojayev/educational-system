let rows = document.querySelectorAll('#tbodyElement tr')
tableSearch.onkeyup = (e) => {
    let searchKey = tableSearch.value.toLowerCase()
    tbodyElement.innerHTML = null
    let num = 0
    rows.forEach((row) => {
        let tdElements = row.childNodes
        let isTrue = true
        tdElements.forEach( el => {
            if(el.nodeName == 'TD' && el.textContent.toLocaleLowerCase().includes(searchKey)){
                if(isTrue){
                    isTrue = false
                    num++
                }
                row.childNodes[1].textContent = num
                tbodyElement.append(row)
            }
        })
 
    })
}