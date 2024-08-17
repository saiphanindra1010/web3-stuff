const { createHash } = require("node:crypto");

// get sha256 for a required string
function calculateSha256(str) {
  const hash = createHash("sha256").update(str).digest("hex");
  return hash;



}

//finds solution based on string
function findFinaldatawith(start) {
    let generatehash = createHash("sha256").update("0").digest("hex");
    let input = 0;
    while (!generatehash.startsWith(start)) {
      // prefix+nonce
      generatehash = createHash("sha256")
        .update(input.toString())
        .digest("hex");
      input++;
    }
    return input-1
  }

 //finds solution based on prefix
function findDataForPrefix(start,prefix) {
    let generatehash = createHash("sha256").update("0").digest("hex");
    let input = 0;
    while (!generatehash.startsWith(start+"")) {
      // prefix+nonce
      generatehash = createHash("sha256")
        .update(prefix + input.toString())
        .digest("hex");
      input++;
    }
    return input-1
  }
//f

function findNonceForPrefix()
{

}
console.log(calculateSha256("hello"));
console.log(findFinaldatawith("00000"))
console.log(findDataForPrefix("00000","100xdevs"))

let inputStr = "harkirat => Raman | Rs 10Ram => Ankit | Rs 10";
// console.log(findFinaldatawith(inputStr))
console.log(findDataForPrefix("00000",inputStr))