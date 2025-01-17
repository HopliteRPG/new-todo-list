export{projectFormLogic}

function projectFormLogic(){
    const contentProjectDiv = document.querySelector(".contentProjectDiv");
    //Dialong and Modal Code 
    const dialog = document.querySelector(".projectDialog");
    const showBtn = document.querySelector(".addProjectButton");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.querySelector(".projectForm");
    
    showBtn.addEventListener("click", () => {
      dialog.showModal();
    });
    
    
    
    form.addEventListener("submit",(event) => {
      event.preventDefault();

    });
    
    
    
    
    closeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      dialog.close();
    });
    }