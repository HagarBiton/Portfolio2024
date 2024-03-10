//לאחר טעינת העמוד
document.addEventListener("DOMContentLoaded", function (event) {
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
      toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)
    
        toast.show()
      })
    }     
});


function searchfunc(){
   var phrase = document.getElementById("textsearch").value;
  //  const theword = phrase.textContent;
       const nodeList = document.querySelectorAll(".card-title");
       for (let i = 0; i < nodeList.length; i++) { 
        if(nodeList[i].textContent.includes(phrase)){
        //  let projectid = "project" + i.toString;
          // document.getElementById(projectid).classList.add("yellow");
          nodeList[i].classList.add("yellow");
        }
          else{
          const element = nodeList[i].closest(".card")
          element.classList.add("hide");
         }
       }
  }
