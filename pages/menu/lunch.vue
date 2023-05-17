<template>
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
    <hr class="border-color-rose-300 mb-10 mt-0" />
    <Beverages />
  </div>
</template>
