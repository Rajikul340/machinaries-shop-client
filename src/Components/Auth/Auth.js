import React, { useState } from "react";
const axios = require("axios");

//get all latheamachin

export const useLathe = async() => {

   const res = await  fetch('http://localhost:5000/lathMachine')
    const data = await res.json()
    return data;
   

};
