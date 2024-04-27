const info = document.querySelector('.infos')


const allBtns = document.querySelectorAll('input[type="button"]')

function val(resultat) {
    Form.fenetre.value = form.fenetre.value + resultat
}


function calcule(){
    if(form.fenetre.value == ""){
        info.innerText = 'Veuillez ecrire un chiffre';
        allBtns.forEach(btn => {
            btn.addEventListener('click', function(){
                info.innerText = ""

            })
        })
    }else{
        form.fenetre.valeue = eval(form.fenetre.value)
    }

}
 
function suppr(){
    form.fenetre.value ="";
}