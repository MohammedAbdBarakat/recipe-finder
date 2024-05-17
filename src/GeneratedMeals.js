import { useParams } from "react-router-dom";
import GeneratedMealsRetrieve from "./GeneratedMealsRetrieve";

const GeneratedMeals = () => {
    const {Ing} = useParams();
    if (!Ing) {
        return <div>Ing is null</div>
    }

    return ( 
        <div>
            <GeneratedMealsRetrieve Ing={Ing} />
        </div>
    );
}

export default GeneratedMeals;