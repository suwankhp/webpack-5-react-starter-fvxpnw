it('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  // expect(data).toBe({ one: 1, two: 2 });
  expect(data).toEqual({ one: 1, two: 2 });
});
