// Edit problem statements here. Each category has a list of {id, text}.
const problemStatements = [
  {
    category: "MediTech",
    items: [
      {
        id: "PS_ID: MT1",
        text: "Medical reports are full of complicated terms that most patients and their families find hard to understand. Design a solution that turns medical reports into simple, easy-to-read explanations, highlights the most important findings, and helps users prepare questions to ask their doctor.",
      },
      {
        id: "PS_ID: MT2",
        text: "A single hospital visit can involve many steps, such as registration, consultation, tests, pharmacy, billing, and follow-up, and patients often have to move around and repeat information at every step. Design a unified system that helps both patients and hospital staff track and coordinate the whole journey, from registration to follow-up.",
      },
      {
        id: "PS_ID: MT3",
        text: "Hospitals often struggle to decide where to place patients and how to share beds, equipment, and other critical resources, especially when the number of patients suddenly rises. Design a system that lets hospitals see in real time what is available, and helps them allocate beds and resources smartly based on patient needs and the hospital’s limitations.",
      },
      {
        id: "PS_ID: MT4",
        text: "Elderly people living alone often find it difficult to manage daily tasks, remember their medicines, get help in an emergency, and stay in touch with their family or caregivers. Design a technology solution that helps them live independently and safely, while letting trusted caregivers be alerted about important safety-related events.",
      },
      {
        id: "PS_ID: MT5",
        text: "Hospitals generate a huge number of medical scans (such as X-rays), and doctors need time to review each one, which can cause delays. Design a solution that supports trained medical professionals by marking areas in a scan that look unusual, so they can review those areas first.",
      },
    ],
  },
  {
    category: "Women and Child Safety",
    items: [
      {
        id: "PS_ID: SF1",
        text: "Employees, especially women, may face harassment or feel unsafe at work, and many organizations do not have a simple and confidential way to report and handle such incidents. Design a secure platform where people can report incidents confidentially, track their progress, escalate serious cases, and get support, while keeping their identity and privacy safe.",
      },
      {
        id: "PS_ID: SF2",
        text: "Parents often cannot see what happens to their child between home and school. Design a system that lets authorized guardians check the status of the child’s school commute and get alerted if the child goes off the usual route, while keeping the child’s privacy protected.",
      },
      {
        id: "PS_ID: SF3",
        text: "Schools and daycare centers must make sure a child is handed over only to an authorized person. Design a system that verifies the identity of the guardian at the time of pickup and keeps a secure record of every pickup.",
      },
      {
        id: "PS_ID: SF4",
        text: "Women may feel unsafe while using buses, trains, shared rides, or while waiting at stations and stops, especially late at night. Design a solution that makes public transport journeys safer by detecting unusual situations, allowing users to ask for help discreetly, or providing useful safety information.",
      },
      {
        id: "PS_ID: SF5",
        text: "Communities often do not have a clear picture of the places where people repeatedly feel unsafe. Design a data-driven platform that brings together verified incident data, infrastructure factors (such as street lighting or lack of CCTV), and reports from community members to identify areas that need safety improvements.",
      },
    ],
  },
  {
    category: "Smart Automation",
    items: [
      {
        id: "PS_ID: SA1",
        text: "Many homes and offices waste electricity because lights, fans, and air conditioners stay on when no one needs them. Design a smart system that automatically controls these appliances based on room occupancy, time of day, and user habits, while showing users how much energy they save.",
      },
      {
        id: "PS_ID: SA2",
        text: "Warehouses and stores still depend on manual counting and record keeping, which leads to mistakes, missing stock, and delays. Design an automated inventory system that tracks items in real time, alerts when stock is low, and reduces manual work for staff.",
      },
      {
        id: "PS_ID: SA3",
        text: "Farmers often water and care for their crops based on guesswork, which wastes water and reduces yield. Design an automated system that uses sensor data such as soil moisture, weather, and crop type to decide when and how much to water, and lets farmers monitor and control it from their phone.",
      },
      {
        id: "PS_ID: SA4",
        text: "Factory machines often break down without warning, which stops production and costs a lot of money. Design a solution that monitors machine data (such as temperature, vibration, or sound), predicts when a machine is likely to fail, and alerts the maintenance team in advance.",
      },
      {
        id: "PS_ID: SA5",
        text: "Cities face traffic jams and long waiting times at signals because traffic lights follow fixed timers. Design a smart traffic management solution that adjusts signals based on real-time traffic, gives priority to emergency vehicles, and helps reduce congestion.",
      },
    ],
  },
];

export default problemStatements;
