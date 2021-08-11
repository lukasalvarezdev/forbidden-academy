import jsonwebtoken from 'jsonwebtoken';
import { config } from '../config';
import { UserModel } from '../entities/User';

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

export async function getUser(jwt: String) {
  const tokenParts = jwt.split(' ');

  if (isBearerToken()) {
    try {
      const { sub } = jsonwebtoken.verify(tokenParts[1], config.tokenSecret);
      const user = await UserModel.findById(sub);
      return user;
    } catch (e) {
      return null;
    }
  }
  return null;

  function isBearerToken() {
    return tokenParts[0] === 'Bearer' && isJWTFormat();

    function isJWTFormat() {
      return tokenParts[1].match(/\S+\.\S+\.\S+/) !== null;
    }
  }
}
