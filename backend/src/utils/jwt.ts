import jsonwebtoken from 'jsonwebtoken';
import { config } from '../config';

export function issueJWT(userId: String) {
  const expiresIn = '1d';
  const payload = {
    sub: userId,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, config.tokenSecret, {
    expiresIn,
  });

  return {
    token: 'Bearer ' + signedToken,
    tokenExpiry: expiresIn,
  };
}
