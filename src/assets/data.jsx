let people = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St",
  },
  {
    id: 2,
    age: 30,
    email: "jane.smith@example.com",
    address: "456 Oak Ave",
    image: [
      {
        small: {
          url: "https://images.unsplash.com/photo-1704319180538-f57994377412?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        medium: {
          url: "",
        },
        large: {
          url: "",
        },
      },
    ],
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 22,
    email: "bob.johnson@example.com",
    address: "789 Pine Rd",
  },
  {
    id: 4,
    name: "Alice Brown",
    age: 28,
    email: "alice.brown@example.com",
    address: "101 Cedar Ln",
    image: [
      {
        small: {
          url: "https://images.unsplash.com/photo-1704319180538-f57994377412?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        medium: {
          url: "",
        },
        large: {
          url: "",
        },
      },
    ],
  },
  {
    id: 5,
    name: "Charlie White",
    age: 35,
    email: "charlie.white@example.com",
    address: "202 Birch St",
    image: [
      {
        small: {
          url: "",
        },
        medium: {
          url: "",
        },
        large: {
          url: "",
        },
      },
    ],
  },
];

let data = [
  { email: "abcde@g.com", password: "123456" },
  { email: "abcd@g.com", password: "123456" },
  { email: "abc@g.com", password: "123456" },
];

let genders = ["select one", "male", "female", "others"];

export { people, data, genders };
