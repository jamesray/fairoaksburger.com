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
  <div class="content container mx-auto max-w-6xl px-4 py-4 lg:py-10">
    <div class="menu-body mb-5 pb-5">
      <div class="menu-lunch mb-3 grid grid-cols-12 justify-center">
        <div class="menu-header col-span-12 mb-2 text-center md:mb-3">
          <h1 class="pb-4 text-center">Lunch</h1>
        </div>
      </div>
      <div class="grid-justify-start menu-lunch mb-3 grid grid-cols-12">
        <div
          class="menu-header col-span-12 mb-1 mb-5 flex flex-col space-x-8 md:flex-row"
        >
          <h2
            class="color-slate-500 flex flex-row items-start text-2xl font-black"
          >
            <Icon
              class="flex-shrink-0 pr-1 leading-none"
              size="34"
              name="icon-park-solid:sandwich-one"
            />Sandwiches
          </h2>
          <p class="menu-description text-md-center pr-3 text-left">
            <strong class="color-slate-500 font-bold"
              >Choice of Sandwich Bread:</strong
            ><br />
            White, Wheat, Sourdough, Rye and English Muffin
          </p>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Pesto Grilled Chicken Sandwich</h4>
              <p class="menu-item-description">
                Chicken breast with sun-dried tomato, grilled onions, bell
                peppers, swiss cheese, mayo and pesto sauce on a french roll
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Philly Cheese Steak Sandwich</h4>
              <p class="menu-item-description">
                Thinly sliced beef, grilled onions, bell peppers, mushroom with
                swiss cheese and mayo on a french roll
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Torta</h4>
              <p class="menu-item-description">
                Choice of grilled chicken or carne asada, beans, avocado,
                jalapenos, lettuce, tomato, onion and mayo on a french roll
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Pastrami Sandwich</h4>
              <p class="menu-item-description">
                Hot pastrami, pickles and mustard on a french roll
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Chicken Caesar Sandwich</h4>
              <p class="menu-item-description">
                Chicken breast, romaine lettuce parmesan cheese tossed in caesar
                dressing and served on a french roll
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Grilled Chicken Breast Sandwich</h4>
              <p class="menu-item-description">
                Chicken breast, mayo, lettuce and tomato on a french roll
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Tuna Melt</h4>
              <p class="menu-item-description">
                Grilled swiss cheese and tuna on choice of bread
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Tuna Sandwich</h4>
              <p class="menu-item-description">
                Homemade tuna, lettuce, tomato and mayo
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Ham and Cheese Sandwich</h4>
              <p class="menu-item-description">
                Deli ham, cheese, lettuce, tomato and mayo
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Turkey Sandwich</h4>
              <p class="menu-item-description">
                Turkey breast, lettuce, tomato and mayo
              </p>
            </div>
            <div
              class="menu-item-price col-span-12 pr-5 text-right lg:col-span-4"
            >
              <!-- <h4 class="food-price pr-5">$7.29</h4> -->
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Turkey Grill Sandwich</h4>
              <p class="menu-item-description">
                Grilled swiss cheese, grilled onion and peppers with turkey
                breast on choice of bread
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Club Sandwich</h4>
              <p class="menu-item-description">
                Triple decker with turkey, ham, bacon, lettuce, tomato and mayo
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">BLTA Sandwich</h4>
              <p class="menu-item-description">
                Bacon, lettuce, tomato, avocado and mayo
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Patty Melt</h4>
              <p class="menu-item-description">
                1/4 lb hamburger patty with grilled onions and cheese on choice
                of bread
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Grilled Cheese Sandwich</h4>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name">(add ham or bacon)</h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Hot Dog</h4>
              <p class="menu-item-description">
                Beef hot dog with ketchup, mustard, onion and relish
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Chili-Cheese Dog</h4>
              <p class="menu-item-description">
                Beef hot dog with chili, cheese, and onions
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr class="border-color-rose-300 mb-10 mt-8" />
      <div
        id="burgers"
        class="lunch-burgers grid-justify-start menu-lunch mb-3 mt-5 grid grid-cols-12"
      >
        <div
          class="menu-header col-span-12 mb-1 mb-5 flex flex-col items-start space-x-6 px-3 lg:flex-row lg:flex-wrap lg:items-center 2xl:flex-nowrap"
        >
          <h2
            class="color-slate-500 flex flex-row items-start text-2xl font-black"
          >
            <Icon
              class="flex-shrink-0 pr-1 leading-none"
              size="34"
              name="icon-park-solid:sandwich-one"
            />Burgers
          </h2>
          <p class="menu-description mb-3 pr-3 pt-4 text-left">
            Grilled 1/4 lb ground beef patty (or crispy chicken) served on a
            toasted bun with thousand island, mayo, lettuce, tomato, onions and
            pickles.
          </p>
          <p class="menu-description flex-shrink-0 pr-3 text-left">
            <strong class="color-slate-500 font-bold"
              >🧀 Choice of Cheese:</strong
            ><br />
            American, Swiss or Cheddar Jack
          </p>
          <p class="color-slate-600 mb-0 text-left text-sm">
            <em
              ><Icon
                class="flex-shrink-0 pr-1 leading-none"
                size="13"
                name="charm:plus"
              />extra cheese for $0.75</em
            >
          </p>
          <p class="color-slate-600 text-left text-sm">
            <em
              ><Icon
                class="flex-shrink-0 pr-1 leading-none"
                size="13"
                name="charm:plus"
              />extra patty for $1.50</em
            >
          </p>
          <p class="color-slate-600 text-left text-sm">
            <em>🥬 also available as a lettuce wrap</em>
          </p>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Fair Oaks Burger</h4>
              <p class="menu-item-description">
                Avocado, bacon, cheese and jalapenos
              </p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Hamburger</h4>
              <p class="menu-item-description"></p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Cheeseburger</h4>
              <p class="menu-item-description"></p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Bacon Cheeseburger</h4>
              <p class="menu-item-description"></p>
            </div>

            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Avocado burger</h4>
              <p class="menu-item-description"></p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Chili Cheeseburger</h4>
              <p class="menu-item-description"></p>
            </div>

            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Crispy Chicken Burger</h4>
              <p class="menu-item-description"></p>
            </div>

            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Turkey Burger</h4>
              <p class="menu-item-description"></p>
            </div>

            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Garden Burger</h4>
              <p class="menu-item-description"></p>
            </div>

            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Fish Burger</h4>
              <p class="menu-item-description">
                Freshly grilled or battered fish filets with tartar sauce
              </p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Teriyaki Burger</h4>
              <p class="menu-item-description">
                Thinly sliced beef or chicken breast with teriyaki sauce
              </p>
            </div>

            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Pastrami Burger</h4>
              <p class="menu-item-description">Burger topped with pastrami</p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Western Bacon Cheese Burger</h4>
              <p class="menu-item-description">
                bacon, cheese, onion ring and BBQ sauce
              </p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Combo
              </h4>
            </div>
          </div>
        </div>
      </div>
      <hr class="border-color-rose-300 mb-10 mt-8" />
      <Sides />
      <hr class="border-color-rose-300 mb-10 mt-8" />
      <div
        id="salads"
        class="grid-justify-start menu-lunch mb-3 grid grid-cols-12 pt-5"
      >
        <div
          class="menu-header col-span-12 mb-1 mb-5 flex flex-col space-x-8 px-5 md:flex-row"
        >
          <h2
            class="color-slate-500 flex flex-row items-start text-2xl font-black"
          >
            <Icon
              class="flex-shrink-0 pr-1 leading-none"
              size="34"
              name="lucide:salad"
            />Salads
          </h2>
          <p class="menu-description text-md-center pr-3 text-left">
            <strong class="color-slate-500 font-bold"
              >Choice of Dressing:</strong
            ><br />
            Ranch, Thousand&nbsp;Island, Bleu&nbsp;Cheese, Italian, Sesame or
            Caesar
          </p>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Cobb Salad</h4>
              <p class="menu-item-description">
                Chicken breast, bacon, egg and cheese, tomato, red cabbage,
                carrots, radish, cucumber and bell peppers on a bed of iceberg
                and romaine lettuce.
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Chicken Caesar Salad</h4>
              <p class="menu-item-description">
                Chicken breast on a bed of crisp romaine, parmesan cheese and
                croutons
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Chinese Chicken Salad</h4>
              <p class="menu-item-description">
                Chicken breast, crispy noodles, red cabbage, carrots, scallions
                and sesame seeds on a bed of romaine and Iceberg lettuce
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Crispy Chicken Salad</h4>
              <p class="menu-item-description">
                Crispy chicken, cheese, tomato, red cabbage, carrots, radish,
                cucumber and bell peppers on a bed of iceberg and romaine
                lettuce.
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Taco Salad</h4>
              <p class="menu-item-description">
                Fried flour tortilla shell with beans, lettuce, onion, tomato,
                cilantro and cheese topped with chicken or carne asada and
                served with a side sour cream and salsa
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">House Salad</h4>
              <p class="menu-item-description">
                Tomato, red cabbage, carrots, radish, cucumber and bell peppers
                on a bed of iceberg and romaine lettuce.
              </p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />
                Add Grilled Chicken Breast
              </h4>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Add Tuna
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-color-rose-300 mb-10 mt-8" />
    <Beverages />
  </div>
  <div class="content container mx-auto max-w-6xl py-4 lg:pt-10">
    <div class="menu-body mb-2 pb-2">
      <div class="menu-lunch mb-3 grid grid-cols-12 justify-center">
        <div class="menu-header col-span-12 mb-2 text-center md:mb-3">
          <h1 class="pb-4 text-center">Mexican Food</h1>
        </div>
      </div>
      <div class="grid-justify-start menu-lunch mb-3 grid grid-cols-12">
        <div class="menu-header col-span-12 mb-1 mb-5 flex flex-row space-x-8">
          <h2
            class="color-slate-500 flex flex-row items-start text-2xl font-black"
          >
            <Icon
              class="-mt-1 flex-shrink-0 pr-0.5 leading-none"
              size="34"
              name="fluent-emoji-high-contrast:taco"
            />Tacos
          </h2>
          <div class="menu-description text-md-center pr-3 text-left">
            <p class="menu-description text-md-center pr-3 text-left">
              <strong class="color-slate-500 font-bold">Taco ala carte:</strong>
              Single taco
            </p>
            <p class="menu-description text-md-center pr-3 text-left">
              <strong class="color-slate-500 font-bold">Taco Plate:</strong>
              Two tacos served with a side of rice and beans
            </p>
          </div>
        </div>
      </div>
      <div class="menu-lunch mb-3 grid grid-cols-12 justify-center">
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12 pr-2">
              <h4 class="menu-item-name">
                Chicken or Carne Asada Taco ala carte
              </h4>
              <p class="menu-item-description">
                Onion, tomato, cilantro and cheese
              </p>
            </div>
            <div class="col-span-12 pr-2">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Make it a
                Crispy Taco
              </h4>
            </div>
            <div class="col-span-12 pr-2">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Make it a
                Taco Plate
              </h4>
            </div>
            <div class="col-span-12 pr-2">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Make it a
                Crispy Taco Plate
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Fish or Shrimp Taco ala carte</h4>
              <p class="menu-item-description">
                Tartar sauce, cheese, onion, tomato, cilantro and cabbage
              </p>
            </div>
            <div class="col-span-12 pr-2">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Make it a
                Taco Plate
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">
                Ground Beef Taco ala carte (soft or crispy shell)
              </h4>
              <p class="menu-item-description">
                Onion, tomato, cilantro and cheese
              </p>
            </div>
            <div class="col-span-12 pr-2">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Make it a
                Taco Plate
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Teriyaki Tacos (Chicken or Beef)</h4>
              <p class="menu-item-description">
                Teriyaki sauce, cheese, onion, tomato, cilantro, cheese ang
                cabbage
              </p>
            </div>
            <div class="col-span-12 pr-2">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Make it a
                Taco Plate
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 justify-center rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">
                Potato Taco (crispy) or Zucchini Tacos or Garden patty Tacos
              </h4>
              <p class="menu-item-description">
                Sriracha aioli, cheese, onion, tomato, cilantro, cheese and
                cabbage
              </p>
            </div>
            <div class="col-span-12 pr-2">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Make it a
                Taco Plate
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 justify-center rounded pb-2 pl-3 pt-4"
          >
            <div
              class="col-span-12 flex h-full w-full flex-row items-center justify-center text-xl font-bold xl:text-4xl"
            >
              <span class="md:pt-6">🌶 &nbsp;Hot sauce is optional!</span>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Burrito</h4>
              <p class="menu-item-description">
                Grilled Chicken or Carne Asada with rice, beans, cheese, onions,
                tomato and cilantro wrapped in a flour tortilla
              </p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Make it a
                wet burrito (Red or Green Sauce)
              </h4>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Make it a
                Shrimp or Fish burrito
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Quesadilla</h4>
              <p class="menu-item-description">
                Grilled flour tortilla melted with cheddar jack cheese
              </p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" /> Add
                chicken or carne asada
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Deluxe Nachos</h4>
              <p class="menu-item-description">
                Freshly fried tortilla chips topped with nacho cheese, cheddar
                cheese, chicken or carne asada, avocado, onion, tomato and
                cilantro served with a side of sour cream and salsa
              </p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name small mb-3 text-left">
                <em>
                  Substitute garden patty, or rice and beans for veggie options
                  at no additional charge
                </em>
              </h4>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Substitute
                steak fries
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Enchilada Plate (Cheese)</h4>
              <p class="menu-item-description">
                Two Enchiladas in red or green sauce served with rice and beans,
                lettuce, tomato, onion, cilantro and avocado with a side of
                salsa and sour cream
              </p>
            </div>
            <div class="col-span-12">
              <h4 class="menu-item-name text-right">
                <Icon size="25" name="majesticons:money-plus-line" />Add chicken
                or carne asada
              </h4>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Carne Asada Plate</h4>
              <p class="menu-item-description">
                Grilled carne asada topped with grilled onions and avocado
                served with rice, beans and salad with a side of corn torillas
                and salsa
              </p>
            </div>
          </div>
        </div>
        <div class="menu-item col-span-12 mb-5 mr-5 lg:col-span-6">
          <div
            class="menu-list mx-3 my-4 grid h-auto grid-cols-12 rounded pb-2 pl-3 pt-4"
          >
            <div class="col-span-12">
              <h4 class="menu-item-name">Camarones Rancheros</h4>
              <p class="menu-item-description">
                Grilled shrimp sauteed with vegetables in a spicy ranchero sauce
                served with rice, beans, avocado, and corn tortillas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr class="border-color-rose-300 mb-10 mt-2" />
    <Beverages />
  </div>
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
  <div class="content container mx-auto max-w-6xl px-4 py-4 lg:py-6">
    <hr class="border-color-rose-300 mb-10 mt-8" />
    <div class="menu-body mb-2 pb-2">
      <div class="menu-lunch mb-3 grid grid-cols-12 justify-center">
        <div class="menu-header col-span-12 mb-2 text-center md:mb-3">
          <h1 class="pb-4 text-center">Extras</h1>
        </div>
      </div>
    </div>
    <Extras />
  </div>
</template>
