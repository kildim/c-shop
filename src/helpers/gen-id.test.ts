import genId from './gen-id';

describe('Test genID: ', () => {
  it('should generate id sequence', () => {
    const newGen = genId();
    expect(newGen()).toBe(1);
    expect(newGen()).toBe(2);
  })
})
