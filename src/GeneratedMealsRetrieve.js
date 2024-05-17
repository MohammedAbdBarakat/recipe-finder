const GeneratedMealsRetrieve = ({Ing}) => {

    if (Ing ===null){
        return <div>Ingredients is null</div>
    }
    return ( 
        <div>{Ing}</div>
    );
}

export default GeneratedMealsRetrieve;