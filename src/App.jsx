import omeletteImage from './assets/images/image-omelette.jpeg';

function App() {

  const prepTime = [
    { "prep": "Total:", "time": "Approximately 10 minutes"},
    {"prep": "Preparation:", "time": "5 minutes"},
    {"prep": "Cooking:", "time": "5 minutes"}
  ];
  const ingredients = [
    { "ingr": "2-3 large eggs"},
    {"ingr": "Salt, to taste"},
    {"ingr": "Pepper, to taste"},
    {"ingr": "1 tablespoon of butter or oil"},
    {"ingr": "Optional fillings: cheese, diced vegetables, cooked meats, herbs"},
  ];
  const instructions = [
    { "instr": "Beat the eggs:", "desc": "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."},
    {"instr": "Heat the pan:", "desc": "Place a non-stick frying pan over medium heat and add butter or oil."},
    {"instr": "Cook the omelette:", "desc": "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."},
    {"instr": "Add fillings (optional):", "desc": "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."},
    {"instr": "Fold and serve:", "desc": "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."},
    {"instr": "Enjoy:", "desc": "Serve hot, with additional salt and pepper if needed."},
  ];

  const nutrition = [
    { "nutr": "Calories", "value": "277kcal"},
    {"nutr": "Carbs", "value": "0g"},
    {"nutr": "Protein", "value": "20g"},
    {"nutr": "Fat", "value": "22g"},
  ];

  return (
    <>
      <main className="bg-color-1 sm:my-20 mx-auto sm:p-8 sm:rounded-[1.5rem] sm:max-w-[94vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw]">
        <img src={omeletteImage} alt="omeletteImage" className='max-w-[100%] h-auto sm:rounded-[1rem]'/>
      
      <div className='recipe-container mt-[2rem] px-8 sm:px-0'>
        <h1 className='recipe-title text-color-8 font-yserif text-[2.75rem] leading-[1.15em]'>Simple Omelette Recipe</h1>
        <p className='recipe-description text-[1.125rem] my-[1.25rem]'>
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
        to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>
        <div className="preparation-time bg-color-5 rounded-[0.625rem] p-6 mb-7">
          <p className='text-color-4 text-[1.25rem] font-semibold pb-2'>Preparation time</p>
          <ul className='px-6'>
            {prepTime.map((item, index) => (
              <li key={index} className='list-disc marker:text-color-4 mb-[0.375rem] pl-3'>
                <span className='font-bold'>{item.prep} </span>
                {item.time}
              </li>
            )) }
          </ul>
        </div>
        <div className="ingredients border-b border-color-7 mb-7">
          <h2 className='text-color-6 font-yserif text-[1.75rem]'>Ingredients</h2>
          <ul className='pl-6 mt-[1em] mb-[1.25em] '>
            {ingredients.map((item, index) => (
              <li key={index} className='list-disc marker:text-color-6 pl-3'>
                {item.ingr}
              </li>
            ))}
          </ul>
        </div>
        <div className="ingredients border-b border-color-7 mb-7">
          <h2 className='text-color-6 font-yserif text-[1.75rem]'>Instructions</h2>
          <ol className='pl-6 mt-[1em] mb-[1.25em] '>
            {instructions.map((item, index) => (
              <li key={index} className='list-decimal marker:text-color-6 marker:font-bold pl-3 mb-[0.375rem]'>
                <span className='font-bold'>{item.instr} </span>
                {item.desc}
              </li>
            ))}
          </ol>
        </div>
        <div className="nutritons">
          <h2 className='text-color-6 font-yserif text-[1.75rem]'>Nutrition</h2>
          <p className='recipe-description text-[1.125rem] my-[1.25rem]'>
            The table below shows nutritional values per serving without the additional fillings.
          </p>
          <table className='w-full'>
            <tbody>
              {nutrition.map((item, index) => (
                <tr key={index} className='border-b border-color-7 last:border-none'>
                  <td className='p-3'>{item.nutr}</td>
                  <td className='p-3 text-color-6 font-bold'>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </main>
<div className="attribution hidden">
  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">reddevotion</a>.
</div>
    </>
  )
}

export default App
