const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    content: "https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png",
    user_id: 10,
    state_id: 1,
    city_id: 2,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    content: "https://nasa.gov/donec.json",
    user_id: 8,
    state_id: 2,
    city_id: 192,
  },
  {
    title:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    content:
      "https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx",
    user_id: 1,
    state_id: 3,
    city_id: 14,
  },
  {
    title: "Nunc purus.",
    content: "http://desdev.cn/enim/blandit/mi.jpg",
    user_id: 4,
    state_id: 4,
    city_id: 883,
  },
  {
    title: "Pellentesque eget nunc.",
    content: "http://google.ca/nam/nulla/integer.aspx",
    user_id: 7,
    state_id: 4,
    city_id: 57,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    content: "https://stanford.edu/consequat.png",
    user_id: 4,
    state_id: 3,
    city_id: 329,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content: "http://edublogs.org/non/ligula/pellentesque.js",
    user_id: 1,
    state_id: 5,
    city_id: 159,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    content: "http://ucla.edu/consequat/nulla.html",
    user_id: 1,
    state_id: 6,
    city_id: 102,
  },
  {
    title: "Duis ac nibh.",
    content: "http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx",
    user_id: 9,
    state_id: 7,
    city_id: 89,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    content: "https://reverbnation.com/ligula/sit.jpg",
    user_id: 5,
    state_id: 8,
    city_id: 72,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content: "http://china.com.cn/lectus/vestibulum.json",
    user_id: 3,
    state_id: 49,
    city_id: 244,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    content:
      "http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json",
    user_id: 10,
    state_id: 10,
    city_id: 52,
  },
  {
    title: "Donec dapibus.",
    content: "https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml",
    user_id: 8,
    state_id: 11,
    city_id: 25,
  },
  {
    title: "Nulla tellus.",
    content: "https://lycos.com/natoque/penatibus/et.html",
    user_id: 3,
    state_id: 12,
    city_id: 28,
  },
  {
    title:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    content: "https://gmpg.org/lorem.jpg",
    user_id: 3,
    state_id: 13,
    city_id: 19,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    content: "https://paginegialle.it/mattis/egestas.jsp",
    user_id: 7,
    state_id: 14,
    city_id: 34,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content: "http://wikia.com/turpis/eget.jpg",
    user_id: 6,
    state_id: 15,
    city_id: 21,
  },
  {
    title: "Etiam justo.",
    content: "https://shareasale.com/quis.json",
    user_id: 4,
    state_id: 16,
    city_id: 253,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    content:
      "http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png",
    user_id: 6,
    state_id: 17,
    city_id: 20,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    content: "https://java.com/at/nibh/in.png",
    user_id: 7,
    state_id: 18,
    city_id: 23,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
