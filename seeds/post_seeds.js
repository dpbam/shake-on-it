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
    title: "Remote Python VBA Excel Java C++ Sql Linux Tutoring",
    content: `Balancing between part time job and school work has always been a 
    tiresome experience, especially with the so many programming assignments to write. 
    If you go back in your life, search your memory vaults, you will find that almost 
    everything that’s worthwhile is actually hard right? So with programming it’s not 
    different.
    But let me say that it’s not harder than any other field that you want to get good at 
    first of all. Coding is never tough if we use the logic and syntax properly. I will 
    guide what programming you want to learn first and how to use it in your work 
    environment. I have 12 academic awards and honors during academic career.`
      + `Basic Languages: Database, Data Structure, Networking, Hardware, HTML, MYSQL 
      Oracle, Visual Basic Asp.Net Vb.Net, CSS UML Flowchart PHP, C#, Object Oriented 
      Programming Java Script. Contact at 000-515-1515`,
    user_id: 7,
  },
  {
    title: "Music Lessons : Guitar/Piano/Voice/Songwriting",
    content: `Dan is a professional musician with years of teaching and performance experience.

Lessons are structured and customized to each individual student depending upon skill level, goals and interests.

Music theory building blocks are leveraged as a foundation for learning.

A balance of education, technique and fun (e.g. learning songs) will be the basis of everything we do.

Dan has studied with:

Bill Solley – Jazz and classical guitar virtuoso, winner of the 1999 BET on Jazz Discovery Award and reoccurring featured artist of the Umbrella Jazz Festival

Zack Mishur – Guitarist and Audio Engineer for The Buckinghams, Survivor and many Chicago staples

Ralph Covert – Grammy Award Nominee and creator of the highly acclaimed children’s album Ralph’s World. Contact at 000-515-1515`,
    user_id: 6,
  },
  {
    title: "Finance Economics Accounting Tutor",
    content: `I am a Certified Public Accountant (CPA) Finalist working with one of Big Four 
    accountancy and auditing firms for more than two years. I also hold an M.S degree in Economics 
    and Finance.
    I will be glad to assist you with virtually almost anything that you might need help with.
    Services are available for the following Core Areas:
    Managerial, Business law or tax. International Finance. Cost Acct. Auditing. 
    Financial Accounting, Macroeconomics. Micro economics. Excel Work. Econometrics.
    Contact at 000-515-1515`,
    user_id: 4,
  },
  {
    title: "Afterschool care",
    content: "Retired school teach will watch your special needs child afterschool. Contact 000-151-4848",
    user_id: 6,
  },
  {
    title: "Affordable Help For Math, Chemistry and Physics Assignments / Projects",
    content: `Do you need help with your Math , Chemistry , or Physics homework Projects ? Our experts provide 24/7 tutoring to help take away the stress of homework, projects, and tests. We strive to help students succeed in their classes. There are no assignments , exams or projects we cannot help you with!!

These are following subjects we can help you with:
Math:
Probability , Calculus , Statistics , College Algebra , Calculus I ,Calculus II , Calculus III , Finite Math , Trigonometry , Discrete Math , Differential Equation , Graphs, Functions , Integration.
Physics:
Physics , Electricity / Magnetism , Modern , Quantum Mechanics , Fluid Mechanics , Motion and kinetic Energy , Equilibrium , Wave Optics , Dynamics , Oscillations / Waves , Circuits.
Chemistry:
Introductory Chemistry , General Chemistry I and II , Organic Chemistry I and II , Advanced Organic Chemistry , Biochemistry , Physical Chemistry , Analytical Chemistry , Inorganic Chemistry , Thermochemistry , AP Chemistry .`,
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
