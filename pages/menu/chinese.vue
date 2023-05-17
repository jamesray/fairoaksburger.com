<template>
  <div class="content container mx-auto max-w-4xl py-4 lg:py-10">
    <div class="menu-body mb-5 pb-0">
      <div class="menu-lunch mb-3 grid grid-cols-12 justify-center">
        <div class="menu-header col-span-12 mb-2 text-center md:mb-3">
          <h1 class="pb-4 text-center">Chinese Food</h1>
        </div>
      </div>
      <div
        class="menu-header col-span-12 mb-1 mb-5 flex flex-col space-x-8 px-5 pb-4 md:flex-row"
      >
        <h2
          class="color-slate-500 flex flex-row items-start text-2xl font-black"
        >
          <Icon
            class="flex-shrink-0 pr-1 leading-none"
            size="34"
            name="fluent:bowl-chopsticks-24-regular"
          />Bowls
        </h2>
        <p class="menu-description text-md-center pr-3 text-left">
          Sauteed with carrots, broccoli, cabbage, bean sprouts, zucchini and
          mushrooms in a homemade teriyaki sauce, served over steamed rice,
          brown&nbsp;rice, chow mein noodles or fried rice with a choice of
          protein and/or veggies.
        </p>
      </div>
      <div class="menu-lunch mb-1 grid grid-cols-12">
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 flex-row justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12 lg:col-span-8">
              <h4 class="menu-item-name">Charbroiled Chicken Bowl</h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 flex-row justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12 lg:col-span-8">
              <h4 class="menu-item-name">Grilled Beef Bowl</h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 flex-row justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12 lg:col-span-8">
              <h4 class="menu-item-name">Grilled Tiger Shrimp Bowl</h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 flex-row justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12 lg:col-span-8">
              <h4 class="menu-item-name">Combo Bowl</h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 flex-row justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12 lg:col-span-8">
              <h4 class="menu-item-name">Vegetable Bowl</h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 flex-row justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12 lg:col-span-8">
              <h4 class="menu-item-name">Spicy Chicken Bowl</h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 flex-row justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12 lg:col-span-8">
              <h4 class="menu-item-name">Spicy Chicken Bowl</h4>
            </div>
          </div>
        </div>
        <div class="col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 flex-row justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12 lg:col-span-8">
              <h4 class="menu-item-name">
                🌶 &nbsp;Ask to make any bowl spicy!
              </h4>
            </div>
          </div>
        </div>
      </div>
      <hr class="border-color-rose-300 mb-10 mt-8" />
      <div
        class="menu-header col-span-12 mb-1 mb-5 flex flex-col space-x-8 px-5 pb-4 md:flex-row"
      >
        <h2
          class="color-slate-500 flex flex-row items-start text-2xl font-black"
        >
          <Icon
            class="flex-shrink-0 pr-1 leading-none"
            size="34"
            name="lucide:soup"
          />Soups
        </h2>
        <p class="menu-description text-md-center pr-3 text-left">
          Our Seafood Soup contains either fish, shrimp, or both, along with
          mixed vegetables. Our Wonton or Noodle Soup is served with mixed
          vegetables. Both soups are prepared in a savory homemade broth for a
          satisfying meal.
        </p>
      </div>
      <div
        class="menu-lunch mb-5 flex grid grid-cols-12 flex-row justify-center"
      >
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12 mr-5">
              <h4 class="menu-item-name">Wonton or Noodle Soup</h4>
              <p class="menu-item-description">
                Choice of Wontons or Noodles with Veggies
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mr-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Seafood Soup</h4>
              <p class="menu-item-description">
                Fish, Shrimp or Combo with Veggies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-color-rose-300 mb-10 mt-8" />
    <ChineseSides />
    <hr class="border-color-rose-300 mb-10 mt-8" />
    <Beverages />
  </div>
</template>
