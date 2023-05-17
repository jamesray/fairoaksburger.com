<template>
  <div class="content container mx-auto max-w-6xl py-4 lg:py-10">
    <div class="menu-body mb-5 pb-5">
      <div class="menu-breakfast mb-3 grid grid-cols-12 justify-center">
        <div class="menu-header col-span-12 mb-2 text-center md:mb-3">
          <h1 class="pb-4 text-center">Breakfast</h1>
          <p class="color-slate-500 lead mb-4 pb-5">
            <em>Served until 11:00AM</em>
          </p>
        </div>
        <div class="menu-header col-span-12 mb-2 md:mb-3">
          <p class="menu-description pb-3 pr-3 pt-0">
            <strong class="color-slate-500 font-bold">Choice of Toast:</strong
            ><br />
            White, Wheat, Sourdough, Rye and English Muffin
          </p>
          <p class="menu-description pr-3">
            <strong class="color-slate-500 font-bold">Choice of Meat:</strong
            ><br />
            Bacon, Ham, Sausage, Chorizo, Turkey Sausage, Turkey Patty, Beef
            Patty, Chicken, Carne Asada or Pastrami
          </p>
        </div>
      </div>
      <div class="menu-breakfast mb-3 grid grid-cols-12 justify-center">
        <div class="menu-item col-span-12 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 rounded py-2"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Breakfast Sandwich</h4>
              <p class="menu-item-description">
                Two eggs, choice of meat, lettuce, tomato and mayo on choice of
                bread
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 rounded py-2"
          >
            <div class="col-span-12">
              <h4 id="breakfast-burrito" class="menu-item-name">
                Breakfast Burrito
              </h4>
              <p class="menu-item-description">
                Flour tortilla filled w/ two eggs choice of meat, hash browns,
                and cheese
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 justify-center rounded py-2"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">English Muffin Sandwich</h4>
              <p class="menu-item-description">
                One egg, cheese and choice of meat on an English muffin
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 justify-center rounded py-2"
          >
            <div class="col-span-12">
              <h4 id="egg-breakfast" class="menu-item-name">Egg Breakfast</h4>
              <p class="menu-item-description">
                Two eggs, choice of meat, hash browns and toast
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 rounded py-2"
          >
            <div class="col-span-12">
              <h4 id="pancake-breakfast" class="menu-item-name">
                Pancake Breakfast
              </h4>
              <p class="menu-item-description">
                Two pancakes, two eggs and choice of meat
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 rounded py-2"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">French Toast</h4>
              <p class="menu-item-description">
                French Toast, two eggs and choice of meat
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 rounded py-2"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Waffle Breakfast</h4>
              <p class="menu-item-description">
                Waffle, two eggs and choice of meat
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 rounded py-2"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Omelette Breakfast</h4>
              <p class="menu-item-description">
                Three Egg Omelette with choice of meat, onion, tomato, cilantro,
                bell peppers and cheese served with hash browns and toast.
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 flex grid h-auto grid-cols-12 rounded py-2"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Steak and Eggs</h4>
              <p class="menu-item-description">
                Grilled carne asada, two eggs, hash browns and toast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-color-rose-300 mb-10 mt-8" />
    <BreakfastSides />
    <hr class="border-color-rose-300 mb-10 mt-8" />
    <Beverages />
  </div>
</template>
