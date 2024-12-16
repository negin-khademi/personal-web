import Categories from './Categories';
import Menu from './Menu';
import Title from './Title';
import menu from './data';
import { useState } from 'react';

// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItem = ['all', ...tempSet];
// console.log(tempItem);

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    console.log(category);
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  console.log(categories);
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
