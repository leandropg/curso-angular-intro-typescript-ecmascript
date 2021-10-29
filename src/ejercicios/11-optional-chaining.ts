interface Passenger {

  name: string,
  childs?: string[];
}

const passenger1: Passenger = {

  name: 'Andrew'
}

const passenger2: Passenger = {

  name: 'Andrea',
  childs: ['Charles', 'Angelica', 'Matthew']
}

function printChilds(passenger: Passenger): void {

  const qtyChilds = passenger.childs?.length || 0;
  console.log(qtyChilds);
}

printChilds(passenger1);
printChilds(passenger2);