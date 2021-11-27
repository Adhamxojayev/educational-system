const delButtons = document.querySelectorAll('.del')

for(let button of delButtons){
    button.onclick = async () => {
        let response = confirm(' o`chirishni tastiqlaysizmi? ')
        let ID = button.dataset.id
        if(response){
            let res = await fetch('/admin/students', {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ID})
            })
            if(res.status == 204){
                window.location.href = "/admin/students"
            }else{
                alert(' o`chirishda hatolik yuz berdi ! ')
            }
        }
    }
}