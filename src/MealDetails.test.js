import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MealDetails from './MealDetails';

describe('MealDetails component', () => { //mock the API call.
    it('saves a recipe when the save button is clicked', () => {
        const recipes = [
            {
                idMeal: "52982",
                strMeal: 'Spaghetti alla Carbonara',
                strMealThumb: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
            }
        ];
        const userID = '0';

        // Render the MealDetails component
        const { getByText } = render(<MealDetails recipes={recipes} userID={userID} />);

        // Mock the fetch call
        const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue({
                "id": "0",
                "FirstName": "admin",
                "LastName": "admin",
                "userName": "admin",
                "password": "admin",
                "savedMeals": [
                    {
                        "mealId": "52794",
                        "mealName": "Vegan Chocolate Cake",
                        "mealImg": "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg"
                    },
                    {
                        "mealId": "52829",
                        "mealName": "Grilled Mac and Cheese Sandwich",
                        "mealImg": "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg"
                    },
                    {
                        "mealId": "53050",
                        "mealName": "Ayam Percik",
                        "mealImg": "https://www.themealdb.com/images/media/meals/020z181619788503.jpg"
                    },
                    {
                        "mealId": "52982",
                        "mealName": "Spaghetti alla Carbonara",
                        "mealImg": "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
                    },
                    {
                        "mealId": "52992",
                        "mealName": "Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots",
                        "mealImg": "https://www.themealdb.com/images/media/meals/o2wb6p1581005243.jpg"
                    }
            ]})
        });

        // Click the save button
        const saveButton = getByText('Save');
        fireEvent.click(saveButton);

        //the success alert is displayed
        setTimeout(() => {
            
            expect(getByText('Saved!')).toBeInTheDocument();
        }, 5000);
    });

});
