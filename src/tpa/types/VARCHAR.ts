interface BINARY {
  (size: number): any;
  BINARY: VarChar;
}

class VarChar {
  size: number;
  binary: boolean;

  constructor({size = 255, binary = false}: {size?: number, binary?: boolean} = {}) {
    this.size = size;
    this.binary = binary;
  }
}

let VARCHAR = <BINARY> function(size: number) {
  return new VarChar({size: size});
};
VARCHAR.BINARY = new VarChar({binary: true});

console.log(VARCHAR);
console.log(VARCHAR(1234));
console.log(VARCHAR.BINARY);

export {VARCHAR};