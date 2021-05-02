import { useState } from "react"
function Heroes(){
    const [names, setNames] = useState(
        [
            "Шерлок Холмс", 
            "Доктор Ватсон", 
            "Профессор Мориарти",
            "Миссис Хадсон",
            "Ирен Адлер"
          ]
    );
    const handleDelete = (it) => {
        const namesFilter= newNames.filter((item, index)=>{
            if(it != index){
                return true
            } return false
        });
        setNames(namesFilter);
    }
    const newNames = names.map((item,index) => 
    <li onClick={( () => {handleDelete(index)} )} key={index}>
        {item}
    </li>
    );
    
    return(
        <div>
            <ul>
                {newNames}
            </ul>
        </div>
    )
};
export default Heroes;