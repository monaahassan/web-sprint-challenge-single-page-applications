import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";
import form from "./Form";
import schema from "./Validation/formSchema";
import axios from "axios";
import * yup from "yup";


///Initial States///
const InitialFormValues ={ 
  //Text Input//
  special: "",
  //Drop Down//
  size: "",
  howMany: "",
  //Radio//
  sauce: "",
  // originalRed: "",
  // garlicRanch: "",
  // bbqSauce: "",
  // spinachAlfredo: "",
  //checklist//
  pepperoni: "",
  sausage: "",
  canadianBacon: "",
  spicyItalianSausage: "",
  grilledChicken: "",
  onions: "",
  greenPepper: "",
  dicedTomatos: "",
  blackOlives: "",
  roastedGarlic: "",
  artichokeHearts: "",
  threeCheese: "",
  pineapple: "",
  extraCheese: "",
  //Toggle//
  glutenFree: "",
};
const initialFormErrors = {
  size: "",
  sauce: "":
  howMany: "";
};
const intialPizza = [];
const initialDisabled = true;

export default function App(){
  //states//
  const [pizza, setPizza] = useState(initialPizza): //array
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean
  //helper//
  const getPizza = () => {
    axios
      .get(friends)
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
        debugger;
      });
};
const postNewPizza = (newPizza) => {
  axios
    .post(newFriend)
    .then((res) => {
      setFriends([res.data, ...friends]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(err);
      debugger;
    });
};

//Event Handler//
const inputChange = (name, value) => {
  yup
    .reach(schema, name) // get to this part of the schema
    //we can then run validate using the value
    .validate(value) // validate this value
    .then(() => {
      // happy path and clear the error
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
 // error message if validation does not work
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          // validation error from schema
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value, // NOT AN ARRAY
    });
  };

  const formSubmit = () => {
    const newPizza = {
      size: formValues.size.trim(),
      howmany: formValues.howmany.trim(),
      sauce: formValues.sauce.trim(),
      special: formValues.special.trim(),
      glutenFree: formValues.glutenFree.trim(),
      //Toppings//
      toppings: ["pepperoni",
      "sausage",
      "canadianBacon",
      "spicyItalianSausage",
      "grilledChicken",
      "greenPepper",
      "dicedTomatos",
      "blackOlives",
      "roastedGarlic",
      "artichokeHearts",
      "threeCheese",
      "pineapple",
      "extraCheese",].filter(topping) => formValues[topping]
      )
    };
 //POST new Pizza USING HELPER
 postNewPizza(newPizza);
};

//SIDE EFFECTS //
useEffect(() => {
  getPizza();
}, []);

useEffect(() => {
  //ADJUST THE STATUS OF `disabled`
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);



const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <div>Build Your Own Pizza
        



      </div>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
