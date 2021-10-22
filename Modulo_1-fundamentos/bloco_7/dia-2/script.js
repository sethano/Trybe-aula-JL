const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Ola ${order.order.delivery.deliveryPerson} entrega para ${order.name} telefone: ${order.phoneNumber}, endereco ${order.address.street}, numero ${order.address.number}, apto ${order.address.apartment}`
}

console.log(customerInfo(order));


const orderModifier = (order) => {
  order.name = 'Luis Silva';
  order.payment.total =  'R$50,00'
  return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)}, ${order.order.drinks.coke.type} é ${order.payment.total}.`
}

console.log(orderModifier(order));