exports.seed = function(knex) {
  return knex('posts').insert([
    {post_name: "Fill the Main St. Potholes", description: "Laborum eiusmod anim occaecat dolor cupidatat. Et excepteur proident nulla deserunt amet ullamco cillum occaecat culpa. Lorem ipsum nisi aliquip ipsum veniam eiusmod. Mollit nostrud est occaecat veniam occaecat nisi pariatur tempor ullamco eu. Id cillum consequat minim nulla veniam anim aliqua dolor exercitation. Cupidatat deserunt ipsum sit est Lorem ex excepteur quis sit veniam voluptate esse laborum.", city: "New York", abr_state: "NY", zip: 10107, creator_id: 1},
    {post_name: "Remove the tree at the corner of Main St. and Third St.", description: "Adipisicing nisi mollit culpa consectetur non. Reprehenderit sunt veniam mollit sit esse id officia in est proident voluptate. Amet aliquip velit in eu dolor ipsum magna consectetur anim. Dolor ex tempor occaecat aliquip et in. Irure incididunt ut culpa sit elit. Laboris duis ullamco nulla minim eu minim culpa officia excepteur qui pariatur nostrud pariatur.", city: "Farmville", abr_state: "VA", zip: 23832, creator_id: 1},
    {post_name: "Build a Dunkin' Donuts", description: "Do laboris quis dolor aliqua ullamco magna mollit fugiat non in ullamco pariatur ad reprehenderit. Irure ipsum ut in consectetur adipisicing culpa ipsum sint tempor sit commodo sint cupidatat. Qui veniam culpa minim minim.", city: "Dallas", abr_state: "TX", zip: 75001, creator_id: 2},
    {post_name: "Repave the road by Third St. and High Rd.", description: "Non aliqua minim ipsum commodo nisi aute sit commodo quis elit id. Eiusmod mollit amet duis irure nisi quis. Dolore reprehenderit fugiat ut ea amet irure ad.", city: "Junction City", abr_state: "KS", zip: 66441, creator_id: 2},
    {post_name: "Gather the Dragon Balls", description: "Ea minim amet exercitation in Lorem enim esse aliquip laborum cupidatat. Adipisicing Lorem ut incididunt cillum culpa nisi nisi aliquip duis. Sint laborum eu excepteur tempor ex consequat velit exercitation aliqua aute ex fugiat fugiat.", city: "New Orleans", abr_state: "LA", zip: 70148, creator_id: 2},
    {post_name: "Clean the section of highway between Hull Street and Genito", description: "Anim ut enim do tempor cupidatat aliqua in culpa proident cillum ut mollit ipsum. Esse eu est excepteur id culpa do esse occaecat voluptate dolor aliqua nostrud duis do. Eu consequat non cupidatat aute consequat culpa dolor culpa aliquip ex veniam elit dolor et. Ullamco et Lorem nulla irure dolor Lorem esse quis dolore officia quis pariatur dolore.", city: "Bristol", abr_state: "TN", zip: 37618, creator_id: 1},
    {post_name: "Decide once and for all if it really is butter.", description: "Incididunt laboris id exercitation nulla anim consectetur nisi id exercitation labore excepteur. Ex non non adipisicing duis reprehenderit aute. Incididunt officia duis reprehenderit labore non eu sunt quis consectetur eu ut aliquip incididunt dolor.", city: "Hartford", abr_state: "CT", zip: 06144, creator_id: 1},
    {post_name: "Finish MVP on this application", description: "Proident culpa aliqua sit cillum do ex. Laborum commodo consequat adipisicing tempor. Commodo in magna anim esse ipsum reprehenderit. Duis adipisicing laboris aute ad in pariatur. Duis Lorem laboris do nisi reprehenderit aute sit. Veniam in aliqua veniam ad nisi ea magna fugiat. Id dolore exercitation ipsum irure ut deserunt ex minim.", city: "Houston", abr_state: "TX", zip: 77001, creator_id: 2},
    {post_name: "Create more Seed data", description: "Aliqua duis ea cupidatat elit amet. Non proident veniam velit minim dolor nostrud sint amet sint. Incididunt consequat do velit non nostrud irure culpa enim commodo. Aliqua qui esse minim nisi consequat commodo consequat quis duis magna exercitation eu in fugiat. Aliqua officia anim nulla sint. Lorem consequat elit ad irure est laboris laboris consequat laborum est fugiat est Lorem nostrud.", city: "Anaheim", abr_state: "CA", zip: 92801, creator_id: 2},
    {post_name: "Not enough Seed data", description: "Non officia pariatur culpa ipsum tempor do et eu sint ut. Dolore esse amet ullamco pariatur eu duis sit incididunt magna. Laborum deserunt culpa esse reprehenderit est eiusmod elit esse nostrud aliqua ex. Reprehenderit ullamco id dolore nisi esse in labore. Ad consequat labore cupidatat in ad.", city: "Tampa", abr_state: "FL", zip: 33616, creator_id: 1},
  ]);
};
