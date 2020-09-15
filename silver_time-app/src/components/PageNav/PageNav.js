import React, { useState } from 'react';
import "./pageNav.css"
import Pages from "../PageNav/Pages"


/*
-tlačítko úplně na začátek
-tlčítko o stránku zpět
input s číslem stránky
štítek s celkovým počtem stránek
-tlačítko o jeden vpřed
-tlačítko úplně nakonec
z props chodí: 
page
lastPage
*/

function PageNav() {
    
    const page = Pages.page;
    const lastPage = Pages.lastPage;
    const [currentPage, setCurrentPage] = useState(page);


    return(
        
    <div className="navPanel">
        <button onClick={() => setCurrentPage(1)}>
        |◄
        </button>

        <button onClick={() => setCurrentPage(currentPage>1 ? currentPage - 1 : 1)}>
        ◄
        </button>

    <label>
    <input type="number"  min="1" max={lastPage}  onChange={(e) => (e.target.value>=1 && e.target.value<=lastPage ? setCurrentPage(e.target.value) : currentPage)}/>
                            &nbsp;strana {currentPage} z {lastPage}
    </label>

        <button onClick={() => setCurrentPage(currentPage<lastPage ? currentPage + 1 : lastPage)}>
        ►
        </button>

        <button onClick={() => setCurrentPage(lastPage)}>
        ►|
        </button>
    
    </div>
);
    };



export default PageNav;
