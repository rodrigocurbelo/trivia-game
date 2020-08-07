const initialState = {
  capitals: [
    {
      id: 0,
      name: 'Nairobi',
      country: 'Kenya',
    },
    {
      id: 1,
      name: 'Paris',
      country: 'France',
    },
    {
      id: 2,
      name: 'Rome',
      country: 'Italy',
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
