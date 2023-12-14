import { encodeFunctionData } from "viem";
import ERC20 from "./abi/ERC20.js";

const main = () => {
  let data = encodeFunctionData({
    abi: ERC20,
    functionName: "totalSupply",
  });
  console.log(data);
};

(() => main())();
