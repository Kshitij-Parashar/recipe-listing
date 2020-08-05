import RecipeService from '../recipe';
import * as api from '../api';

jest.mock('../api', () => {
    return {
        baseURL: 'https://www.themealdb.com/api/json/v1/1/',
        get: jest.fn().mockResolvedValueOnce({
            "data": [
                {
                    strMeal: "Beef and Mustard Pie",
                    strMealThumb: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
                    idMeal: "52874"
                  },
                  {
                    strMeal: "Beef and Oyster pie",
                    strMealThumb: "https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg",
                    idMeal: "52878"
                  },
                  {
                    strMeal: "Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber",
                    strMealThumb: "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg",
                    idMeal: "52997"
                  },
            ]
        }).mockRejectedValueOnce('Async error'),
    }
});

describe('test getRecipeById ', () => {
    afterEach(() => jest.resetAllMocks());

    it('fetches recipe based on recipe id', async () => {
        /** first call expected to resolve */ 
        await RecipeService.getRecipeById("52874");
         /** check expected url */
        expect(api.get).toHaveBeenCalledWith(`lookup.php?i=52874`);

         /** second call expected to fail */
         const error = await RecipeService.getRecipeById("52874")
         expect(api.get).toHaveBeenCalledWith(`lookup.php?i=52874`);
         /** check error value */
         expect(error).toBe('Async error');
    });
});