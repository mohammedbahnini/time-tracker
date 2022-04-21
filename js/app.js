const data ={
    work : {
        daily : {
            current : 5 , 
            previous : 7 , 
            pervious_keyword : "Yesterday"
        } , 
        weekly : {
            current : 32 , 
            previous : 36, 
            pervious_keyword : "Last week"
        }, 
        monthly : {
            current : 103 , 
            previous : 128, 
            pervious_keyword : "Last month"
        }
    } , 
    play : {
        daily : {
            current : 1 , 
            previous : 2 , 
            pervious_keyword : "Yesterday"
        } , 
        weekly : {
            current : 10 , 
            previous : 8 , 
            pervious_keyword : "Last week"
        }, 
        monthly : {
            current : 23 , 
            previous : 29 , 
            pervious_keyword : "Last month"
        }
    } , 
    study : {
        daily : {
            current : 0 , 
            previous : 1 , 
            pervious_keyword : "Yesterday"
        } , 
        weekly : {
            current : 4 , 
            previous : 7 , 
            pervious_keyword : "Last week"
        }, 
        monthly : {
            current : 13 , 
            previous : 19 , 
            pervious_keyword : "Last month"
        }
    } , 
    exercice : {
        daily : {
            current : 1 , 
            previous : 1 , 
            pervious_keyword : "Yesterday"
        } , 
        weekly : {
            current : 4 , 
            previous : 5 , 
            pervious_keyword : "Last week"
        }, 
        monthly : {
            current : 11 , 
            previous : 18 , 
            pervious_keyword : "Last month"
        }
    } , 
    social : {
        daily : {
            current : 1 , 
            previous : 3 , 
            pervious_keyword : "Yesterday"
        } , 
        weekly : {
            current : 5 , 
            previous : 10 , 
            pervious_keyword : "Last week"
        }, 
        monthly : {
            current : 21 , 
            previous : 23 , 
            pervious_keyword : "Last month"
        }
    } , 
    self_care : {
        daily : {
            current : 0 , 
            previous : 1 , 
            pervious_keyword : "Yesterday"
        } , 
        weekly : {
            current : 2 , 
            previous : 2 , 
            pervious_keyword : "Last week"
        }, 
        monthly : {
            current : 7 , 
            previous : 11 , 
            pervious_keyword : "Last month"
        }
    }
}

const active_item = document.querySelector('.cat-item.active');
const items = document.querySelectorAll(".cat-item");
const cols =document.querySelectorAll(".col");

const display = (item)=>{
    items.forEach( item =>{
        item.classList.remove('active');
    })
    item.classList.add('active');
    const type = item.dataset.key;
    cols.forEach( col =>{
        const col_key =col.dataset.key ;
        if( col_key )
        {
            const current_data= data[col_key][type];
            col.querySelector('.current-hours span').innerHTML= current_data.current;
            col.querySelector('.previous-keyword').innerText = current_data.pervious_keyword;
            col.querySelector('.previous').innerText = current_data.previous;
        }
    })
}   

display(active_item);

items.forEach( item => {
    item.addEventListener( 'click' , ()=>{
        display(item)
    });
})

