<template>
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
</template>
