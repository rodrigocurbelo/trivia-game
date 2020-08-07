const initialState = {
  flags: [
    {
      id: 0,
      country: 'Kenya',
      countryCode: 'KE',
    },
    {
      id: 1,
      country: 'France',
      countryCode: 'FR',
    },
    {
      id: 2,
      country: 'Italy',
      countryCode: 'IT',
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
