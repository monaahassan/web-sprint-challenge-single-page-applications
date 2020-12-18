// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
    howMany: yup
    .number()
    .min(1),
  size: yup
    .string()
    .required("required")
    .oneOf(["small", "medium", "large"], "required" ),
  special: yup
  .string()
  .min(1 "anything else you'd like to add?"),
  size: yup
    .string()
    .oneOf(["tl", "instructor", "student", "alumni"], "required"),
  sauce: yup
    .string()
    .required("required")
    .oneOf(["originalRed", "GarlicRed", "bbqSauece", "spinachAlfredo"], "please select your choice of sauce"),
  // we're done with checkboxes
  sausage: yup.boolean(),
  canadianBacon: yup.boolean(),
  spicyItalianSausage: yup.boolean(),
  grilledChicken: yup.boolean(),
  greenPepper: yup.boolean(),
  dicedTomatos: yup.boolean(),
  blackOlives: yup.boolean(),
  roastedGarlic: yup.boolean(),
  artichokeHearts: yup.boolean(),
  threeCheese: yup.boolean(),
  coding: yup.boolean(),
  pineapple: yup.boolean(),
  extraCheese: yup.boolean(),
});
