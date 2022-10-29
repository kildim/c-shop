import {checkResponse} from './check-response';

describe('CheckResponse:', () => {
  it('Res: ok', () => {
    const res = {
      ok: true,
      json: () => 'OK!'
    };
    expect(checkResponse(res as unknown as Response)).toBe('OK!')
  });

  it('Res: not Ok', async () => {
    const res = {
      ok: false,
      statusText: 'ERROR 13'
    };
    await expect(checkResponse(res as Response)).rejects.toMatchObject(res);
  })
})
