import React from "react";
import "./pageNav.css"


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

const PageNav = () => {
    console.log("aye aye");
return(
    <div className="navPanel">
    <button>|◄</button>
    <button>◄</button>
    <label>
    <input type="text" pattern="[1-9]*"
      />
                            &nbsp;Page
    </label>
    <button>►</button>
    <button>►|</button>
    </div>
);
};




export default PageNav;