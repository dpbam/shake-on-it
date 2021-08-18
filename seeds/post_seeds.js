const { Post } = require("../models");

const postdata = [
  {
    title: "Vapormax Plus Astro Edition -- In Stock",
    content: `Details
              Condition
              New
              Vapormax Plus Astro Edition
              New With Box. Email: 00000@gmail.com`,
    user_id: 10,
  },
  {
    title: "🏺⚱️iPad 10.2” 128GB, 8. Gen.- Entrega el mismo día con opciones de pago convenientes 🗣",
    content: `Condition
              New
              Screen Size
              10.2”
                  Internal Memory
              128 GB
              🤩Apple - iPad  8.Gen. 128GB - 2020🤩 
              contact me: 55555@gmail.com or text: 555-555-0000`,
    user_id: 8,
  },
  {
    title: "Lawn Mowing Service",
    content: "As title said: Lawn Mowing Service. Contact me: 555-555-5555",
    user_id: 1,
  },
  {
    title: "House Remodel",
    content: "Home remodeling services include: kitchen, bathroom, flooring, concrete, roof, etc contact me at 832-000-0000",
    user_id: 4,
  },
  {
    title: "Tutoring Services",
    content: "Offering tutoring services from elementary to high school, contact me at 281-000-0000",
    user_id: 7,
  },
  {
    title: "House Cleaning",
    content: "House clearning services, contact me at 281-000-1111",
    user_id: 4,
  },
  {
    title: "Daycare",
    content: "Providing daycare for parents, contact via email: 020202@gmail.com or 832-555-0000",
    user_id: 1,
  },
  {
    title: "Roof Repair",
    content: "Roof repair service, contact at 832-555-4444",
    user_id: 1,
  },
  {
    title: "AC Service",
    content: "We are here to help to bring you cool in a hot day, please contact us at 512-565-8888",
    user_id: 9,
  },
  {
    title: "Dozer,excavator,forestry mulching, dirtwork",
    content: `has the solutions to all your land needs. 
    We are a veteran owned and family operated company. 
    We have the experience and knowledge to get your project done the 
    right way the first time. We have references that can vouch for the 
    quality of our work and experience. We specialize in land clearing and 
    site development. Fully insured Services were offer include
    Forestry mulching,
    Fence line clearing.
    Selective clearing.
    Pasture clearing.
    Excavating for site development.
    Driveways.
    Pads.
    Ponds.
    Culverts.
    Concrete.
    And much more.
    Call today 832-666-4848`,
    user_id: 5,
  },
  {
    title: "Yard Work/Handy Man/General Labor",
    content: `I have lots of experience and excellent reviews. 
    I travel throughout Houston and to surrounding areas. Please call 156-151-1515 `,
    user_id: 3,
  },
  {
    title: "FENCE INSTALLATION & REPAIR",
    content: `FENCING INSTALLATION/REPAIR, GATE REPAIR/INSTALLATION , FENCE WASH/PAINT LAWN MOWING, MULCHING, SOD INSTALLATION
              Contact 202-123-1234`,
    user_id: 10,
  },
  {
    title: "Tractor mowing",
    content: "Mowing services 936-000-0000",
    user_id: 8,
  },
  {
    title: "🌲TREE REMOVAL,TREE TRIMMING,STUMP GRINDING ",
    content: `Quality, professional and affordable service
We specialize in tree removal, tree trimming, stump grinding, pruning
Contact 512-000-0101`,
    user_id: 3,
  },
  {
    title: "LANDSCAPING SERVICE",
    content: "LAWN SERVICE: weekly & biweekly, contact 512-111-1111",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    content: "https://paginegialle.it/mattis/egestas.jsp",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    content: "http://wikia.com/turpis/eget.jpg",
    user_id: 6,
  },
  {
    title: "Etiam justo.",
    content: "https://shareasale.com/quis.json",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    content:
      "http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png",
    user_id: 6,
  },
  {
    title:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    content: "https://java.com/at/nibh/in.png",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
