import { ethers } from "hardhat";

// deployed to 0x8F139994A2DDF272Ff05C84BF15945cbD4e70970

async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
//   const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const amount = ethers.utils.parseEther("1");

  const SimpleDepositContract = await ethers.getContractFactory("simpleDepositContract");
  const simpleDepositContract = await SimpleDepositContract.deploy();

  await simpleDepositContract.deployed();

  console.log(`deployed to ${simpleDepositContract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
