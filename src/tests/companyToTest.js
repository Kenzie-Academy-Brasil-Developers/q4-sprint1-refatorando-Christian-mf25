const createValidCompany = {
  name: 'Meu nome',
  cnpj: '98234975621687',
  password: 'senhaForte',
  cep: '78498856',
  address: 'Rua Pres. Gama Rosa',
  number: 187,
  state: 'SC',
  city: 'Florianópolis',
};

const createInvalidCompany = {
  name: 'Meu nome',
  cnpj: '123456789123456789123456789',
  password: 'senhaForte',
  cep: '78498856',
  address: 'Rua Pres. Gama Rosa',
  number: 187,
  state: 'SC',
  city: 'Florianópolis',
};

const postUser = {
  message: 'Company successfully created',
  company: {
    name: 'Meu nome',
    cnpj: '98234975621687',
    password: 'senhaForte',
    cep: '78498856',
    address: 'Rua Pres. Gama Rosa',
    number: 187,
    state: 'SC',
    city: 'Florianópolis',
    id: 'bc6e8304-1389-4278-a2e6-894c388c8c6b',
    vehicles: [],
  },
};

export { createValidCompany, createInvalidCompany, postUser };
