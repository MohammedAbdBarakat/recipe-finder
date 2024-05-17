import SavedMeals from "./SavedMeals";
import useFetch from "./useFetch";

const Saved = ({ userID }) => {
    const { data: user } = useFetch(`http://localhost:8888/user/${userID}`);
    if (!user) {
        return <div>User data not available.</div>;
    }

    let meals = []
    user.savedMeals.map((name) => {meals.push(name)})
    return (
        <div>
            {user && <SavedMeals meals={meals} />}
        </div>
    );
};

export default Saved;
